import {
    Box,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    makeStyles,
    Typography,
    CardContent,
    Card,
    Button,
    Avatar,
} from "@material-ui/core";
import { Delete, PhoneOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { ButtonCV } from "../../../components/Button/ButtonCV";

// icons
import BuildingWhite from "../../../assets/Icons/office-building.svg";
import BuildingBlue from "../../../assets/Icons/office-building-blue.svg";

import HomeWhite from "../../../assets/Icons/home.svg";
import HomeBlue from "../../../assets/Icons/home-blue.svg";

import GraduatedWhite from "../../../assets/Icons/graduated.svg";
import GraduatedBlue from "../../../assets/Icons/graduated-blue.svg";

import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

// context
import { FormDataContext } from "../../../Context/Context";

let xyz = [{ id: "", name: "", slideNo: 1 }];

export const FormContextProvide = (props) => {
    return (
        <FormDataContext.Provider value={xyz}>
            {props.children}
        </FormDataContext.Provider>
    );
};

export const HomeBanner = ({ selectedSearch, handleSelectedChange }) => {
    const [selected, setSelected] = useState(0);
    const [slideNo, setSlideNo] = useState(1);

    const classes = styles();

    const history = useHistory();

    const handleButtonClick = () => {
        setSlideNo(2);
        xyz = { ...xyz, slideNo: slideNo };
        history.push("/quote");
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid item>
                        <Typography
                            variant="h2"
                            color="primary"
                            className={classes.heading}
                        >
                            Ivatt Self Storage Peterborough
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.paraClass}
                            variant="subtitle1"
                            component="h6"
                            color="info"
                            paragraph
                        >
                           
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ButtonCV
                            variant="outlined"
                            startIcon={<PhoneOutlined />}
                        >
                            01733306456
                        </ButtonCV>
                    </Grid>
                </Grid>
                
            </Grid>
        </Container>
    );
};

const styles = makeStyles((theme) => ({
    heading: {
        fontWeight: "800",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.8rem",
        },
    },
    paraClass: {
        fontSize: theme.spacing(2.25),
        color: "#3d3a00",
        paddingBlock: theme.spacing(1.6),
    },
    paddingBlock0: {
        paddingBlock: 0,
    },
    gridCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        maxWidth: "579px",
        maxHeight: "387px",
    },
    bannerCard: {
        paddingBottom: 0,
        ["@media (max-width: 361px)"]: {
            alignItems: "center",
            flexDirection: "column",
        },
        // [theme.breakpoints.down("xs")]: {
        //     alignItems: "center",
        //     flexDirection: "column",
        // },
    },
    card: {
        width: "447px",
        // height: "333px",
        background: theme.palette.primary.main,
    },
    cardContent: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "#ffffff",
        paddingInline: theme.spacing(4),
        paddingBlock: theme.spacing(3),
    },
    cardHeading: {
        fontWeight: "600",
    },
    cardSubHeading: {
        width: "55%",
        fontWeight: "400",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    cardClass: {
        // width: "180px",
        // height: "240px",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "1px solid #ffffff",
        height: "136px",
        width: "117px",
        "&.selected": {
            boxShadow: "none",
            backgroundColor: "#ffffff",
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
        },
    },
    cardClassContent: {
        color: "inherit",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        "& .MuiSvgIcon-root ": { fontSize: "4rem" },
    },
    cardImage: {
        "&.selected": {
            filter: "invert(42%) sepia(56%) saturate(4321%) hue-rotate(208deg) brightness(96%) contrast(93%)",
        },
    },
    cardFooterBtn: {
        paddingBlock: theme.spacing(1.3),
        "&.Mui-disabled": {
            color: "rgb(255 255 255 / 65%)",
        },
    },
    nextHeading: {
        fontWeight: "900",
        fontSize: theme.spacing(3),
        color: "#ffffff",
    },
    icon: {
        backgroundColor: theme.palette.primary.main,
    },
}));

const storageData = [
    {
        id: 1,
        name: "Business",
        icon: BuildingWhite,
        icon2: BuildingBlue,
    },
    {
        id: 2,
        name: "Domestic",
        icon: HomeWhite,
        icon2: HomeBlue,
    },
    {
        id: 3,
        name: "Student",
        icon: GraduatedWhite,
        icon2: GraduatedBlue,
    },
];
