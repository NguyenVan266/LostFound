import React from "react";
import Menu from "../components/Menu";
import { useAppContext } from "../Context";

const About = (props) => {
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

      <h1>THÔNG TIN CHUNG</h1>
      <br></br>
      <br></br>

      <h2>Ý TƯỞNG TỔ CHỨC</h2>
      <br></br>

      <p>
        Hiện tượng làm mất đồ, nhặt được đồ bị mất xảy ra thường xuyên trong
        khuôn viên HUST nói riêng. Quá trình liên hệ trao trả gặp nhiều khó
        khăn. Tuy có các group, page hay confession hỗ trợ nhưng số lượng nhiều
        dẫn đến tình trạng bị trôi bài đăng, mất tương tác. Khiến quá trình thực
        hiện chưa hiệu quả và như mong muốn. Vì vậy chúng mình xây dựng Website
        này để hỗ trợ các bạn sinh viên đang trong tình huống nói trên.
      </p>
      <br></br>
      <br></br>

      <h2>MỤC TIÊU MONG MUỐN</h2>
      <br></br>

      <p>Mục tiêu mà Website này hướng tới đó là:</p>
      <p>
        Cung cấp cho các bạn sinh viên một công cụ hỗ trợ trong việc tìm kiếm và
        trao lại các món đồ vật bị mất
      </p>
      <br></br>
      <br></br>
      <h2>CÁC CHỨC NĂNG CHÍNH CỦA WEB</h2>

      <ul>
        <li>- Trang chủ giới thiệu và mô tả hoạt động website</li>
        <li>- Trang thông tin đồ vật</li>
        <li>- Xây dựng mục tìm kiếm sản phẩm, lọc trực quan, dễ sử dụng</li>
        <li>- Phản hồi ẩn danh</li>
      </ul>
      <br></br>
      <br></br>

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
      <br></br>
      <br></br>

      <h1>CÁCH THỨC HOẠT ĐỘNG</h1>
      <br></br>
      <p>
        - Người A nhặt được đồ vật a thông qua bên trung gian để ghi lại dữ liệu
        đồ vật, bên quản lí sẽ đẩy dữ liệu đồ vật a nhận kí gửi lên website
      </p>
      <p>
       - Người B được cho là chủ nhân của đồ vật a, thông qua website biết được
        đồ vật mình đã làm mất. Tiến hành đến bên trung gian nhận đồ trực tiếp
      </p>

      <br></br>
      <br></br>
      <h3>Bên trung gian tiếp nhận những loại đồ vật như nào?</h3>
      <p>
        Do tính chất đồ vật nên hiện chỉ tiếp nhận những đồ vật có tính HSD lâu
        dài, không tiếp nhận một số đồ vật như: đồ ăn thức uống, đồ vật không
        còn tinh sử dụng ( chai nhựa dùng 1 lần, giày dép rách,…)
      </p>


      <br></br>
      <br></br>
      <h3>Phân loại các đồ vật tiếp nhận như nào?</h3>
      <p>Có thể phân loại theo:</p>
      <ul>
        <li>- Học liệu ( sách vở, đồ dùng học tập,...)</li>
        <li>- Đồ dùng cá nhân giá trị thấp (Áo khoác, bình nước cá nhân, …)</li>
        <li>
          - Đồ dùng cá nhân giá trị cao ( Điện thoại, chuột máy tính, lap, ..)
        </li>
        <li>- Đồ vật tính nhận diện xác định ( Thẻ sv, ví, cmnd,…)</li>
        <li>- Đồ vật khó nhận diện cho người ngoài ( Thẻ xe, chìa khóa,..)</li>
        <li>- Đồ vật khác</li>
      </ul>


      <br></br>
      <br></br>
      <h3>
        Nếu một người đến nhận đồ vật, làm thế nào xác nhận đúng là chủ nhân
        thực sự của đồ vật đó
      </h3>

      <p>
        - Khi đến nhận yêu cầu ghi lại và ảnh chụp của CCCD/CMND, trong trường hợp
        không có CCCD/CMND thì dùng xác thực tương đương là: Ảnh chụp thông tin
        sinh viên/giảng viên trên hệ thống nhà trường
      </p>
      <p>
        - Đồng thời khi nhận sẽ có văn bản pháp lý đi kèm để người nhận và bên
        trung gian ký. Kể từ lúc ký văn bản sẽ có hiệu lực. Người nhận hoàn toàn
        chịu trách nhiệm về đồ vật đã nhận nếu có bất cứ sự việc, tố cáo nào xảy
        ra trước pháp luật.
      </p>


      <br></br>
      <br></br>
      <h3>Nếu đồ vật không có người đến nhận thì sẽ xử lí như nào?</h3>
      <ul>
        <li>
          - Với những đồ vật mang tinh nhận diện sẽ có thể lưu trữ mãi mãi trong
          kho: CCCD, thẻ sinh viên, Bằng LX
        </li>
        <li>
          - Với những đồ vật cá nhân còn tinh sử dụng và không có tính nhận diện,
          lưu trữ trong khoảng 2 tháng, hết thời gian đó sẽ theo từng đợt trong
          năm quyên góp cho các tổ chức từ thiện: Quần áo, giày dép, ô, binh
          nước, quạt,…
        </li>
        <li>
          - Các đồ vật khác sẽ tùy theo tình hình mà có thời gian lưu trữ khác
          nhau: Theo 1 tuần, 2 tuần, 1 tháng, 2 tháng, có thể lưu trữ mãi
        </li>
      </ul>

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

About.propTypes = {};

export default About;
