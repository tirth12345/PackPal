const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const { User, Category, Item, Alert, SharedList } = require("./models"); // Import current models

const authRoutes = require("./routes/auth");

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to the Backend API!');
});
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MySQL and start the server
sequelize
  .sync({ force: false }) // Set `force: true` to drop and recreate tables (useful during development)
  .then(() => {
    console.log("Connected to MySQL and synced models");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MySQL", err);
  });