import React, { useState } from "react";

// Common Imports
import {
    Avatar,
    Container,
    Grid,
    Typography,
    Tabs,
    Tab,
    Button,
    Box,
    Hidden,
} from "@material-ui/core";
// import { MapContainer } from "../../Parking/components/ParkingMapContainer";

import useWindowSize from "../../../WindowSize";

import { makeStyles } from "@material-ui/styles";

import { Map } from "../../../components/Map";
import { ContactBanner } from "../../../components/ContactBanner";
import { PhotoGallery } from "./PhotoGallery";
import { PhotGallerySmall } from "./PhotGallerySmall";

export const TogglePhotoMAp = () => {
    const classes = useStyles();

    const [component, setComponent] = useState(1);
    return (
        <Container maxWidth="lg">
            <Grid container justify="center" direction="column" spacing={5}>
                <Grid item>
                    <Container maxWidth="sm" className={classes.btnContainer}>
                        <Button
                            onClick={() => setComponent(0)}
                            className={`${classes.button} ${
                                component == 0 ? "selected" : ""
                            }`}
                            style={{ background: "transparent" }}
                        >
                            Photo Gallery
                        </Button>
                        <span className={classes.border}></span>
                        <Button
                            onClick={() => setComponent(1)}
                            className={`${classes.button} ${
                                component == 1 ? "selected" : ""
                            }`}
                            style={{ background: "transparent" }}
                        >
                            Store Location
                        </Button>
                    </Container>
                </Grid>
                <Grid item>
                    {component == 0 ? (
                        <PhotoGalleryComponent />
                    ) : (
                        <MapComponent />
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    button: {
        background: "transparent",
        paddingBlock: theme.spacing(0.5),
        paddingInline: theme.spacing(0),
        marginInline: theme.spacing(4),
        fontSize: "1.5rem",
        borderRadius: 0,
        color: "#064D7B",
        ["@media (max-width : 634px)"]: {
            marginInline: theme.spacing(2),
        },
        ["@media (max-width : 543px)"]: {
            marginInline: theme.spacing(1),
            fontSize: "3.5vw",
        },
        "&.selected": {
            borderBottom: "2px solid",
        },
    },
    border: {
        border: "1px solid #064D7B",
        paddingBlock: theme.spacing(2),
    },
    mapConatiner: {
        paddingRight: 0,
    },
    mapBottomInfo: {
        marginTop: theme.spacing(-16),
        position: "absolute",
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(0),
            position: "relative",
            marginLeft: "auto",
        },
    },
}));

const MapComponent = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.mapConatiner}>
            <Grid container>
                <Map />
            </Grid>
            <Hidden smDown>
                <div className={classes.mapBottomInfo}>
                    <ContactBanner />
                </div>
            </Hidden>
        </Container>
    );
};

const PhotoGalleryComponent = () => {
    const [width] = useWindowSize();
    return width > 874 ? <PhotoGallery /> : <PhotGallerySmall />;
};
