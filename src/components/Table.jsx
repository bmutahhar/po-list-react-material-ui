import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    height: "80%",
    display:"flex",
    justifyContent: "center"
  },
}));

const Table = () => {
  const classes = useStyles();
  return <Paper className={classes.root} elevation={2} square>
      <h2>PO List</h2>
  </Paper>;
};

export default Table;
