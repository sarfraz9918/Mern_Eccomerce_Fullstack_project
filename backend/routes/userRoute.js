const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.Controller"); // Use consistent lowercase for filenames

// Define routes
router.post("/signup", userController.Signup); // Use camelCase for method names
router.post("/login", userController.Login); // Use camelCase for method names


// Export the router
module.exports = router;
