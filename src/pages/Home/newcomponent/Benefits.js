import React from "react";

// Common Imports
import { Avatar, Container, Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import imgContainer from "./container.jpg";

// icons
import Door from "../../../assets/images/door.svg";
import Roof from "../../../assets/images/roof.svg";
import Calender from "../../../assets/images/december.svg";
import Location from "../../../assets/images/location.svg";
import Car from "../../../assets/images/carinclined.svg";
import Employees from "../../../assets/images/employees.svg";
import Box from "../../../assets/images/box.svg";
import Coupon from "../../../assets/images/coupon.svg";
import Camera from "../../../assets/images/camera.svg";

import { Home } from "@material-ui/icons";

export const Benefits = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid container alignItems="center">
                <Grid item xs={12} className={classes.gridItem}>
                    <Typography
                        variant="h4"
                        color="primary"
                        className={classes.benefitsHeading}
                        gutterBottom
                    >
                        Store features
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        className={classes.benefitsPara}
                        paragraph
                    >
                        We are Located 5 minutes from city centre and the A1.
                        Our storage space has 8ft high ceilings and can be
                        accessed 7 days a week.
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={6}
                            sm={6}
                            md={5}
                            lg={4}
                            className={classes.iconsGrid}
                        >
                            {benefitsData.map((item, key) => {
                                return (
                                    <Grid
                                        container
                                        alignItems="center"
                                        className={classes.iconContainer}
                                    >
                                        <img
                                            src={item.icon}
                                            className={classes.icon}
                                        />
                                        <Grid item>
                                            <Typography
                                                variant="h5"
                                                color="textSecondary"
                                                className={classes.textLeft}
                                            >
                                                {item.text}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                color="textSecondary"
                                                className={classes.textLeft}
                                            >
                                                {item.text2}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={6}
                            md={5}
                            lg={4}
                            className={classes.iconsGrid}
                        >
                            {benefitsData2.map((item, key) => {
                                return (
                                    <Grid
                                        container
                                        alignItems="center"
                                        className={classes.iconContainer}
                                    >
                                        <img
                                            src={item.icon}
                                            className={classes.icon}
                                        />
                                        <Grid item>
                                            <Typography
                                                variant="h5"
                                                color="textSecondary"
                                                className={classes.textLeft}
                                            >
                                                {item.text}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                color="textSecondary"
                                                className={classes.textLeft}
                                            >
                                                {item.text2}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <Hidden mdDown>
                            <Grid
                                item
                                xs
                                sm={6}
                                md={5}
                                lg={3}
                                className={classes.iconsGrid}
                            >
                                {benefitsData3.map((item, key) => {
                                    return (
                                        <Grid
                                            container
                                            className={classes.iconContainer}
                                        >
                                            <img
                                                src={item.icon}
                                                className={classes.icon}
                                            />
                                            <Grid item>
                                                <Typography
                                                    variant="h5"
                                                    color="textSecondary"
                                                    className={classes.textLeft}
                                                >
                                                    {item.text}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    color="textSecondary"
                                                    className={classes.textLeft}
                                                >
                                                    {item.text2}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    gridItem: {
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    benefitsHeading: { fontWeight: "900" },
    benefitsPara: {
        color: "#77838F",
        width: "50%",
        margin: "auto",
        [theme.breakpoints.down("sm")]: { width: "100%" },
        [theme.breakpoints.up("lg")]: { marginBottom: theme.spacing(3) },
    },
    iconContainer: {
        ["@media (max-width: 500px)"]: {
            flexDirection: "column",
            alignItems: "start",
        },
    },
    icon: {
        marginRight: theme.spacing(4),
    },
    textLeft: {
        textAlign: "start",
        fontSize: "1.2rem",
    },
    iconsGrid: {
        [theme.breakpoints.up("lg")]: {
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
    },
}));

const benefitsData = [
    {
        icon: Door,
        text: "Smart entry",
        text2: "technology",
    },
    {
        icon: Roof,
        text: "8 feet high",
        text2: "ceilings",
    },
    {
        icon: Calender,
        text: "Access 7",
        text2: "days a week",
    },
];

const benefitsData2 = [
    {
        icon: Location,
        text: "Convenient",
        text2: "location",
    },
    {
        icon: Car,
        text: "Drive up",
        text2: "access",
    },
    {
        icon: Employees,
        text: "Staff on site 7",
        text2: "days a week",
    },
];

const benefitsData3 = [
    {
        icon: Box,
        text: "Packing",
        text2: "materials",
    },
    {
        icon: Coupon,
        text: "Long and short",
        text2: "term discounts",
    },
    {
        icon: Camera,
        text: "24 hour",
        text2: "CCTV",
    },
];
