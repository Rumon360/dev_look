const jwt = require("jsonwebtoken");

const ADMIN_CREDENTIALS = {
  email: "admin@example.com",
  password: "password",
};

const JWT_SECRET = process.env.JWT_SECRET;

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email !== ADMIN_CREDENTIALS.email) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (password !== ADMIN_CREDENTIALS.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "2h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  loginUser,
};
