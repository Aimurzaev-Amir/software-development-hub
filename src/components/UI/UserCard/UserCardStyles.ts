import { makeStyles } from "@material-ui/core/styles";

export const useUserCardStyles = makeStyles((theme) => {
  return {
    root: {
      background: "#FFFFFF",
      cursor: "pointer",
      width: "280px",
      borderRadius: "15px",
      border: "1px solid rgba(0, 0, 0, .125)",
      overflow: "hidden",
      position: "relative",
    },
    removeBtn: {
      position: "absolute",
      right: 5,
      top: 5,
      minWidth: "unset",
    },
    avatar: {
      display: "block",
      borderRadius: "100%",
      width: "50px",
      height: "50px",
      margin: "-30px auto 0px",
      border: "1px solid rgba(0, 0, 0, .125)",
      objectFit: "contain",
      background: "#FFFFFF",
    },
    background: {
      width: "100%",
      height: "50px",
      objectFit: "cover",
    },
    body: {
      padding: "15px 10px",
    },
    body__title: {
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "10px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    body__text: {
      fontSize: "14px",
    },
    body__text_label: {
      fontWeight: "bold",
    },
    footer: {
      padding: "5px 10px 15px",
    },
  };
});
