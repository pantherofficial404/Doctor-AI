import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  docDetails: {
    height: "100vh"
  },
  docDetailsContent: {
    display: "flex",
    height: "90vh",
    justifyContent: "Center",
    alignItems: "Center"
  },
  title: {
    fontSize: "1.5rem"
  },
  container: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.0), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: theme.spacing() * 2,
    padding: "2.5rem",
    marginTop: theme.spacing() * 7,
    [theme.breakpoints.only("xs")]: {
      boxShadow: "none"
    }
  },

  doctextfield: {
    margin: "0.9rem 0px",
    width: "100%"
  },
  thumnaiimages: {
    cursor: "pointer",
    color: "#7563FF"
  },
  icon: {
    color: "#7563FF"
  },
  submitButton: {
    marginTop: "2rem",
    marginBottom: "2rem",
    background: "#7563FF",
    color: "#fff"
  },
  formcontrol: {
    marginTop: "1rem",
    marginLeft: "0.2rem",
    [theme.breakpoints.only("xs")]: {
      marginTop: "-1rem",
      marginLeft: "-0.5rem"
    }
  },
  Docicon: {
    textAlign: "Center"
  },
  icondoctor: {
    marginTop: theme.spacing() * 9,
    marginRight: theme.spacing() * 10,
    height: "300px",
    width: "300px",
    [theme.breakpoints.only("xs")]: {
      marginRight: 0,
      height: "200px",
      width: "200px"
    }
  }
}));

export default useStyles;
