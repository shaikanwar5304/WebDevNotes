"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    //create() is a custom controller method
    //used to create a new order
    try {
      const { products } = ctx.request.body;
      //lineItems contains all the products after verification from backend
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const productEntities = await strapi.entityService.findMany(
            "api::product.product",
            {
              filters: {
                key: product.key,
              },
            }
          );
          const realProduct = productEntities[0];
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: realProduct.title,
                images: [product.image],
              },
              unit_amount: realProduct.price * 100,
            },
            quantity: product.quantity,
          };
        })
      );
      //creating
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ["US"],
        },
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.CLIENT_BASE_URL}/payments/success`,
        cancel_url: `${process.env.CLIENT_BASE_URL}/payments/failure`,
      });

      await strapi.entityService.create("api::order.order", {
        data: {
          products,
          stripeId: session.id,
        },
      });
      return { stripeId: session.id };
    } catch (error) {
      console.log(error);
      ctx.response.status = 500;
      return error;
    }
  },
}));
