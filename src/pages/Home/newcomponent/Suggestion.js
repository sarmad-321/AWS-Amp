import React from "react";
import { Avatar, Container, Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { SizeCarousel } from "../../Contact/component/Size/carousel/SizeCarousel";

export const Suggestion = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.root}>
            <Grid container disableGutter={true}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        color="primary"
                        className={classes.benefitsHeading}
                        gutterBottom
                    >
                        Unsure on what size you need?
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        className={classes.benefitsPara}
                        paragraph
                    >
                        Use our handy guide to help you decide
                    </Typography>
                </Grid>
                <Grid container disableGutter={true}>
                    <SizeCarousel cardBorder="cardBorder" />
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: "10%",
    },
    benefitsHeading: { fontWeight: "900", textAlign: "center" },
    benefitsPara: {
        textAlign: "center",
        color: "#77838F",
        width: "50%",
        margin: "auto",
        [theme.breakpoints.down("sm")]: { width: "100%" },
        [theme.breakpoints.up("lg")]: { marginBottom: theme.spacing(3) },
    },
}));
