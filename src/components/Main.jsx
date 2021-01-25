import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useLayoutEffect } from "react";

import { TopLeft, TopRight } from "./Navbar/NavbarElements";
import Sidebar from "./Sidebar/Sidebar";
import POList from "./POList/POList";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100vh",
  },
  item1: {
    backgroundColor: "#38414a",
    color: "#fff",
    height: "10%",
    padding: 10,
  },
  item2: {
    height: "10%",
  },
  item3: {
    height: "90%",
  },
  item4: {
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  open:{
    justifyContent: "flex-start",
  },
  sidebarMargin:{
    marginRight:10,
  }
}));

const Main = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(window.innerWidth > 768);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const resizeWindow = () => {
    setOpen(window.innerWidth > 768);
  };

  const getCols = () => (open ? 3 : 1);
  useLayoutEffect(() => {
    window.addEventListener("resize", resizeWindow);
  }, []);

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid
        container
        item
        spacing={0}
        xs={3}
        xl={3}
        className={classes.item1}
        alignItems="center"
      >
        <TopLeft />
      </Grid>
      <Grid
        container
        item
        xs={9}
        xl={9}
        alignItems="center"
        justify="flex-end"
        className={classes.item2}
      >
        <TopRight />
      </Grid>
      <Grid container item xs={getCols()} md={getCols()} xl={getCols()} className={classes.item3}>
        <Sidebar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      </Grid>
      <Grid
        container
        item
        alignItems="center"
        justify="center"
        xs={12-getCols()} md={12-getCols()} xl={12-getCols()}
        className={clsx(classes.item4,{
        [classes.open]:!open
      })}
      >
        <POList />
      </Grid>
    </Grid>
  );
};

export default Main;
