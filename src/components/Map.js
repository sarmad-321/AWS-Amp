import React from "react";
import { makeStyles } from "@material-ui/core";
import GoogleMapReact from "google-map-react";

export const Map = () => {
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyDWXfqXLp1sDBIjrGdAxNpDgnyPDyF_j-4",
                }}
                defaultCenter={{
                    lat: 59.95,
                    lng: 30.33,
                }}
                defaultZoom={11}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    // text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const useStyles = makeStyles((theme) => ({
    mapContainer: {
        height: "600px",
        width: "100%",
    },
}));
