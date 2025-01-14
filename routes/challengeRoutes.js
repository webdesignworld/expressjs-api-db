
const express = require("express");
const { Challenge } = require("../backend/models/challengesSchema"); 
const router = express.Router();

// POST route to create a new challenge
router.post("/create", async (req, res) => {
  const { title, category, description, difficulty_level, manager_id } = req.body;

  try {
    // Create the new challenge
    const newChallenge = new Challenge({
      title,
      category,
      description,
      difficulty_level,
      manager_id
    });

    // Save the challenge to the database
    await newChallenge.save();

    // Return the new challenge data (excluding _id if needed)
    res.status(201).json({
      message: "Challenge created successfully",
      challenge: newChallenge
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
