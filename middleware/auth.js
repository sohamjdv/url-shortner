const { getUser } = require("../Service/auth");

function checkForAuthentication(req, res, next) {
  req.user = null;
  const tokenCookie = req.cookies?.token;
  if (!tokenCookie) {
    return next();
  }
  const token = tokenCookie.split("Bearer ")[1];
  const user = getUser(token);
  req.user = user;
  return next();
}
// async function restrictToLoginUserOnly(req, res, next) {
//   const UserId = req.cookies?.uid;
//   if (!UserId) return res.redirect("/login");
//   const user = getUser(UserId);
//   if (!user) return res.redirect("/login");
//   req.user = user;
//   next();
// }

// async function checkAuth(req, res, next) {
//   const UserId = req.cookies?.uid;

//   const user = getUser(UserId);

//   req.user = user;
//   next();
// }

//Authorization
function restrictTo(roles = []) {
  return function (req, res, next) {
    // console.log(req.cookies)
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) return res.end("UnAuthorized");
    return next();
  };
}
module.exports = {
  //   restrictToLoginUserOnly,
  //   checkAuth,
  checkForAuthentication,
  restrictTo,
};
