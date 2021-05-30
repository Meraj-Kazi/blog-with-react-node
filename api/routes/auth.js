const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Commenters = require("../models/Commenters");

//REGISTER Blogger
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//REGISTER Commenter
router.post("/CommenterReg", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newCommenters = new Commenters({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const commenters = await newCommenters.save();
    res.status(200).json(Commenters);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN Commenter
router.post("/CommenterLogin", async (req, res) => {
  try {
    const commenters = await Commenters.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, commenters.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = commenters._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
