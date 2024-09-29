const bcrypt = require("bcrypt");
const pool = require("../db");

const getUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  try {
    const findUserQuery = `SELECT * FROM users WHERE username = $1`;
    const result = await pool.query(findUserQuery, [username]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result.rows[0];
    const passwordIsMatch = await bcrypt.compare(password, user.password);

    if (!passwordIsMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    return res.status(200).json({ username: user.username, firstName: user.first_name, lastName: user.last_name });
  } catch (error) {
    console.log("Error retrieving user:", error);
    return res.status(500).json({ error: "Internal sever error" });
  }
};

module.exports = { getUser };
