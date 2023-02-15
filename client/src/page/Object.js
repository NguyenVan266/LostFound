import React, { useEffect } from "react";
import Menu from "../components/Menu";
import { useAppContext } from "../Context";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { getfb } from "../api/auth";

const Object = (props) => {
  const { list_products } = props;
  const [products, setProducts] = React.useState(list_products);
  const [comments, setComments] = React.useState([]);
  const { handleLogout } = useAppContext();
  const [search, setSearch] = React.useState("");
  const onValueChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSearch = () => {
    const searchProducts = list_products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setProducts(searchProducts);
  };

  const onCategoryChange = (category) => {
    const searchProducts = list_products.filter((product) => {
      return product.category === category;
    });
    setProducts(searchProducts);
  };

  const onColorChange = (color) => {
    const searchProducts = list_products.filter((product) => {
      return product.color === color;
    });
    console.log(searchProducts);
    setProducts(searchProducts);
  };

  useEffect(() => {
    getfb().then((data) => {
      setComments(data.data);
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
                      onCategoryChange(1);
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
                      onCategoryChange(2);
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
                    name="option3"
                    value="something"
                    onClick={() => {
                      onCategoryChange(3);
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
                      onCategoryChange(4);
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
                    id="check4"
                    onClick={() => {
                      onCategoryChange(5);
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
                    id="check4"
                    onClick={() => {
                      onCategoryChange(6);
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
                      onColorChange(1);
                    }}
                  />
                  <label className="form-check-label">Xanh</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                    onClick={() => {
                      onColorChange(2);
                    }}
                  />
                  <label className="form-check-label">Đỏ</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check3"
                    name="option3"
                    value="something"
                    onClick={() => {
                      onColorChange(3);
                    }}
                  />
                  <label className="form-check-label">Tím</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                    onClick={() => {
                      onColorChange(4);
                    }}
                  />
                  <label className="form-check-label">Vàng</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                    onClick={() => {
                      onColorChange(5);
                    }}
                  />
                  <label className="form-check-label">Hồng</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                    onClick={() => {
                      onColorChange(6);
                    }}
                  />
                  <label className="form-check-label">Nâu</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                    onClick={() => {
                      onColorChange(7);
                    }}
                  />
                  <label className="form-check-label">Đen</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                    onClick={() => {
                      onColorChange(8);
                    }}
                  />
                  <label className="form-check-label">Trắng</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check4"
                    onClick={() => {
                      onColorChange(9);
                    }}
                  />
                  <label className="form-check-label">Màu khác</label>
                </div>
                <hr />
              </div>

              <div className="group-header"></div>
              <div className="group-body">
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
                    Chi tiết: <i>{item.description}</i>
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
              {comments?.map((item) => (
                <li className="item">
                  <div className="avatar">
                    <img src="/avatar_1.png" alt="" />
                  </div>

                  <div className="name">{item?.name}</div>

                  <div className="text">
                    <p>{item?.fback}</p>
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

        <Footer />
      </div>
    </div>
  );
};

Object.propTypes = {};

export default Object;
