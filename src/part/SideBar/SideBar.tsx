import classNames from "classnames/bind";

import Button from "../../components/Button/Button";
import styles from "./SideBar.module.scss";
import { ReactComponent as IconFiltersWishlist } from "../../assets/icon/filterswish.svg";
import { ReactComponent as IconFiltersRating } from "../../assets/icon/filtersrating.svg";
import { ReactComponent as IconFiltersReviews } from "../../assets/icon/filtersreview.svg";
import { ReactComponent as IconGenresAction } from "../../assets/icon/genresaction.svg";
import { ReactComponent as IconGenresStrategy } from "../../assets/icon/genresstrategy.svg";
import { ReactComponent as IconGenresRPG } from "../../assets/icon/genresrpg.svg";
import { ReactComponent as IconGenresShooter } from "../../assets/icon/genresshooter.svg";
import { ReactComponent as IconGenresAdventure } from "../../assets/icon/genresadventure.svg";
import { ReactComponent as IconGenresPuzzle } from "../../assets/icon/genrespuzzle.svg";
import { ReactComponent as IconGenresRacing } from "../../assets/icon/genresracing.svg";
import { ReactComponent as IconGenresSport } from "../../assets/icon/genressport.svg";

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("fillters")}>
          <h3 className={cx("h3-text")}>Filters</h3>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconFiltersWishlist className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Wishlist</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconFiltersRating className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Ratings</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconFiltersReviews className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Reviews</p>
            </Button>
          </div>
        </div>

        <div className={cx("genres")}>
          <h3 className={cx("h3-text")}>Genres</h3>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconGenresAction className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Action</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconGenresStrategy className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Strategy</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconGenresRPG className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>RPG</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconGenresShooter className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Shooter</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconGenresAdventure className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Adventure</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconGenresPuzzle  className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Puzzle</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconGenresRacing className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Racing</p>
            </Button>
          </div>
          <div className={cx("sidebar-btn")}>
            <Button>
              <div className={cx("icon")}>
                <IconGenresSport className={cx("icon-hover")}/>
              </div>
              <p className={cx("p-text")}>Sports</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
