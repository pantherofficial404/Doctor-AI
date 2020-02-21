import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: theme.spacing() * 2,
    padding: "2.5rem",
    marginTop: theme.spacing() * 7,
    [theme.breakpoints.only("xs")]: {
      boxShadow: "none"
    }
  }
}));

export default useStyles;
