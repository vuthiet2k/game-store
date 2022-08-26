import classNames from "classnames/bind"
import { useState } from "react";

import styles from "./Header.module.scss"
import Button from "../../components/Button/Button";
import UserCart from "../../components/UserCaet/UserCart";
import iconHeadHome from "../../assets/icon/headgame.svg"
import SearchHead from "../../assets/icon/headersearch.svg"


const cx = classNames.bind(styles);

function Header() {

    const [search, setSearch] = useState("")

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("head-left")}>
                    <div className={cx("page")}>
                        <Button to="/" > 
                            <img className={cx("icon")} alt="icon" src={iconHeadHome} />
                            <h3>Game Store</h3>
                        </Button>
                    </div>
                    <div className={cx("form")}>
                        <input 
                            type="text" 
                            placeholder="Search games..." 
                            value={search}
                            onChange={(e) => {setSearch(e.target.value)}}
                        />
                        <button type="submit">
                            <img src={SearchHead} alt="icon" />
                        </button>
                    </div>
                </div>
                <UserCart/>
            </div>
        </div>
    )
}

export default Header;