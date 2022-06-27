import { makeStyles } from "@material-ui/core/styles";

export const useHeaderStyles = makeStyles((theme) => {
  return {
    root: {
      background: "#141416",
      padding: "0px 20px",
    },
    body: {
      maxWidth: "1440px",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      margin: "10px auto",
    },
    link: {
      textDecoration: "none",
    },
    logo__link: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: "11px",
      lineHeight: "13px",
      maxWidth: "135px",
      textTransform: "uppercase",
    },
    logo__link_img: {
      width: "40px",
      height: "40px",
      marginRight: "4px",
    },
  };
});
