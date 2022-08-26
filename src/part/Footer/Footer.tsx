import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import iconHeadHome from "../../assets/icon/headgame.svg";
import styles from "./Footer.module.scss";
import Contact from "../../components/Contact/Contact";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("game-store")}>
          <Button to="/" type="left">
            <img alt="icon" src={iconHeadHome} />
            <h3>Game Store</h3>
          </Button>
        </div>
        <div className={cx("about-title")}>
          <div className={cx("colum")}>
            <ul>
              <li className={cx("first-h3")}>
                <a href="#">Company</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">About</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">Press Center</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className={cx("colum")}>
            <ul>
              <li className={cx("first-h3")}>
                <a href="">Consoles</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">Playstaion 5</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">Xbox One</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">Swich</a>
              </li>
            </ul>
          </div>
          <div className={cx("colum")}>
            <ul>
              <li className={cx("first-h3")}>
                <a href="">Resources</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">Help Center</a>
              </li>

              <li className={cx("p-text")}>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className={cx("colum")}>
            <ul>
              <li className={cx("first-h3")}>
                <a href="">Product Help</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">Support</a>
              </li>
              <li className={cx("p-text")}>
                <a href="">File a Bug</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("about-plus")}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Footer;
