import React from "react";
import {
    Grid,
    Container,
    Card,
    CardContent,
    Typography,
    Avatar,
    makeStyles,
} from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import comma from "./commma.svg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./CardCarousel.css";
import star from "../../assets/Icons/star.svg";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export const CardCarousels = () => {
    const classes = useStyles();
    return (
        <>
            <Swiper
                freeMode={true}
                slidesPerView={"auto"}
                spaceBetween={10}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                className={`${classes.root} cardCarousels`}
            >
                {data.map((item, key) => {
                    return (
                        <SwiperSlide>
                            <div key={key}>
                                <Container
                                    paragraph
                                    className={classes.gridIconContainer}
                                    disableGutters
                                >
                                    <Avatar></Avatar>
                                    <div
                                        className={
                                            classes.gridIconTextContainer
                                        }
                                    >
                                        <Typography
                                            variant="body1"
                                            className={classes.gridIconHeading}
                                            color="primary"
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            {item.date}
                                        </Typography>
                                    </div>
                                </Container>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardBody}>
                                        <div >
                                        <img
                                            src={comma}
                                            alt=""
                                            className={classes.avatarLarge}
                                        />
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                            className={classes.cardTitle}
                                        >
                                            {item.text}
                                        </Typography>
                                        </div>
                                        <div className={classes.star}>
                                        {[1, 2, 3, 4, 5].map(s => <img style={{paddingRight: 8 , width: 25}} src={star} alt="" /> )}
                                        
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
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
    root: {
        minHeight: "350px",
        ["@media (max-width: 959px)"]: {
            minHeight: "320px",
        },
        ["@media (max-width: 433px)"]: {
            minHeight: "355px",
        },
        ["@media (max-width: 600px)"]: {
            minHeight: "374px",
        },
        
    },
    card: {
        boxShadow: "0px 1px 8px #00000029",
        borderRadius: "5px",
        maxWidth: "30rem",
        // paddingTop: "1rem",
        // paddingBottom: "1rem",
        minHeight: "183px",
        display: "flex",
        alignItems: "center",
        // ["@media (max-width: 600px)"]: {
        //     minHeight: "auto",
        //     maxWidth: "79vw",
        // },
        //   [theme.breakpoints.only("sm")]: {
        //     // height: 
        // },

    },
    cardBody: {
        display: "flex",
        flexDirection: "column",
        alignItems:"flex-start",
        position: "relative",
        paddingInline: theme.spacing(4),
        padding: 16,
        "&:last-child": {
      paddingBottom: 16
    },
         [theme.breakpoints.only("xs")]: {
             paddingInline: 'none',
             padding: '24px 9px',

        },
    },
    cardTitle: {
        height: 90,
        textAlign: "left",
        fontSize: 12,
        zIndex: 1,
         ["@media (max-width: 600px)"]: {
            fontSize: "2.7vw",
        },
        ["@media (max-width: 433px)"]: {
            fontSize: "3.5vw",
        },
       
        paddingLeft: '2rem',
        color: ' #58595B',
        //     ["@media (max-width: 600px)"]: {
        //      minHeight: "109px",
        // },
        //      ["@media (max-width: 428px)"]: {
        //      minHeight: "208px",
        // },
         [theme.breakpoints.only("xs")]: {
             height: 143,
            
        },
            
    },
    avatarLarge: {
        top: '-4px',
    left: 3,
    width: 75,
    height: 108,
    zIndex: 0,
        position: ' absolute',
    [theme.breakpoints.only("xs")]: {
         left: -12,
        },
    },
    gridIconTextContainer: {
        display: "flex",
        flexDirection: "column",
        margin: '0px 16px',
        textAlign: "left",
        left: '1.2rem',
        top: 39,
    },
    gridIconContainer: {
        display: "flex",
        margin: '16px 0px',
    },
    gridIconHeading: {
        fontWeight: "900",
        fontSize: "0.75rem",
    },
    star: {
        paddingLeft: 29,
    paddingTop: 3,
    },
}));

const data = [
    {
        text: "The team here went above and beyond to help me at short notice. They arranged removals, provided me with good quality boxes and a clean and secure storage unit.",
        name: "Matthew Sheehan",
        date: "22 sep, 2021",
        image: "",
    },
    {
        text: "Excellent and secure storage facility with up to date technology. No need for a padlock as all done through an App. Very convenient and easy to use. Amazing value for money and Nick the Storage Manager was always available",
        name: "Andy Ritchie",
        date: "07 jun, 2021",
        image: "",
    },
    {
        text: "Really competitive price. Absolutely first class service. Nick went above and beyond to help us on multiple occasions. I cannot speak highly enough of Nick and Ivatt Storage. Highly recommend!",
        name: "Behrooz Vahedifar",
        date: "05 aug, 2021",
        image: "",
    },
    {
        text: "First class customer service with flexible service offerings at a very competitive price. Would definitely use Ivatt Self Storage again...!",
        name: "Martyn YatesMartyn Yates",
        date: "12 aug, 2021",
        image: "",
    },
    {
        text: "The 50% deal for 2 months is great, it really helped me save on moving costs. Nick the Store manager was really friendly and made everything easy, would definitely recommend",
        name: "Jiten Patel",
        date: "18 feb, 2021",
        image: "",
    },
];
