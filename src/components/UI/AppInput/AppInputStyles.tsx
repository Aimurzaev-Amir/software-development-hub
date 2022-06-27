import { makeStyles, Theme } from "@material-ui/core/styles";

export const useAppInputStyles = makeStyles<Theme>((theme) => {
  return {
    root: {
      position: "relative",
      width: "100%",
    },

    inputRoot: {
      background: "#FFFFFF",
      border: "1px solid #ECEEEF",
      borderRadius: "10px",
      padding: "13px 18px",
      width: "100%",
    },

    multilineInputRoot: {
      background: "#FFFFFF",
      borderRadius: "10px",
      padding: "20px 20px",
      width: "100%",
      border: "2px solid #ECEEEF",
    },

    helperText: {
      fontSize: "12px",
      marginTop: "5px", 
      fontWeight: 500,
      color: "#FF554A",
    },
  };
});
