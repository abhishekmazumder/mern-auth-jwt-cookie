import asyncHandler from "express-async-handler"


// @desc Auth user/token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

export { authUser };
