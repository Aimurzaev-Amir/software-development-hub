import { AppBar } from "@material-ui/core";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
// images
import logoImg from "../../assets/images/logo.png";
// components
import { AppButton } from "../UI/AppButton/AppButton";
// styles
import { useHeaderStyles } from "./HeaderStyles";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
  const classes = useHeaderStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <div className={classes.body}>
        <NavLink to="/" className={classes.logo__link}>
          <img src={logoImg} alt="software development hub logo" className={classes.logo__link_img} />
          Software development hub
        </NavLink>
        <NavLink to="/create" className={classes.link}>
          <AppButton title="Create user" />
        </NavLink>
      </div>
    </AppBar>
  );
};
