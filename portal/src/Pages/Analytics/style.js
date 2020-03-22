import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#F5F7FE",
    position: "relative"
  },
  datePicker: {
    textAlign: "right"
  },
  DatePickerButton: {
    marginTop: "4rem",
    marginRight: "2em",
    background: "#fff",
    color: "#111",
    fontWeight: 900,
    boxShadow: "none",

    "&:hover": {
      boxShadow: "none",
      background: "#fff"
    }
  },
  dateTimePiker: {
    marginTop: "1rem",
    position: "absolute",
    left: "70%"
  },
  summary: {
    marginTop: theme.spacing() * 5
  },
  Card: {
    border: "none",
    boxShadow: "none",
    borderRadius: "5px"
  },
  tooltipclasses: {
    textAlign: "right",
    paddingRight: theme.spacing() * 1,
    color: "gray"
  },
  icondiv: {
    color: "#7C79EB"
  },
  icon: {
    fontSize: theme.spacing() * 5
  },
  numberOfentity: {
    fontSize: "64px",
    color: "rgb(0, 0, 0)",
    fontWeight: "bold",
    marginTop: theme.spacing() * 2
  },
  tagOfCard: {
    padding: 0,
    fontSize: theme.spacing() * 2
  },
  LineChart: {
    marginTop: theme.spacing() * 5
  },
  BarChart: {
    marginTop: theme.spacing() * 5
  },
  cardContent: {
    padding: theme.spacing() * 5
  },
  table: {
    minWidth: 650
  },
  tableSection: {
    marginTop: theme.spacing() * 5
  },
  cardTitle: {
    fontSize: "2em",
    padding: theme.spacing() * 2
  }
}));

export default useStyles;
