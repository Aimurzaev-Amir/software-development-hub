import React, { memo } from "react";
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@material-ui/core";
// components
import { Routes } from "../routes/Routes";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { NotistackRedirect } from "../components/NotistackRedirect/NotistackRedirect";

export const Layout = () => {
  return (
    <React.Fragment>
      {/* normalize css */}
      <CssBaseline />
      <SnackbarProvider preventDuplicate anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <ScrollToTop />
        <NotistackRedirect />
        <Routes />
      </SnackbarProvider>
    </React.Fragment>
  );
};
