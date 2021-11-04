import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: "0.6875rem",
        fontWeight: "900",
        minWidth: "150px",
        height: "37px",
        borderRadius: theme.spacing(1),
        border: (props) => props.border,
        maxWidth: (props) => props.maxWidth,
        background: (props) => props.background,
        marginBottom:(props) => props.marginBottom,
        marginRight:(props) => props.marginRight,
    },
}));

export const ButtonCV = (props) => {
    const classes = useStyles(props);
    // console.log('handle button',props.click)
    return (
        <>
            <Button
                variant={props.variant}
                color={props.color}
                // size="large"
                startIcon={props.startIcon}
                className={classes.root}
                onClick={props.click}
            >
                {props.children}
            </Button>
        </>
    );
};

ButtonCV.defaultProps = {
    variant: "contained",
    color: "secondary",
    children: "GET YOUR QUOTE",
};
