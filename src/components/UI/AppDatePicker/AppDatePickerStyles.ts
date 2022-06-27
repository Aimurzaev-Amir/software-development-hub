import { makeStyles } from "@material-ui/core/styles";

export const useAppDatePickerStyles = makeStyles((theme) => ({
  input: {
    background: "#FFFFFF !important",
    height: "100%",
    border: "1px solid #EEEEEE",
    borderRadius: "10px",
    padding: "13px 3px 13px 18px",
    width: "100%",
    "&::placeholder": {
      color: "#000",
    },
  },
  helperText: {
    fontSize: "12px",
    marginTop: "5px",
    fontWeight: 500,
    color: "#FF554A",
  },
}));
