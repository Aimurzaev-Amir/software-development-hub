import { makeStyles } from "@material-ui/core/styles";

export const useAppCheckboxStyles = makeStyles((theme) => ({
  root: {
    color: "#AEAFB4",
  },
  checked: {
    color: "#53BC0D !important",
  },
  label: {
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: 500,
    color: "#000",
  },
}));
