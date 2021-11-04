import React, { useState } from "react";
import { Container, Grid, Button, makeStyles } from "@material-ui/core";

import Rectangle from "./Rectangle.svg";
import ContainerImage from "./container.jpg";

// arrows
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const images = [
    { image: Rectangle },
    { image: ContainerImage },
    { image: Rectangle },
    { image: ContainerImage },
    { image: Rectangle },
];

export const PhotGallerySmall = () => {
    const classes = useStyles();
    const [image, setImage] = useState(0);
    return (
        <Grid container>
            <Grid item xs={12}>
                <img
                    src={images[image].image}
                    alt={""}
                    className={classes.image}
                />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.arrows}>
                    <Button
                        onClick={() => setImage(image - 1)}
                        disabled={image == 0 && true}
                    >
                        <ArrowBackIcon color="primary" />
                    </Button>
                    <Button
                        onClick={() => setImage(image + 1)}
                        disabled={image == images.length - 1 && true}
                    >
                        <ArrowForwardIcon color="primary" />
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    arrows: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
    },
}));
