// PostgreSQL Queries

const checkUserQuery = `SELECT * FROM users WHERE email = $1 OR username = $2`;
const findUserQuery = `SELECT * FROM users WHERE email = $1 AND username = $2`;
const findUserByUsernameQuery = `SELECT * FROM users WHERE username = $1`;

const insertUserQuery = `
INSERT INTO users (first_name, last_name, email, username, password)
VALUES ($1, $2, $3, $4, $5)
RETURNING *
`;

const deleteUserQuery = `DELETE FROM users WHERE username = $1 AND email = $2`;

module.exports = { checkUserQuery, findUserQuery, findUserByUsernameQuery, insertUserQuery, deleteUserQuery };
