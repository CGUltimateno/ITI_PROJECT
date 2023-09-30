const userModel = require("../models/userModel");
const router = require("express").Router();

// Get one user by ID
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


// Get All Users
router.get("/" , async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await userModel
          .find()
          .sort({
            _id: -1,
          })
          .limit(5)
      : await userModel.find();
    res.status(200).json({
      users,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
