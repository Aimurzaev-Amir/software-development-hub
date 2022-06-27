import React, { FC, memo } from "react";
import { Checkbox, CheckboxProps, FormControlLabel } from "@material-ui/core";
// styles
import { useAppCheckboxStyles } from "./AppCheckboxStyles";

interface IAppCheckbox extends CheckboxProps {
  label?: string;
}

export const AppCheckbox: FC<IAppCheckbox> = memo((props) => {
  const { label, ...rest } = props;
  const classes = useAppCheckboxStyles();

  return (
    <FormControlLabel
      control={<Checkbox {...rest} classes={{ root: classes.root, checked: classes.checked }} />}
      label={<p className={classes.label}>{label}</p>}
      style={{ width: "fit-content" }}
    />
  );
});
