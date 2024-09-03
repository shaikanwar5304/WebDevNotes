const router = require("express").Router();
const UserController = require("../controllers/userController");
const reqUser = require("../middlewares/requireUser");

router.post("/follow", reqUser, UserController.followOrUnfollowUserController);
router.get("/getPostsOfFollowing", reqUser, UserController.getPostsOfFollowing);
module.exports = router;
