import React, { FC, memo } from "react";
import { Select, SelectProps } from "@material-ui/core";
// styles
import { useAppSelectStyles } from "./AppSelectStyles";

interface IAppSelect extends SelectProps {}

export const AppSelect: FC<IAppSelect> = memo((props) => {
  const { children, ...rest } = props;
  //   hooks
  const classes = useAppSelectStyles();

  return (
    <React.Fragment>
      <Select
        style={{ width: "100%", borderRadius: "10px", overflow: "hidden" }}
        classes={{ root: classes.root }}
        disableUnderline
        displayEmpty
        MenuProps={{
          disableScrollLock: false,
          anchorOrigin: { vertical: 48, horizontal: 0 },
          transformOrigin: { vertical: "top", horizontal: "left" },
          getContentAnchorEl: null,
        }}
        {...rest}
      >
        {children}
      </Select>
    </React.Fragment>
  );
});
