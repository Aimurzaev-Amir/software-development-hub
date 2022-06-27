import { makeStyles } from "@material-ui/core/styles";

export const useProfilePageStyles = makeStyles((theme) => {
  return {
    root: {},
    background: {
      position: "absolute",
      height: "235px",
      objectFit: "cover",
      width: "100%",
      top: 60,
      left: 0,
      borderRadius: "0px 0px 20px 20px",
      zIndex: 0,
    },
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    windowLoader: {
      position: "relative",
      zIndex: 1,
      margin: "80px auto 20px",
      overflow: "hidden",
      borderRadius: "100px",
      background: "#FFFFFF",
      maxWidth: "280px",
    },
    window: {
      position: "relative",
      zIndex: 1,
      margin: "80px auto 20px",
      maxWidth: "280px",
      width: "100%",
      padding: "50px 50px 30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "#FFFFFF",
      borderRadius: "100px",
      textAlign: "center",
      overflow: "hidden",
    },
    window__btn: {
      marginTop: "10px",
    },
    window__avatar: {
      borderRadius: "100%",
      objectFit: "cover",
      width: "100px",
      height: "100px",
      border: "3px solid #53BC0D",
    },
    window__title: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: "10px 0px 5px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    window__text: {
      fontSize: "14px",
    },
    window__text_subtitle: {
      fontWeight: "bold",
      color: "#53BC0D",
    },

    biography: {
      margin: "50px 0px",
    },
    body__title: {
      fontSize: "20px",
      color: "#666666",
      fontWeight: 400,
      marginBottom: "10px",
    },
    body__text: {
      fontSize: "16px",
    },

    users: {},
    users__list: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 280px)",
      justifyContent: "space-between",
      gap: "20px",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  };
});
