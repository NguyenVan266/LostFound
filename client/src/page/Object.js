import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { useAppContext } from "../Context";
import { Link } from "react-router-dom";
import { getfb } from "../api/auth";

const Object = (props) => {
  const { list_products } = props;
  const [name, setName] = useState("");
  const [products, setProducts] = useState(list_products);
  const [fb, setFb] = useState([]);
  const { handleLogout } = useAppContext();
  const onValueChange = (e) => {
    setName(e.target.value);
  };
  const handleSearch = () => {
    const data_search = list_products.filter((item) => {
      if (item.name.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
    setProducts(data_search);
  };

  const onSelectCategory = (category) => {
    const data_search = list_products.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    setProducts(data_search);
  };

  const onSelectColor = (color) => {
    const data_search = list_products.filter((item) => {
      if (item.color === color) {
        return item;
      }
    });
    setProducts(data_search);
  };

  useEffect(() => {
    getfb().then((res) => {
      setFb(res.data);
    });
  }, []);

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
        <div id="wp-products">
          <h2>ĐỒ VẬT THẤT LẠC</h2>

          <div className="col-md-8 mx-auto">
            <div className="input-group pb-5">
              <input
                className="text_search"
                placeholder="Tìm kiếm.."
                onChange={onValueChange}
              />
              <button onClick={handleSearch}>Tìm</button>
            </div>
          </div>

          <div className="row data">
            <div className="col-3 filter">
              <div className="filter-search">
                <i className="fa-solid fa-filter"></i>
                <div className="filter-status">BỘ LỌC TÌM KIẾM</div>
              </div>

              <div className="group-header">Theo phân loại</div>
              <div className="group-body">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                    onClick={() => {
                      onSelectCategory(1);
                    }}
                  />
                  <label className="form-check-label" for="check1">
                    Học liệu
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                    onClick={() => {
                      onSelectCategory(2);
                    }}
                  />
                  <label className="form-check-label" for="check2">
                    Đồ dùng cá nhân giá trị thấp
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check3"
                    onClick={() => {
                      onSelectCategory(3);
                    }}
                  />
                  <label className="form-check-label" for="check3">
                    Đồ dùng cá nhân giá trị cao
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                    onClick={() => {
                      onSelectCategory(4);
                    }}
                  />
                  <label className="form-check-label" for="check4">
                    Đồ vật tính nhận diện xác định
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check5"
                    onClick={() => {
                      onSelectCategory(5);
                    }}
                  />
                  <label className="form-check-label" for="check4">
                    Đồ vật khó nhận diện cho người ngoài
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check6"
                    onClick={() => {
                      onSelectCategory(6);
                    }}
                  />
                  <label className="form-check-label" for="check4">
                    Đồ vật khác
                  </label>
                </div>
                <hr />
              </div>

              <div className="group-header">Theo màu sắc</div>
              <div className="group-body">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                    onClick={() => {
                      onSelectColor(4);
                    }}
                  />
                  <label className="form-check-label">Đen</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                    onClick={() => {
                      onSelectColor(3);
                    }}
                  />
                  <label className="form-check-label">Xanh</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check3"
                    onClick={() => {
                      onSelectColor(1);
                    }}
                  />
                  <label className="form-check-label">Đỏ</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                    onClick={() => {
                      onSelectColor(2);
                    }}
                  />
                  <label className="form-check-label">Vàng</label>
                </div>
                <hr />
              </div>
            </div>
            <div className="col-9 list_products">
              {/* START LIST PRODUCTS */}

              {products?.map((item) => (
                <div className="item_products">
                  <img src={item.img} width="100%" />
                  <b className="name">
                    <Link to={`./${item._id}`}>{item.name}</Link>
                  </b>
                  <p className="style_color">
                    Màu sắc: <i>{item.color}</i>
                  </p>
                  <p className="desc">
                    Chi tiết: <i>{item.detail}</i>
                  </p>
                </div>
              ))}

              {/* END START LIST PRODUCTS */}
            </div>
          </div>
        </div>
        <div id="comment">
          <h2>PHẢN HỒI CỦA MỌI NGƯỜI</h2>
          <div id="comment-body">
            <div className="prev-cmt">
              <a href="#">
                <img src="/prev.png" alt="" />
              </a>
            </div>
            <ul id="list-comment">
              {fb?.map((item) => (
                <li className="item">
                  <div className="avatar">
                    <img src="/avatar_1.png" alt="" />
                  </div>

                  <div className="name">{item.name}</div>

                  <div className="text">
                    <p>{item.fback}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="next-cmt">
              <a href="#">
                <img src="/next.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div id="footer">
          <div className="box">
            <div className="logo">
              <img src="/logo.png" alt="" />
            </div>
            <p>
              Hỗ trợ nhiệt tình trao trả các đồ vật thất lạc trong khu vực
              trường
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
    </div>
  );
};

Object.propTypes = {};

export default Object;
