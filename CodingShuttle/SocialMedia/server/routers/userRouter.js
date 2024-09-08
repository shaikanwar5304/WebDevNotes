const router = require("express").Router();
const UserController = require("../controllers/userController");
const reqUser = require("../middlewares/requireUser");

router.post("/follow", reqUser, UserController.followOrUnfollowUserController);
router.get("/getFeedData", reqUser, UserController.getPostsOfFollowing);
router.delete("/deleteUser", reqUser, UserController.deleteUser);
router.get("/getMyPosts", reqUser, UserController.getMyPosts);
router.get("/getMyInfo", reqUser, UserController.getMyInfo);
router.put("/", reqUser, UserController.updateProfile);
router.post("/getUserProfile", reqUser, UserController.getUserProfile);
module.exports = router;
