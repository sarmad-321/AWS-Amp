import React from "react";
// Common components
import { Container, Grid, makeStyles } from "@material-ui/core";
import { ContactBanner } from "../../../components/ContactBanner";
import { Map } from "../../../components/Map";

export const ParkingMapContainer = ({ maxWidth }) => {
    const classes = useStyles();
    return (
        <Container maxWidth={maxWidth ? "lg" : false} disableGutters>
            
            <Grid container className={classes.mapBottomInfo}>
                <ContactBanner />
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    mapContainer: {
        height: "600px",
        width: "100%",
    },
    mapBottomInfo: {
        marginTop: theme.spacing(-16),
        position: "absolute",
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(0),
            position: "relative",
        },
    },
}));
