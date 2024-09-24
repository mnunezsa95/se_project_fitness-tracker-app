const express = require("express");
const pool = require("./db");

const PORT = 3001;
const app = express();
app.use(express.json());

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching students:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    return res.status(200).json(results.rows);
  });
};

app.get("/students", getUsers);

app.listen(PORT, async () => {
  console.log(`Server is running on Port ${PORT}`);
  try {
    await pool.query("SELECT 1");
    console.log(`Connected to the sql database`);
  } catch (err) {
    console.error("SQL database connection failed:", err);
    process.exit(1);
  }
});
