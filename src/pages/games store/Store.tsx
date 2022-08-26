import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { getData } from "../../apis";
import Product from "../../components/Product/Product";
import Footer from "../../part/Footer/Footer";
import Header from "../../part/Haeder/Header";
import SideBar from "../../part/SideBar/SideBar";

import styles from "./Store.module.scss";

const cx = classNames.bind(styles);

const Topic = () => {
  const [allData, setAllData] = useState<any[]>([]);
  useEffect(() => {
    getData("name").then((res) => {
      setAllData(res.data);
    });
    getData("name").catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <div className={cx("container")}>
        <h1>Trending and interesting</h1>
        <p>Based on player counts and ratings</p>
        <div className={cx("touch-bar")}></div>
        <div className={cx("product")}>
          {allData.map((product) => {
            return (
              <div key={product.id} className={cx("avatar")}>
                <Product
                  to={product.id}
                  name={product.name}
                  src={product.avatar}
                  money={product.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

function Store() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("inner")}>
        <SideBar />
        <Topic />
      </div>
      <Footer />
    </div>
  );
}

export default Store;
