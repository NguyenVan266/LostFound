const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../model/User");

module.exports.genarateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      role: user.role,
    },
    "secret"
  );
};

module.exports.loginUser = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(200).json({
      success: false,
      msg: "Sai tên đăng nhập",
    });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(200).json({
      success: false,
      msg: "Sai mật khẩu",
    });
  }

  if (user && validPassword) {
    const accessToken = this.genarateAccessToken(user);
    return res.status(200).json({
      success: true,
      data: user,
      token: accessToken,
      msg: "Đăng nhập thành công",
    });
  }
};

module.exports.getProfile = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  return res.status(200).json({
    success: true,
    data: user,
  });
};

module.exports.createUser = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(500).json({
      success: false,
      msg: "Email đã tồn tại",
    });
  }
  const newUser = await new User({
    name: req.body.name,
    email: req.body.email,
    password: hashed,
    role: req.body.role,
  }).save();
  return res.status(200).json({
    success: true,
    data: newUser,
  });
};

module.exports.sendfb = async (req, res, next) => {
  const user = await User.findOne({ role: 1 });
  user.fback = req.body.fback;
  await user.save();
  return res.status(200).json({
    success: true,
    data: user,
  });
};
