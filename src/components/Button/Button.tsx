import React from "react";
import { Link, LinkProps } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type ButtonType = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  type?: string;
  onClick?: () => void;
}

const Button:React.FC<ButtonType> = ({to, href, children, type, onClick}: ButtonType) => {
  let Comp:
    | string
    | React.ForwardRefExoticComponent<
        LinkProps & React.RefAttributes<HTMLAnchorElement>
      > = "button";
  let classes = cx("wrapper");
  let _props: {
    to?: string;
    href?: string;
    type?: string;
    onClick?: () => void;
  } = {};

  if (type === "left") {
    classes = cx("left");
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    Comp = "a";
    _props.href = href;
  } else if (onclick) {
    _props.onClick = onClick;
  }

  const Result: JSX.Element = React.createElement(
    Comp,
    {
      ..._props,
      className: classes,
    },
    children
  );
  return Result;
}

export default Button;
