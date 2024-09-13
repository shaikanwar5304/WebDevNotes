const router = require("express").Router();
const postsController = require("../controllers/postsController");
const requireUser = require("../middlewares/requireUser");
//route, middleware, controller
//takes caption and postImg
//returns post
router.post("/createPost", requireUser, postsController.createPost);
//takes postId
// returns post after formatting
router.post("/likeUnLike", requireUser, postsController.likeUnLike);
//takes postId
//returns msg
router.post("/deletePost", requireUser, postsController.deletePost);
//takes postId and caption
//returns post after formatting
router.post("/updatePost", requireUser, postsController.updatePost);
module.exports = router;
