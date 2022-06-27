import React, { FC } from "react";
import { Button, ButtonProps, CircularProgress } from "@material-ui/core";
// styles
import { useAppButtonStyles } from "./AppButtonStyles";

interface IAppButtonProps extends ButtonProps {
  fullWidth?: boolean;
  loading?: boolean;
}

export const AppButton: FC<IAppButtonProps> = (props) => {
  const { title, fullWidth, loading, ...rest } = props;
  const classes = useAppButtonStyles({ fullWidth });

  return (
    <Button {...rest} className={classes.root}>
      {loading ? <CircularProgress size={24} style={{ color: "#53BC0D" }} /> : title}
    </Button>
  );
};
