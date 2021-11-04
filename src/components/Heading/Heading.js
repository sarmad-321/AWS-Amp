import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./Heading.css";

const useStyles = makeStyles({
  root: {
    // color: (props) => {props.color},
  },
});

export const Heading = (props) => {
  const classes = useStyles(props);
  return (
    <Typography variant={props.variant} component="h2" className={classes.root}>
      {props.children}
    </Typography>
  );
};

Heading.defaultProps = {
  variant: "subtitle1",
  color: "primary",
  children: "Text Filed",
};
