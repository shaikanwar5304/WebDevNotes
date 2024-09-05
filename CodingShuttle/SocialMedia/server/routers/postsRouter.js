const router = require("express").Router();
const postsController = require("../controllers/postsController");
const requireUser = require("../middlewares/requireUser");
//route, middleware, controller
router.post("/", requireUser, postsController.createPostController);
router.delete("/", requireUser, postsController.deletePost);
router.put("/", requireUser, postsController.updatePostController);
router.post("/like", requireUser, postsController.likeAndUnlikePost);
router.get("/:id", requireUser, postsController.getUserPosts);
module.exports = router;
