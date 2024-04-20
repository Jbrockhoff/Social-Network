const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

//All users
router.route("/").get(getUsers).post(createUser);

//userId
router
  .route("/:userId")
  .get(getSingleUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
