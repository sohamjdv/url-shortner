// const sessionIdToUserMap = new Map(); for stateful
//for stateless
const jwt = require("jsonwebtoken");
// secrete key
const SECRET = process.env.JWT_SECRET;
console.log("JWT SECRET:", SECRET);
// function setUser(id, user) {
//   sessionIdToUserMap.set(id, user);
// }
function setUser(user) {
  //   sessionIdToUserMap.set(id, user);

  return jwt.sign({ _id: user._id, email: user.email,role:user.role }, SECRET);
}
// function getUser(id) {
//   return sessionIdToUserMap.get(id);
// }
function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null; 
  }
}

module.exports = {
  setUser,
  getUser,
};
