import React, { FC } from "react";
// styles
import { useMainPageStyles } from "../MainPageStyles";
// images
import logoImg from "../../../assets/images/logo.png";

export const EmpyList: FC = () => {
  const classes = useMainPageStyles();

  return (
    <div className={classes.emptyList}>
      <img className={classes.emptyList__img} src={logoImg} alt="Software development hub logo" />
      <div className={classes.emptyList__textBox}>
        <p className={classes.emptyList__textBox_title}>Whoops...</p>
        <p className={classes.emptyList__textBox_text}>User list is empty...</p>
      </div>
    </div>
  );
};
