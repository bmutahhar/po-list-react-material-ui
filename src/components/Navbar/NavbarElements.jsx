import React from "react";
import { IconButton, Typography, Grid, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "green",
  },
  logo: {
    fontSize: "34px",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      textAlign: "center",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "62px",
    },
  },
  icons: {
    fontSize: "38px",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "68px",
    },
  },
  username: {
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "40px",
    },
  },
  grid: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
}));

export const TopLeft = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={3}>
        <Typography variant="h5" className={classes.logo}>
          Logo
        </Typography>
      </Grid>
      <Grid item xs={12} sm={9} className={classes.grid}>
        <IconButton>
          <HomeIcon style={{ color: "white" }} className={classes.icons} />
        </IconButton>
        <IconButton>
          <HelpIcon style={{ color: "white" }} className={classes.icons} />
        </IconButton>
      </Grid>
    </>
  );
};

export const TopRight = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      className={classes.grid}
      style={{
        borderBottom: "5px solid #3fa33f",
        display: "flex",
        justifyContent: "flex-end",
        height: "100%",
      }}
    >
      <Typography variant="h6" className={classes.username}>
        Hi Username!
      </Typography>
      <IconButton>
        <PersonOutlineIcon
          className={classes.icons}
          style={{ color: "#1f1f1f" }}
        />
      </IconButton>
      <IconButton>
        <Badge badgeContent={4} color="secondary">
          <MailOutlineIcon
            className={classes.icons}
            style={{ color: "#1f1f1f" }}
          />
        </Badge>
      </IconButton>
      <IconButton>
        <ExitToAppIcon className={classes.icons} style={{ color: "#1f1f1f" }} />
      </IconButton>
    </Grid>
  );
};
