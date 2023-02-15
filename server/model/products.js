const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    // required: true
  },
  description: {
    type: String,
  },
  detail: {
    type: String,
  },
  color: {
    type: Number,
    enum: [
<<<<<<< HEAD
      1, // "Xanh",
      2, // "Đỏ",
      3, // "Tím",
      4, // "Vàng"
      5, // "Hồng"
      6, // "Nâu"
      7, //"Đen"
      8, // "Trắng"
      9, //"Còn lại"
=======
      1, // "Đỏ",
      2, // "Vàng",
      3, // "Xanh",
      4, // "Đen",
>>>>>>> 1d6cfaae484776c67731ab23e2979ccca447215d
    ],
  },
  category: {
    type: Number,
    required: true,
    enum: [
      1, // Học liệu ( sách vở, đồ dùng học tập,...)
      2, // Đồ dùng cá nhân giá trị thấp (Áo khoác, bình nước cá nhân, …)
      3, // Đồ dùng cá nhân giá trị cao ( Điện thoại, chuột máy tính, lap, ..)
      4, // Đồ vật tính nhận diện xác định ( Thẻ sv, ví, cmnd,…)
      5, // Đồ vật khó nhận diện cho người ngoài ( Thẻ xe, chìa khóa,..)
      6, // Đồ vật khác
    ],
  },
});

module.exports = mongoose.model("product", productSchema);
