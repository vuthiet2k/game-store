import classNames from "classnames/bind";
import Contact from "../../components/Contact/Contact";
import styles from "./LogIn.module.scss";
import LogoLogin from "../../assets/images/login.png";
import iconIntagram from "../../assets/icon/instagram.png";
import { useEffect, useState } from "react";
import { postData } from "../../apis";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);

function LogIn() {
  const [account, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  const handlerEmail = (e: { target: { value: any; }; }) => {
    // eslint-disable-next-line no-const-assign
    setEmail( e.target.value)
  }
  const handlerPass = (e: { target: { value: any; }; }) => {
    // eslint-disable-next-line no-const-assign
    setPass( e.target.value)
  }
  // useEffect(() => {
  //   postData('user', {
  //     account: account,
  //     password: pass
  //   })
  // }, [account])
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* <img src={LogoLogin} alt="logo" /> */}
        <div className={cx("form-register")}>
          <div className={cx("form")}>
            <div className={cx("h2-logo")}>Store Game</div>
            <div className={cx("form-log-in")}>
              <input
                className={cx("input-login")}
                type="text"
                placeholder="Số điện thoại hoặc email"
                onChange={handlerEmail}
              />
              <input
                className={cx("input-login")}
                type="text"
                placeholder="Mật khẩu"
                onChange={handlerPass}
              />
              <button type="submit" id={cx("submit")}>
                <Button href="/">Đăng nhập</Button>
              </button>
            </div>
            <span className={cx("or")}>--- Hoặc ---</span>
            <Button href="https://www.instagram.com/">
              <img src={iconIntagram} alt="icon" className={cx("icon-insta")} />
              <p>Đăng nhập bằng Instagram</p>
            </Button>
            <span className={cx("foget-pass")}>Quên mật khẩu?</span>
          </div>

          <div className={cx("register")}>
            <span className={cx("color-white")}>Bạn chưa có tài khoản ư?</span>
            <button className={cx("btn-register")}>
              <Button href="/register">Đăng ký</Button>
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default LogIn;
