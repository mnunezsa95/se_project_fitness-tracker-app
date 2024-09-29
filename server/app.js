const express = require("express");
const pool = require("./db");
const userRoutes = require("./routes/userRoutes");

const PORT = 3001;
const app = express();

app.use(express.json());
app.use("/api/v1/users", userRoutes);

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
