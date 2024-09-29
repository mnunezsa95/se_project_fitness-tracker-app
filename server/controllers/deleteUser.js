const pool = require("../db");

const deleteUser = async (req, res) => {
  const { email, username } = req.body;

  if (!email || !username) {
    return res.status(400).json({ error: "Email and username are required" });
  }

  try {
    const findUserQuery = `SELECT * FROM users WHERE email = $1 AND username = $2`;
    const result = await pool.query(findUserQuery, [email, username]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User account not found" });
    }

    const deleteUserQuery = `DELETE FROM users WHERE username = $1 AND email = $2`;
    await pool.query(deleteUserQuery, [username, email]);

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user:", error);
    return res.status(500).json({ error: "Internal sever error" });
  }
};

module.exports = { deleteUser };
