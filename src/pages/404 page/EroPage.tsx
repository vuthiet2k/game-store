import classNames from "classnames/bind";

import Header from "../../part/Haeder/Header";
import styles from "./EroPage.module.scss"

const cx = classNames.bind(styles);

function EroPage() {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("inner")}>
                404 ERROR
            </div>
        </div>
    )
}

export default EroPage;