const bcrypt = require("bcrypt");
const pool = require("../db");
const { checkUserQuery, insertUserQuery } = require("../queries/queries");

const saltRounds = 10;

const createUser = async (req, res) => {
  const { firstName, lastName, email, username, password, confirmPassword } = req.body;

  if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const result = await pool.query(checkUserQuery, [email, username]);

    if (result.rows.length > 0) {
      return res.status(400).json({ error: "Email or username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await pool.query(insertUserQuery, [firstName, lastName, email, username, hashedPassword]);

    return res.status(201).json({ message: "User created successfully", user: newUser.rows[0] });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createUser };
