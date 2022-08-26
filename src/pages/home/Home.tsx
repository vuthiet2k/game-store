import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import bgHome from "../../assets/images/backgroundHome.mp4";
import Button from "../../components/Button/Button";
import iconHeadHome from "../../assets/icon/headgame.svg";
import iconHeadStore from "../../assets/icon/headstore.svg";
import iconBodyBrowse from "../../assets/icon/bodybrowse.svg";
import iconBodyPlayDice from "../../assets/icon/bodyplaydice.svg";
import iconBodyGithub from "../../assets/icon/bodygithub.svg";
import iconBodyLinkedLn from "../../assets/icon/bodylinkedln.svg";
import iconSidebarGame from "../../assets/icon/sidegame.svg";
import iconSidebarEroPage from "../../assets/icon/sideeropage.svg";
import iconSidebarEroQuery from "../../assets/icon/sideeroquery.svg";
import iconSidebarCommit from "../../assets/icon/sidecommit.svg";
import iconSidebarPerfor from "../../assets/icon/sidePerfor.svg";
import iconSidebarTechnologies from "../../assets/icon/sidetechnologies.png";
import iconSidebarOurSouce from "../../assets/icon/sideoursouce.svg";
import UserCart from "../../components/UserCaet/UserCart";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("home")}>
      <video className={cx("background-home")} autoPlay loop muted>
        <source type="video/mp4" src={bgHome} />
      </video>

      <div className={cx("wrapper")}>
        <div className={cx("head-home")}>
          <div className={cx("pages-store")}>
            <div className={cx("page")}>
              <Button to="/404">
                <img
                  className={cx("icon-head")}
                  alt="icon"
                  src={iconHeadHome}
                />
                <h3>Game Store</h3>
              </Button>
            </div>
            <div className={cx("store")}>
              <Button to="/store">
                <img
                  className={cx("icon-head")}
                  alt="icon"
                  src={iconHeadStore}
                />
                <h3>Browse Store</h3>
              </Button>
            </div>
          </div>

          <div className={cx("user-cart")}>
            <UserCart />
          </div>
        </div>

        <div className={cx("inner")}>
          <div className={cx("context")}>
            <div className={cx("node-text")}>
              <h1>Game Store</h1>
              <p>
                The best destination to buy new games to competitive prices. 24
                hour support, "best price" guarantee and a flawless UX. Wish for
                more? Tell us below — or check out our{" "}
                <span className={cx("careers")}>careers.</span>
              </p>
            </div>

            <div className={cx("side-router")}>
              <div className={cx("btn-route")}>
                <Button to="/">
                  <img src={iconBodyBrowse} alt="icon" />
                  <p>Browse</p>
                </Button>
              </div>
              <div className={cx("btn-route")}>
                <Button to="/">
                  <img src={iconBodyPlayDice} alt="icon" />
                  <p>Play Dice</p>
                </Button>
              </div>
              <div className={cx("btn-route")}>
                <Button href="https://github.com/gianlucajahn/react-ecommerce-store">
                  <img src={iconBodyGithub} alt="icon" />
                  <p>GitHub</p>
                </Button>
              </div>
              <div className={cx("btn-route")}>
                <Button href="https://www.linkedin.com/in/gianlucajahn/">
                  <img src={iconBodyLinkedLn} alt="icon" />
                  <p>LinkedLn</p>
                </Button>
              </div>
            </div>
          </div>

          <div className={cx("side-bar")}>
            <h3>Quick Navigation</h3>
            <div className={cx("btn-sidebar")}>
              <img src={iconSidebarGame} alt="icon" />
              <p>Game Page</p>
            </div>
            <div className={cx("btn-sidebar")}>
              <img src={iconSidebarEroPage} alt="icon" />
              <p>404 Page</p>
            </div>
            <div className={cx("btn-sidebar")}>
              <img src={iconSidebarEroQuery} alt="icon" />
              <p>404 Query</p>
            </div>
            <div className={cx("btn-sidebar")}>
              <img src={iconSidebarCommit} alt="icon" />
              <p>Commit Log</p>
            </div>
            <div className={cx("btn-sidebar")}>
              <img src="#s" alt="icon" />
              <p>Performance</p>
            </div>
            <div className={cx("btn-sidebar")}>
              <img src={iconSidebarTechnologies} alt="icon" />
              <p>Technologies</p>
            </div>
            <div className={cx("btn-sidebar")}>
              <img src={iconSidebarOurSouce} alt="icon" />
              <p>Our Sources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
