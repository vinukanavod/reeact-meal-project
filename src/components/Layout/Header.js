import React, { Fragment } from "react";
import Image from "../../assets/meals.jpg";
import HeaderCartButton from "../Cart/HeaderCartButton";
import classes from "./Header.module.css";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>ReactMeal</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>

      <div className={classes["main-image"]}>
        <img src={Image} alt="Atable full of delicious food!" />
      </div>
    </Fragment>
  );
}
