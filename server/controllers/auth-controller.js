const User = require("../models/user-model");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const userExist = await User.findOne({ username });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Verify password
    if (password === userExist.password) {
      const token = await userExist.generateToken(); // Assume `generateToken()` is implemented
      return res.status(200).json({ msg: "Login Successful", token });
    } else {
      return res.status(401).json({ msg: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { login };
