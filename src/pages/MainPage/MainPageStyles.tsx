import { makeStyles } from "@material-ui/core/styles";

export const useMainPageStyles = makeStyles((theme) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 280px)",
      gap: "30px",
      justifyContent: "center",
    },
    title: {
      fontSize: "20px",
      textAlign: "center",
      fontWeight: "bold",
    },

    emptyList: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "calc(100vh - 100px)",
    },
    emptyList__img: {
      maxWidth: "338px",
      maxHeight: "301px",
    },
    emptyList__textBox: {
      marginLeft: "40px",
    },
    emptyList__textBox_title: {
      fontSize: "70px",
      lineHeight: "105px",
      fontWeight: 700,
      color: "#53BC0D",
    },
    emptyList__textBox_text: {
      maxWidth: "800px",
      fontSize: "50px",
      lineHeight: "75px",
      fontWeight: 500,
      color: "#000",
    },
  };
});
