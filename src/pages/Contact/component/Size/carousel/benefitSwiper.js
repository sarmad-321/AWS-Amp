import React, { useRef, useState } from "react";
import {
    Container,
    makeStyles,
    Grid,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";

// icons
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import Garage from "../../../../../assets/images/garage.svg";
import Shed from "../../../../../assets/images/shed.svg";
import Telephone from "../../../../../assets/images/telephone-box.svg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./SizeCarousel.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export const BenefitSwiper = ({ contactInfo, setContactInfo, cardBorder }) => {
    const classes = useStyles();
    const [selected, setSelected] = useState(1);

    const handleClick = (prop) => (event) => {
        setContactInfo({ ...contactInfo, ["size"]: prop.headingText });
        setSelected(prop.id);
    };

    return (
        <>
            <Swiper
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                // freeMode={true}
                // className={`${classes.root} sizeCarousel`}
                slidesPerView={4}
            >
                {requiredSizeData.map((cardItem, key) => {
                    return (
                        <SwiperSlide>
                            <Grid item>
                                <Card
                                    className={`${classes.cardClass} ${
                                        selected == cardItem.id && "selected"
                                    } ${cardBorder} `}
                                    variant="outlined"
                                    key={key}
                                    onClick={
                                        setContactInfo
                                            ? handleClick(cardItem)
                                            : () => {
                                                  setSelected(cardItem.id);
                                              }
                                    }
                                >
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <img src={cardItem.icon} alt="" />
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
                <ArrowBackIcon className="swiper-button-prev" />
                <ArrowForwardIcon className="swiper-button-next" />
            </Swiper>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    cardClass: {
        width: "227px",
        color: "#064D7B",
        height: "295px",
        border: "1px solid #064D7B",
        cursor: "pointer",
        "&.selected": {
            boxShadow: "none",
            backgroundColor: "#0062cc",
            borderColor: "#064D7B",
            color: "#ffffff",
            "&.cardBorder": {
                border: "1px solid #362F9B;",
                backgroundColor: "#ffffff",
                color: "#064D7B",
            },
        },
    },
    cardContent: {
        height: "100%",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        "& .MuiSvgIcon-root ": { fontSize: "7rem" },
    },
    cardHeading: {
        fontSize: "1.25rem",
        // color: "#12356A",
        color: "inherit",
    },
}));

// card Data

const requiredSizeData = [
    {
        id: 1,
        icon: Telephone,
        headingText: "15sqft",
        paraText:
            "Telephone box size. An ideal size for storing boxes, suitcases, and small furniture",
    },

    {
        id: 2,
        icon: Shed,
        headingText: "25sqft",
        paraText:
            "Small garden shed size. Great for storing the contents of a 1 bed studio flat",
    },
    {
        id: 3,
        icon: Garage,
        headingText: "35sqft",
        paraText:
            "Large garden shed size. Perfect for storing the contents of a 1 bed flat",
    },
    {
        id: 4,
        icon: Telephone,
        headingText: "50sqft",
        paraText:
            "Half a single garage size. Ideal for storing the contents of a small 2 bed house",
    },
    {
        id: 5,
        icon: Shed,
        headingText: "75sqft",
        paraText:
            "Luton box van size. Brilliant for storing the contents of a standard 2 bed house",
    },
    {
        id: 6,
        icon: Garage,
        headingText: "100sqft",
        paraText:
            " A standard single garage. Ideal for storing the contents of a 2 bed house + garage",
    },
];
