const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    const accessToken = token?.replace("Bearer ", "");
    jwt.verify(accessToken, "secret", (err, user) => {
      if (err) {
        return res.status(200).json({
          success: false,
          msg: "Phien dang nhap het han",
        });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(200).json({
      success: false,
      msg: "Ban can dang nhap",
    });
  }
};
