const { v4: uuidv4 } = require("uuid");
const USER = require("../models/user");
const { setUser } = require("../Service/auth");

async function handleSingUp(req, res) {
  const { name, email, password } = req.body;
  await USER.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}
async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await USER.findOne({ email, password });
  if (!user)
    return res.render("login", {
      error: "Invallid UserName and Password",
    });
  // const sessionId = uuidv4();
  // setUser(sessionId, user);
  const token=setUser( user);
  // res.cookie("uid",sessionId)
  res.cookie("token",`Bearer ${token}`)
  return res.redirect("/");
}

module.exports = {
  handleSingUp,
  handleLogin,
};
