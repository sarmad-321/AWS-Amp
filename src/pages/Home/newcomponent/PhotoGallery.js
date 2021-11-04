import React from "react";
import { Button } from "@material-ui/core";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import uuidv4 from "react-uuid";
import { useState } from "react";

import Rectangle from "./Rectangle.svg";
import ContainerImage from "./container.jpg";

import { Container, makeStyles } from "@material-ui/core";

// arrows
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const slides = [
    {
        key: uuidv4(),
        content: <img src={Rectangle} alt="1" style={{ height: "100%" }} />,
    },
    {
        key: uuidv4(),
        content: (
            <img src={ContainerImage} alt="2" style={{ height: "100%" }} />
        ),
    },
    {
        key: uuidv4(),
        content: <img src={Rectangle} alt="3" style={{ height: "100%" }} />,
    },
    {
        key: uuidv4(),
        content: (
            <img src={ContainerImage} alt="4" style={{ height: "100%" }} />
        ),
    },
    {
        key: uuidv4(),
        content: <img src={Rectangle} alt="5" style={{ height: "100%" }} />,
    },
    {
        key: uuidv4(),
        content: (
            <img src={ContainerImage} alt="6" style={{ height: "100%" }} />
        ),
    },
    {
        key: uuidv4(),
        content: <img src={Rectangle} alt="7" style={{ height: "100%" }} />,
    },
    {
        key: uuidv4(),
        content: (
            <img src={ContainerImage} alt="8" style={{ height: "100%" }} />
        ),
    },
];

export const PhotoGallery = () => {
    const classes = useStyles();
    const [goToSlide, setGoToSlides] = useState(1);
    return (
        <Container maxWidth="xs">
            <div className={classes.imgCarousel}>
                <Carousel
                    slides={slides}
                    // animationConfig={config.gentle}
                    goToSlide={goToSlide}
                    offsetRadius={2}
                />
                <div className={classes.carouselBody}>
                    <div className={classes.arrows}>
                        <Button onClick={() => setGoToSlides(goToSlide - 1)}>
                            <ArrowBackIcon color="primary" />
                        </Button>
                        <Button onClick={() => setGoToSlides(goToSlide + 1)}>
                            <ArrowForwardIcon color="primary" />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    imgCarousel: {
        width: " 80%",
        height: "450px",
        margin: "0 auto",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    carouselBody: {
        margin: "0 auto",
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        // [theme.breakpoints.down("md")]: {
        //     width: "100%",
        // },
    },
    // arrows: {
    //     width: "250px",
    // },
}));
