import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Product.module.scss";
import iconAddToCart from "../../assets/icon/addToCart.svg";

const cx = classNames.bind(styles);

interface ProductType {
  to: string;
  src?: string;
  name: string;
  money: string;
  onCLick?: () => void;
}

function Product({ to, src, name, money }: ProductType) {
  return (
    <div className={cx("wrapper")}>
      <Link to={to}>
        <img className={cx("image")} src={src} alt="img" />
      </Link>
      <div className={cx("inner")}>
        <div className={cx("add-money")}>
          <button className={cx("add-to-cart")}>
            <Button type="left">
              <p>Add to cart</p>
              <img src={iconAddToCart} alt="icon" />
            </Button>
          </button>
          <h3 className={cx("money")}>{money}</h3>
        </div>
        <Button to="#" type="left">
          {name}
        </Button>
      </div>
    </div>
  );
}

export default Product;
