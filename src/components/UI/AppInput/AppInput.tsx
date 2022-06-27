import React, { FC, memo } from "react";
import { TextField, StandardTextFieldProps } from "@material-ui/core";
// styles
import { useAppInputStyles } from "./AppInputStyles";

interface IAppInput extends StandardTextFieldProps {
  istouched?: boolean;
  errormsg?: string;
}

export const AppInput: FC<IAppInput> = memo((props) => {
  const { istouched, errormsg, ...rest } = props;
  // hooks
  const classes = useAppInputStyles();

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        InputProps={{ disableUnderline: true, className: classes.inputRoot }}
        variant="standard"
        {...rest}
      />
      {istouched && errormsg && <p className={classes.helperText}>{errormsg}</p>}
    </div>
  );
});
