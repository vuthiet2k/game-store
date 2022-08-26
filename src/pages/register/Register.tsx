import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import Contact from "../../components/Contact/Contact";
import styles from "./Register.module.scss";
import iconIntagram from "../../assets/icon/instagram.png";

const cx = classNames.bind(styles);

function Register() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("form")}>
          <h2 className={cx("h2-logo")}>Store Game</h2>
          <p className={cx("p-logo")}>Đăng kí để trải nghiệm Game Store</p>
          <div className={cx("btn-login")}>
            <Button href="https://www.instagram.com/accounts/login/?source=auth_switcher">
              <img src={iconIntagram} alt="icon" className={cx("icon-insta")} />
              Đăng nhập bằng Instagram
            </Button>
          </div>
          <span className={cx("or")}>--- Hoặc ---</span>
          <div className={cx("form-register")}>
            <input
              className={cx("input-register")}
              type="text"
              placeholder="Số di động hoặc email"
            />
            <input
              className={cx("input-register")}
              type="text"
              placeholder="Tên đầy đủ"
            />
            <input
              className={cx("input-register")}
              type="text"
              placeholder="Tên người dùng"
            />
            <input
              className={cx("input-register")}
              type="text"
              placeholder="Mật khẩu"
            />
            <div className={cx("rules")}>
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <b>Điều khoản, Chính sách quyền riêng tư</b> và{" "}
              <b>Chính sách cookie</b> của chúng tôi.
            </div>
            <button type="submit" id={cx("submit")}>
              <Button to="/">Đăng ký</Button>
            </button>
          </div>
        </div>
        <div className={cx("login")}>
          <span className={cx("color-white")}>Bạn chưa có tài khoản ư?</span>
          <button className={cx("btn-login")}>
            <Button to="/log-in">Đăng nhập</Button>
          </button>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Register;
