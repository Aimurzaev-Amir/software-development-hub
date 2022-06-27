import { StandardTextFieldProps, TextField } from "@material-ui/core";
import React, { FC } from "react";
// styles
import { useAppInputStyles } from "./AppInputStyles";

interface IAppInput extends StandardTextFieldProps {
  istouched?: boolean;
  errormsg?: string;
  rows?: number;
}

export const AppMultilineInput: FC<IAppInput> = (props) => {
  const { rows, istouched, errormsg, ...rest } = props;
  // hooks
  const classes = useAppInputStyles();

  return (
    <div className={classes.root}>
      <TextField
        multiline
        minRows={rows || 4}
        fullWidth
        style={{ width: "100%" }}
        className={classes.multilineInputRoot}
        InputProps={{ disableUnderline: true }}
        variant="standard"
        {...rest}
      />
      {istouched && errormsg && <p className={classes.helperText}>{errormsg}</p>}
    </div>
  );
};
