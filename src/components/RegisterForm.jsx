import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const RegisterForm = () => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth, password);
  }

  let sx = {
    input: {
      color: theme.palette.mode === "dark" ? "#3586FF" : "#FFFFFF",
      "&::placeholder": {
        color: theme.palette.mode === "dark" ? "#3586FF" : "#FFFFFF",
        opacity: 1,
      },
    },
    mb: 3,
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="pt-6 px-6">
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            id={firstName}
            type="text"
            variant="outlined"
            color="primary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
            sx={sx}
            size="large"
          />
          <TextField
            id={lastName}
            type="text"
            variant="outlined"
            color="primary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
            sx={sx}
            size="large"
          />
        </Stack>
        <TextField
          id={email}
          type="email"
          variant="outlined"
          color="primary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          size="large"
          sx={sx}
        />
        <TextField
          id={password}
          type="password"
          variant="outlined"
          color="primary"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          size="large"
          sx={sx}
        />
        <TextField
          id={dateOfBirth}
          type="date"
          variant="outlined"
          color="primary"
          label="Date of Birth"
          onChange={(e) => setDateOfBirth(e.target.value)}
          value={dateOfBirth}
          fullWidth
          required
          size="large"
          sx={sx}
        />
        <div className="pb-8">
          <Button variant="outlined" color="primary" type="submit">
            Register
          </Button>
        </div>
      </form>
      <div className="pl-6 pb-8">
        <medium>
          Already have an account? <Link to="/login">Login Here</Link>
        </medium>
      </div>
    </React.Fragment>
  );
};

export { RegisterForm };
