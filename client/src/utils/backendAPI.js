import { BASE_URL } from "./constants";

const signin = async (credentials) => {
  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Login failed:", errorData.error);
      return;
    }

    const data = await res.json();
    console.log("Login Successful", data);
  } catch (error) {
    console.error("An error occurred during login:", error);
  }
};

export { signin };
