import React from "react";
import PropTypes from "prop-types";
import Menu from "../components/Menu";
import { useAppContext } from "../Context";

const Contact = (props) => {
  const { handleLogout } = useAppContext();
  return (
    <div>
      <div id="wrapper">
        <div id="header">
          <a href="" className="logo">
            <img src="/logo.png" alt="" />
          </a>
          <Menu />
          <div id="actions">
            <div className="item">
              <button className="sign-up" onClick={handleLogout}>
                Đăng xuất
              </button>
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
      </div>

      <div id="bn">
        <div className="box-left">
          <h1></h1>
          <h1>
            <span>WEBSITE</span>
          </h1>
          <h2>
            <span>TÌM ĐỒ MẤT HUST</span>
          </h2>
        </div>
        <div className="box-right"></div>
      </div>
      <br />
      <br />
      <article className="col-sm-9 maincontent">
        <header className="page-header">
          <h1 className="page-title">Liên hệ</h1>
        </header>

        <p>
          Nếu bạn có lời nhắn nhủ đến chúng mình hay những con người đáng yêu đã
          trao trả đồ vật bị mất cho bạ. Hãy liên hệ với chúng mình nhé!
        </p>
        <br />
        <form>
          <div className="row">
            <div className="col-sm-12">
              <input className="form-control" type="text" placeholder="Họ tên" />
              <br />
            </div>
            <div className="col-sm-12">
              <input className="form-control" type="text" placeholder="Email" />
              <br />
            </div>
            <div className="col-sm-12">
              <input
                className="form-control"
                type="text"
                placeholder="Số điện thoại"
              />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <textarea
                placeholder="Để lại lời nhắn tại đây..."
                className="form-control"
                rows="9"></textarea>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-6">
              <input
                className="btn btn-action pull-left"
                type="submit"
                value="Send message"
              />
            </div>
            <div className="col-sm-6 text-right"></div>
          </div>
        </form>
      </article>

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

Contact.propTypes = {};

export default Contact;
