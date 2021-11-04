import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    wrapIcon: {
        minWidth: "156px",
        display: "flex",
        flexDirection: "row",
        fontWeight: "normal",

        "& span": {
            paddingLeft: theme.spacing(2),
        },
    },
}));

export const IconText = (props) => {
    const classes = useStyles();
    return (
        <Typography variant="subtitle2" className={classes.wrapIcon}>
            {props.children}
        </Typography>
    );
};
