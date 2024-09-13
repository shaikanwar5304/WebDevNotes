const router = require("express").Router();
const UserController = require("../controllers/userController");
const reqUser = require("../middlewares/requireUser");
//takes targetUserId
//returns targetUser if success
router.post("/follow", reqUser, UserController.followOrUnfollow);
//takes nothing
//returns msg
router.delete("/deleteUser", reqUser, UserController.deleteUser);
//takes name bio userImg2
//returns user
router.put("/updateProfile", reqUser, UserController.updateProfile);
//takes targetUserId
//returns user populated with followers and followings
router.post("/getUserProfile", reqUser, UserController.getUserProfile);
//takes targetUserId
//returns posts in object of array of posts
router.post("/getUserPosts", reqUser, UserController.getUserPosts);
//takes notihing
//returns object of array of posts
router.get("/getFeedData", reqUser, UserController.getFeedData);
//takes nothing
//returns array of 10 users
router.get("/getSuggestions", reqUser, UserController.getSuggestions);
module.exports = router;
