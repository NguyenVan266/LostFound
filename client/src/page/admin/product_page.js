import React from "react";
import { add_Product } from "../../api/products";
import { upload_Image } from "../../api/upload_img";

export default function Product_page() {
  const add_product = async (e) => {
    e.preventDefault();

    const input_file = document.querySelector(".input_file");

    async function url() {
      if (input_file.files[0]) {
        if (input_file.files[0].size > 0) {
          const response = await upload_Image(input_file.files[0]);
          return response.data.url;
        }
      } else {
        return "";
      }
    }

    // console.log( url());

    const new_product = {
      name: document.querySelector(".name").value,
      category: document.querySelector(".category").value,
      address: document.querySelector(".address").value,
      color: document.querySelector(".color").value,
      description: document.querySelector(".description").value,
      detail: document.querySelector(".detail").value,
      img: await url(),
    };

    console.log(new_product);

    await add_Product(new_product);

    window.location.href = "../products";
  };

  return (
    <div className="create_products">
      <h3>Thêm mới sản phẩm!</h3>
      {/* Form */}
      <div className="form_action">
        <form onSubmit={(e) => add_product(e)}>
          <div className="list_item">
            <div className="item_form">
              <p>
                Tên sản phẩm: <i>*</i>
              </p>
              <input
                type="text"
                className="name"
                placeholder="Tên sản phẩm"></input>
            </div>
            <div className="item_form">
              <p>
                Danh mục sản phẩm: <i>*</i>
              </p>
              <select className="category">
                <option value="1">Học liệu</option>
                <option value="2">Đồ dùng cá nhân giá trị thấp</option>
                <option value="3">Đồ dùng cá nhân giá trị cao</option>
                <option value="4">Đồ vật tính nhận diện xác định</option>
                <option value="5">Đồ vật khó nhận diện cho người ngoài</option>
                <option value="6">Đồ vật khác</option>
              </select>
            </div>
            <div className="item_form">
              <p>
                Địa chỉ: <i>*</i>
              </p>
              <input
                className="address"
                type="text"
                placeholder="Địa chỉ"></input>
            </div>
            <div className="item_form">
              <p>
                Màu sắc: <i>*</i>
              </p>
              <input
                className="color"
                type="text"
                placeholder="Màu sắc sản phẩm"></input>
            </div>
            <div className="item_form">
              <p>
                Mô tả: <i>*</i>
              </p>
              <textarea
                className="description"
                rows="3"
                placeholder="Thông tin mô tả"></textarea>
            </div>
            <div className="item_form">
              <p>
                Mô tả chi tiết: <i>*</i>
              </p>
              <textarea
                className="detail"
                rows="3"
                placeholder="Thông tin chi tiết"></textarea>
            </div>
            <div className="item_form">
              <p>
                Hình ảnh: <i>*</i>
              </p>
              <input type="file" name="file" id="file" className="input_file" />
            </div>
          </div>
          <button className="btn_submit" type="submit">
            Lưu
          </button>
        </form>
        <i>* là trường thông tin bắt buộc!</i>
      </div>
    </div>
  );
}
