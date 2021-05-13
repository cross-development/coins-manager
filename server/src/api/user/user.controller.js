//Models
const userModel = require('./user.model');

/**
 * Gets user credential from request and returns the current user
 */
async function getCurrentUser(req, res) {
	const currentUser = await userModel.findOne({ _id: req.user._id });

	const { username, email, _id } = currentUser;

	return res.status(200).json({ user: { userId: _id, username, email } });
}

module.exports = { getCurrentUser };
