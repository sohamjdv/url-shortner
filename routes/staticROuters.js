const express = require("express");
const { route } = require("./url");
const router = (n = express.Router());
const URL = require("../models/url");
const { restrictTo } = require("../middleware/auth");

router.get("/", restrictTo(["NORMAL","ADMIN"]), async (req, res) => {
  // if(!req.user){return res.redirect("/login")}
  const allUrls = await URL.find({ createdBy: req.user._id });
  res.render("home", {
    urls: allUrls,
  });
});

router.get("/urls/admin", restrictTo(["ADMIN"]), async (req, res) => {
  const allUrls = await URL.find({});
  res.render("home", {
    urls: allUrls,
  });
});
router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/login", (req, res) => {
  return res.render("login");
});
module.exports = router;
