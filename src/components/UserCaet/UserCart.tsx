import classNames from "classnames/bind";
import Button from "../Button/Button";
import iconHeadUser from "../../assets/icon/headuser.svg";
import iconHeadCart from "../../assets/icon/headcart.svg";

import styles from "./UserCart.module.scss";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";

const cx = classNames.bind(styles);

function UserCart() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("user")}>
        <Button to="/log-in">
          <img className={cx("icon")} alt="icon" src={iconHeadUser} />
          <h3>Hoang Vu Thiet</h3>
        </Button>
      </div>
      <div className={cx("cart")}>
        <Button to="#">
          <img className={cx("icon")} alt="icon" src={iconHeadCart} />
          <Link to="/cart">
            <h3 style={{color: "#fff"}}>Cart: 0</h3>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default UserCart;
