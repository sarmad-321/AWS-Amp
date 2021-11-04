import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
    Slide,
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Container,
    Grid,
    Button,
} from "@material-ui/core";

// icons
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

// icons
import BuildingPurple from "../../../assets/Icons/office-building-purple.svg";
import Building from "../../../assets/Icons/office-building.svg";

import HomePurple from "../../../assets/Icons/home-purple.svg";
import Home from "../../../assets/Icons/home.svg";

import GraduatedPurple from "../../../assets/Icons/graduated-purple.svg";
import Graduated from "../../../assets/Icons/graduated.svg";

import { FormDataContext } from "../../../Context/Context";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

let xyz = [{ id: "", name: "" }];

export const FormContextProvide = (props) => {
    const [type, setType] = useState();
    setType(xyz);
    return (
        <FormDataContext.Provider value={type}>
            {props.children}
        </FormDataContext.Provider>
    );
};

export const CardFooter = ({ selectedSearch, handleSelectedChange }) => {
    // const [selected, setSelected] = useState(0);
    const history = useHistory();

    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 320,
    });

    return (
        <Slide in={trigger} direction="up" mountOnEnter unmountOnExit>
            
            <AppBar position="sticky" className={classes.appBar} elevation={0}>
                <Container maxWidth="lg" className={classes.cardFooter}>
                    <Grid
                        container
                        alignItems="center"
                        spacing={2}
                        justify="space-between"
                    >
                        <Grid item md={2}>
                            <Typography
                                variant="h5"
                                color="secondary"
                                className={classes.headingOne}
                            >
                                Get A Quote
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography
                                variant="subtitle1"
                                color="secondary"
                                className={classes.headingTwo}
                            >
                                What type of Storage do you need?
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Grid
                                container
                                spacing={1}
                                className={classes.paddingBlock0}
                            >
                                {storageData.map((item, key) => {
                                    return (
                                        <Grid item key={key}>
                                            <Button
                                                variant="outlined"
                                                size="large"
                                                color="secondary"
                                                className={`${
                                                    classes.cardFooterBtn
                                                } ${
                                                    selectedSearch == item.id &&
                                                    "selected"
                                                }`}
                                                onClick={() => {
                                                    // setSelected(item.id);
                                                    handleSelectedChange(item);
                                                }}
                                            >
                                                <img
                                                    src={item.icon}
                                                    className={`${
                                                        classes.icon
                                                    } ${
                                                        selectedSearch ==
                                                            item.id &&
                                                        "selected"
                                                    }`}
                                                />
                                                {item.name}
                                            </Button>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                alignItems="center"
                                className={classes.paddingBlock0}
                            >
                                <Button
                                    disabled={selectedSearch ? false : true}
                                    size="large"
                                    color="secondary"
                                    endIcon={
                                        <ArrowForwardOutlinedIcon fontSize="large" />
                                    }
                                    className={`${classes.nextHeading} `}
                                    onClick={() => history.push("/quote")}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </Slide>
    );
};

const useStyles = makeStyles((theme) => ({
    appBar: { top: "auto", bottom: 0, background: "#f0daf2" },
    cardFooter: {},
    headingOne: {
        fontSize: "1.5rem",
        borderRight: "2px solid #a652b1",
        fontWeight: "900",
    },
    headingTwo: {
        lineHeight: "1.2",
        fontWeight: "700",
    },
    cardFooterBtn: {
        paddingBlock: theme.spacing(1.3),
        paddingInline: theme.spacing(3),
        [theme.breakpoints.only("md")]: {
            paddingInline: theme.spacing(3.2),
        },
        "&.selected": {
            boxShadow: "none",
            backgroundColor: "#a150ab",
            borderColor: "#064D7B",
            color: "#ffffff",
        },
        "&.Mui-disabled": {
            color: "rgb(166 82 177 / 58%)",
        },
    },
    nextHeading: {
        fontWeight: "900",
        fontSize: theme.spacing(3),
    },
    nextIcon: {
        marginLeft: theme.spacing(2),
        fontWeight: "900",
    },
    paddingBlock0: {
        paddingBlock: theme.spacing(0),
    },
    icon: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: theme.spacing(1.2),
        "&.selected": {
            filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(313deg) brightness(105%) contrast(101%)",
        },
    },
}));

const storageData = [
    {
        id: 1,
        name: "Business",
        icon: BuildingPurple,
        icon2: Building,
    },
    {
        id: 2,
        name: "Domestic",
        icon: HomePurple,
        icon2: Home,
    },
    {
        id: 3,
        name: "Student",
        icon: GraduatedPurple,
        icon2: Graduated,
    },
];