import React, { FC } from "react";
// styles
import { use404Styles } from "./Page404Styles";
// images
import logoImg from "../../assets/images/logo.png";

export const Page404: FC = () => {
  const classes = use404Styles();

  return (
    <div className={classes.root}>
      <img className={classes.img} src={logoImg} alt="Software development hub logo" />
      <div className={classes.textBox}>
        <p className={classes.textBox__title}>404</p>
        <p className={classes.textBox__text}>Whoops... this page is not available</p>
      </div>
    </div>
  );
};
