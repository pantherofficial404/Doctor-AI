import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  // container: {
  // //   margin: "0 auto",
  // //   boxShadow: "-5px 15px 16.83px 17px rgba(0, 0, 0, 0.05)",
  // //   padding: "0.5rem",
  // //   marginTop: theme.spacing() * 7,
  // //   [theme.breakpoints.only("xs")]: {
  // //     boxShadow: "none"
  // //   }
  // // },

  hospitalInfo: {
    marginTop: theme.spacing() * 10,
    padding: theme.spacing() * 2
  },
  Hospitaldetails: {
    height: "100vh"
  },
  hospitalsection: {
    textAlign: "center"
    // fontFamily: "Poppins"
  },
  hospitalImage: {
    height: "200px",
    width: "100%",
    display: "block",
    marginBottom: "0.5rem",
    border: "0px solid #7563FF"
    // borderRadius: "50%",
    // marginLeft: theme.spacing() * 9
  },
  rating: {
    display: "inline-block",
    margin: "0.5rem 0.4rem",
    padding: "0.2rem 0.8rem",
    background: "#7563FF",
    border: "none",
    color: "white"
  },
  hopistalname: {
    fontFamily: "Poppins,Roboto",
    fontWeight: "Bold",
    fontSize: "1.5rem"
  },
  hospitalNumber: {
    fontFamily: "Poppins,Roboto",
    fontWeight: "400",
    marginTop: "0.4rem",
    fontSize: "1rem"
  },
  hopistalAddress: {
    fontFamily: "Poppins,Roboto",
    fontWeight: "400",
    marginTop: "0.5rem",
    fontSize: "0.8rem"
  },
  hospitalurl: {
    fontFamily: "Poppins,Roboto",
    fontWeight: "400",
    marginTop: "1rem",
    fontSize: "0.8rem"
  },
  hospitaldescription: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "1.5rem",
    borderBottom: "2px solid #7563FF"
  },
  hospitaldescriptionParagraph: {
    fontFamily: "Poppins,Roboto",
    textAlign: "justify",
    fontSize: "0.8rem",
    lineHeight: "1.5rem"
  },
  categorysection: {
    display: "flex",
    justifyContent: "space-evenly",
    fontWeight: "bold",
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      flexDirection: "column"
    }
  },

  doctors: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      flexDirection: "column"
    }
  },
  doctorname: {
    fontFamily: "Poppins,Roboto",
    fontWeight: "Bold",
    fontSize: "1.5rem"
  },
  doctorcard: {
    marginRight: theme.spacing() * 2,
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing() * 1
    }
  },
  doctorDegree: {
    color: "#9A9B9F"
  }
}));

export default useStyles;
