import React, { useState } from "react";
import {
    Container,
    makeStyles,
    Grid,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./HomeSizeCarousel.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export const HomeSizeCarousel = ({ contactInfo, setContactInfo }) => {
    const classes = useStyles();
    const [selected, setSelected] = useState(1);

    const handleClick = (prop) => (event) => {
        setSelected(prop.id);
    };

    return (
        <Container className={classes.root}>
            <Swiper
                // slidesPerView={"auto"}
                pagination={false}
                navigation={true}
                freeMode={true}
                className="HomeSizeCarousel"
                // slidesPerView={1}
                breakpoints={{
                    425: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4.5,
                    },
                    1440: {
                        slidesPerView: 4.5,
                    },
                    // 1700: {
                    //     slidesPerView: 5,
                    // },
                }}
            >
                {requiredSizeData.map((cardItem, key) => {
                    return (
                        <SwiperSlide className={classes.swiperSlide}>
                            <Grid item>
                                <Card
                                    className={`${classes.cardClass} ${
                                        selected == cardItem.id && "selected"
                                    } `}
                                    variant="outlined"
                                    key={key}
                                    onClick={handleClick(cardItem)}
                                >
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        {cardItem.icon}
                                        <Typography
                                            className={classes.cardHeading}
                                        >
                                            {cardItem.headingText}
                                        </Typography>
                                        <Typography variant="" para>
                                            {cardItem.paraText}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    // root: {
    //     marginInline: "10%",
    // },
    cardClass: {
        width: "227px",
        color: "#064D7B",
        height: "295px",
        border: "1px solid #064D7B",
        "&.selected": {
            boxShadow: "none",
            backgroundColor: "#0062cc",
            borderColor: "#064D7B",
            color: "#ffffff",
        },
    },
    cardContent: {
        height: "100%",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        "& .MuiSvgIcon-root ": { fontSize: "7rem" },
    },
    cardHeading: {
        fontSize: "1.25rem",
        // color: "#12356A",
        color: "inherit",
    },
    swiperSlide: {
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
            justifyContent: "start",
        },
    },
}));

// card Data

const requiredSizeData = [
    {
        id: 1,
        icon: <ApartmentOutlinedIcon className="cardIcon" />,
        headingText: "155QFT",
        paraText:
            "Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
    },

    {
        id: 2,
        icon: <ApartmentOutlinedIcon className="cardIcon" />,
        headingText: "155QFT",
        paraText:
            "Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
    },
    {
        id: 3,
        icon: <ApartmentOutlinedIcon className="cardIcon" />,
        headingText: "155QFT",
        paraText:
            "Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
    },
    {
        id: 4,
        icon: <ApartmentOutlinedIcon className="cardIcon" />,
        headingText: "155QFT",
        paraText:
            "Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
    },

    {
        id: 5,
        icon: <ApartmentOutlinedIcon className="cardIcon" />,
        headingText: "155QFT",
        paraText:
            "Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
    },
    {
        id: 6,
        icon: <ApartmentOutlinedIcon className="cardIcon" />,
        headingText: "155QFT",
        paraText:
            "Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture.",
    },
];
