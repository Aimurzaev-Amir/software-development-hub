import { makeStyles } from "@material-ui/core/styles";

export const use404Styles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "calc(100vh - 100px)",
    },
    img: {
      maxWidth: "338px",
      maxHeight: "301px",
    },
    textBox: {
      marginLeft: "40px",
    },
    textBox__title: {
      fontSize: "70px",
      lineHeight: "105px",
      fontWeight: 700,
      color: "#53BC0D",
    },
    textBox__text: {
      maxWidth: "800px",
      fontSize: "50px",
      lineHeight: "75px",
      fontWeight: 500,
      color: theme.palette.text.primary,
    },
  };
});
