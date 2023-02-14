import React from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../../Context";
import { useState } from "react";

const Login = (props) => {
  const { handleLogin } = useAppContext();
  const [data, setData] = useState({});
  const handleSubmit = async () => {
    await handleLogin(data);
  };
  return (
    <div>
      <div id="wrapper">
        <div id="header">
          <a href="" className="logo">
            <img src="/logo.png" alt="" />
          </a>
          <div id="menu">
            <div className="item">
              <a href="Home.html">Trang chủ</a>
            </div>
            <div className="item">
              <a href="Object.html">Đồ vật</a>
            </div>
            <div className="item">
              <a href="About.html">Thông tin</a>
            </div>
            <div className="item">
              <a href="Contact.html">Phản hồi</a>
            </div>
          </div>
          <div id="actions"></div>
        </div>
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form action="" className="sign-in-form">
                <h2 className="title">Đăng nhập</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                  />
                </div>
                <button onClick={handleSubmit} className="btn solid">
                  Đăng nhập 
              </button>
              </form>

              <form action="" className="sign-up-form">
                <h2 className="title">Đăng nhập</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Tên đăng nhập" name="email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Mật khẩu" />
                </div>
                <input type="submit" value="Đăng ký" className="btn solid" />
              </form>
            </div>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Chưa có tài khoản?</h3>

              <button className="btn transparent" id="sign-up-btn">
                Đăng ký
              </button>
            </div>
            <img src="/img/log.svg" className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>Đã có tài khoản?</h3>
              <button className="btn transparent" id="sign-in-btn">
                Đăng nhập
              </button>
            </div>
            <img src="/img/register.svg" className="image" alt="" />
          </div>
        </div>
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
              <a href="Home.html">Trang chủ</a>
            </div>
            <div className="item">
              <a href="Object.html">Sản phẩm</a>
            </div>
            <div className="item">
              <a href="About.html">Thông tin</a>
            </div>
            <div className="item">
              <a href="Contact.html">Phản hồi</a>
            </div>
          </ul>
        </div>
        <div className="box">
          <h3>LIÊN HỆ</h3>
          <form action="">
            <input type="text" placeholder="Địa chỉ email" />
            <button>Nhận tin</button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
