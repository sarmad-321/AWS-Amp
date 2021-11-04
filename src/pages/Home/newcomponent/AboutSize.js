import React from "react";

// common imports
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
// import { Storage } from "../../Contact/component/Storage/Storage";
import { SizeCarousel } from "../../Contact/component/Size/carousel/SizeCarousel";
import { HomeSizeCarousel } from "./Sizecarousel/HomeSizeCarousel";
import { HomeCarouselSize } from "./Sizecarousel/HomeCarouselSize";

export const AboutSize = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container direction="column" className={classes.container}>
                <Grid item className={classes.item}>
                    <Typography
                        variant="h4"
                        color="primary"
                        className={classes.heading}
                        paragraph
                    >
                        Unsure on what size you need?
                    </Typography>
                    <Typography
                        variant="h6"
                        paragraph
                        color="textSecondary"
                        className={classes.subheading}
                        paragraph
                    >
                        Use our handy guide to help you decide
                    </Typography>
                </Grid>
                <Grid item>
                    <Container maxWidth="lg">
                        <HomeCarouselSize />
                    </Container>
                    {/* <Grid container>
                        <Grid item>
                            <HomeSizeCarousel />
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: "hidden",
    },
    heading: {
        fontWeight: "bold",
        textAlign: "center",
    },
    subheading: {
        textAlign: "center",
        marginBottom: "2rem",
        fontWeight: "600",
    },
    item: {
        width: "100%",
    },
}));
