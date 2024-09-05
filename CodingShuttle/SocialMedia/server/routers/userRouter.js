const router = require("express").Router();
const UserController = require("../controllers/userController");
const reqUser = require("../middlewares/requireUser");

router.post("/follow", reqUser, UserController.followOrUnfollowUserController);
router.get("/getPostsOfFollowing", reqUser, UserController.getPostsOfFollowing);
router.delete("/deleteUser", reqUser, UserController.deleteUser);
router.get("/getMyPosts", reqUser, UserController.getMyPosts);
module.exports = router;
