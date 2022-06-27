import { makeStyles, Theme } from "@material-ui/core/styles";

interface IAppButtonStylesProps {
  fullWidth?: boolean;
}

export const useAppButtonStyles = makeStyles<Theme, IAppButtonStylesProps>((theme) => {
  return {
    root: ({ fullWidth }) => ({
      width: fullWidth ? "100%" : "fit-content",
      height: "fit-content",
      color: "#FFFFFF",
      borderRadius: "100px",
      border: "3px solid #53BC0D",
      fontSize: "14px",
      fontWeight: 500,
      padding: "5px 15px",
      textTransform: "none",
      background: "#141416",
      "&:hover": {
        background: "#141416",
      },
    }),
  };
});
