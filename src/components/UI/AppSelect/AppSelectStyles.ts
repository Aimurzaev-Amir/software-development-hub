import { makeStyles, Theme } from "@material-ui/core/styles";

interface IAppSelectStylesProps {}

export const useAppSelectStyles = makeStyles<Theme, IAppSelectStylesProps>((theme) => {
  return {
    root: {
      width: "100%",
      maxWidth: "100%",
      overflow: "hidden",
      fontSize: "18px",
      lineHeight: "22px",
      color: theme.palette.text.primary,
      fontWeight: 400,
      border: "1px solid #EEEEEE",
      borderRadius: "10px",
      padding: "13px 18px",
      background: theme.palette.background.paper,
      "&:selected": {
        backgroundColor: "#CCE1FF !important",
      },
    },
    helperText: {
      fontSize: "12px",
      marginTop: "5px",
      fontWeight: 500,
      color: "#FF554A",
    },
  };
});
