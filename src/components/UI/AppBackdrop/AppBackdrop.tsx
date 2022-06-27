import React, { FC, memo } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

interface IAppBackdrop {
  open: boolean;
}

export const AppBackdrop: FC<IAppBackdrop> = memo(({ open }) => {
  return (
    <Backdrop style={{ color: "#fff", zIndex: 100 }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
});
