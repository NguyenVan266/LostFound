import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useAppContext } from "../Context";

const Home = (props) => {
    const { handleLogout } = useAppContext();
  return (
    <div id="wrapper">
      <div id="header">
        <a href="" className="logo">
          <img src="/logo.png" alt="" />
        </a>
        <Menu />
        <div id="actions">
          <div className="item">
              <button className="sign-up" onClick={handleLogout}>Đăng xuất</button>
            </div>
        </div>
      </div>
      <div id="banner">
        <div className="box-left">
          <h2>
            <span>TÌM ĐỒ</span>
            <br />
            <span>MẤT HUST</span>
          </h2>
          <p>
            Hỗ trợ mọi người trao trả và nhận lại các đồ vật bị mất trong khu
            vực trường HUST
          </p>
          <button>Truy cập ngay</button>
        </div>
        <div className="box-right">
          <img src="/img_2.png" alt="" />
        </div>
        <div className="to-bottom"></div>
      </div>

      
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
              <a href="Home.jsx">Trang chủ</a>
            </div>
            <div className="item">
              <a href="Object.jsx">Sản phẩm</a>
            </div>
            <div className="item">
              <a href="About.jsx">Thông tin</a>
            </div>
            <div className="item">
              <a href="Contact.jsx">Phản hồi</a>
            </div>
          </ul>
        </div>
        <div className="box">
          <h3>LIÊN HỆ</h3>
          <form action="">
            <button href="Contact.jsx">Gửi phản hồi ngay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
