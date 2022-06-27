import { makeStyles } from "@material-ui/core/styles";

export const useRoutesStyles = makeStyles((theme) => {
  return {
    root: {
      background: theme.palette.background.default,
      minHeight: "100vh",
      position: "relative",
    },
    bodyWrapper: {
      background: "#EDEEF0",
      padding: "20px 20px",
    },
    body: {
      minHeight: "calc(100vh - 100px)",
      maxWidth: "1278px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };
});
