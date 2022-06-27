import React, { FC } from "react";
// styles
import { use500Styles } from "./Page500Styles";
// images
import logoImg from "../../assets/images/logo.png";

export const Page500: FC = () => {
  const classes = use500Styles();

  return (
    <div className={classes.root}>
      <img className={classes.img} src={logoImg} alt="Software development hub logo" />
      <div className={classes.textBox}>
        <p className={classes.textBox__title}>500</p>
        <p className={classes.textBox__text}>Whoops... something went wrong</p>
      </div>
    </div>
  );
};
