import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div id="footer">
      <div className="box">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <p>
          Hỗ trợ nhiệt tình trao trả các đồ vật thất lạc trong khu vực trường
        </p>
      </div>
      <div className="box">
        <h3>NỘI DUNG</h3>
        <ul className="quick-menu">
          <div className="item">
            <Link to="/home">Trang chủ</Link>
          </div>
          <div className="item">
            <Link to="/products">Đồ vật</Link>
          </div>
          <div className="item">
            <Link to="/about">Thông tin</Link>
          </div>
          <div className="item">
            <Link to="/contact">Phản hồi</Link>
          </div>
        </ul>
      </div>
      <div className="box">
        <h3>LIÊN HỆ</h3>
        <form action="">
          <button
            onClick={() => {
              navigate("/contact");
            }}>
            Gửi phản hồi ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
