const { sendEmail, updateUserNameAndAvatar } = require("../../helpers");

const getCurrentUser = (req, res) => {
  res.status(200).json({
    message: "Success",
    user: req.user,
  });
};

const subscribe = async (req, res) => {
  const { email } = req.body;
  await sendEmail(email);
  res.status(200).json({
    message: "You have been subscribed  successfully",
  });
};
const updateUserData = async (req, res) => {
  const updatedUser = await updateUserNameAndAvatar(
    req.user,
    req.body.name,
    req.file
  );
  console.log("upUser", updatedUser);
  res.status(200).json({
    message: "Success",
    updatedUser,
  });
};

module.exports = {
  getCurrentUser,
  subscribe,
  updateUserData,
};
