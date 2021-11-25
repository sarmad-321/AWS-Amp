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
        text: "Fantastic company. Very straight forward and easy to get started. The gentleman named Nick, provided a outstanding service. Prices are very reasonable and couldn’t be happier. Would highly recommend to anyone looking for storage👍",
        name: "Jamie Smart",
        date: "a month ago",
        image: "",
    },
    {
        text: "Great place feels very safe and secured well invested facility all updated software and system will definitely recommend for businesses and even if you need help moving houses and a place to store your stuff.",
        name: "James Houilbecq",
        date: "a month ago",
        image: "",
    },
    {
        text: "The team here went above and beyond to help me at short notice. They arranged removals, provided me with good quality boxes and a clean and secure storage unit.",
        name: "Matthew Sheehan",
        date: "2 month ago",
        image: "",
    },
     {
        text: "Excellent and secure storage facility with up to date technology. No need for a padlock as all done through an App. Very convenient and easy to use. Amazing value for money and Nick the Storage Manager was always available .",
        name: "Andy Ritchie",
        date: "4 months ago",
        image: "",
    },
      {
        text: "Really competitive price. Absolutely first class service. Nick went above and beyond to help us on multiple occasions. I cannot speak highly enough of Nick and Ivatt Storage. Highly recommend!",
        name: "Behrooz Vahedifar",
        date: "4 month ago",
        image: "",
    },
        {
        text: "Very good storage. Staff helpful. Good service. 5 star! higly recomended",
        name: "Sultan Ozan",
        date: "2 weeks ago",
        image: "",
    },
          {
        text: "absolutely outstanding,  for the experience Goes beyond the stars rating , very well mannered boss, I would defiantly recommend this storage to anyone that needs storage.",
        name: "Corina Joanne Cunnington",
        date: "2 months ago",
        image: "",
    },
      {
        text: "First class customer service with flexible service offerings at a very competitive price. Would definitely use Ivatt Self Storage again...!",
        name: "Martyn Yates",
        date: "3 months ago",
        image: "",
    },
        {
        text: "Fantastic Affordable Service, very secure and Safe, Nick the store manager was friendly and helped with all that I required, would definitely recommend.",
        name: "Andrew Ayling",
        date: "7 months ago",
        image: "",
    },
          {
        text: "Friendly staff, reasonable prices. Timely retrieval and good comms. Thats what you need from a good self storage service. .......",
        name: "Muhammad Saeed",
        date: "7 months ago",
        image: "",
    },
            {
        text: "Clean & friendly staff , hassle free & top security! higly recomended",
        name: "Matt Chapman",
        date: "6 months ago",
        image: "",
    },
              {
        text: "Fantastic service, great price and a very safe and secure facility. I would 100% recommend!",
        name: "Laura Hardeman",
        date: "9 months ago",
        image: "",
    },
                {
        text: "The 50% deal for 2 months is great, it really helped me save on moving costs. Nick the Store manager was really friendly and made everything easy, would definitely recommend.",
        name: "Jiten Patel",
        date: "9 months ago",
        image: "",
    },
                       {
        text: "Sorted me out a great 1 year deal. Reasonably priced and secure site.",
        name: "Richard Benton",
        date: "9 months ago",
        image: "",
    },
                {
        text: "Fantastic service, affordable price, helpful and friendly staff, highly recommend",
        name: "Donatas Zemkus",
        date: "7 months ago",
        image: "",
    },
                
              {
        text: "Great storage and service.very safe and secured well invested facility all updated software , Highly recommended.",
        name: "Richard Davey",
        date: "7 months ago",
        image: "",
    },
                {
        text: "Not even 10 minutes to set up! Everything was so easy and staff are friendly.",
        name: "Paula Denby",
        date: "9 months ago",
        image: "",
    },
         {
        text: "its a good service and easy to deal with peoples! higly recomended",
        name: "Pedro Flaminco",
        date: "9 months ago",
        image: "",
    },
                {
        text: "Excellent service and accessibility Reasonably priced and secure site.! higly recomended",
        name: "Chris Nicholas",
        date: "3 months ago",
        image: "",
    },
    
              {
        text: "Really grateful you were able to help with such short notice. This company were available and even offered different people to arrange for removal/delivery.",
        name: "Asad Arif",
        date: "2 years ago",
        image: "",
    },
                {
        text: "Faz was extremely helpful and provided easy access to storage. The items were kept secure and gave me ease of mind knowing they were being monitored. I would highly recommend Ivatt Storage.",
        name: "Waqas Majid",
        date: "2 years ago",
        image: "",
    },
                       {
        text: "Hired 2 storage units in between moving houses and kept one even after moving. We had 1 for about 2 months and 1 for almost a year. ",
        name: "Rehana Yousaf",
        date: "2 years ago",
        image: "",
    },
                {
        text: "good and safe place for household items. i was recommended to ivatt storage by a friend that used them before and i also had a good experience for the 4 months i used it for. the guys here have always been helpful",
        name: "David Cliffe",
        date: "2 years ago",
        image: "",
    },

              {
        text: "Great service at great prices, easy to access individual storage units to input belongings. Highly recommended.",
        name: "Shamraiz Iqbal",
        date: "2 years ago",
        image: "",
    },
                {
        text: "Great storage place and the best priced one locally. Secure premises - would recommend",
        name: "Luxe Cars",
        date: "2 years ago",
        image: "",
    },
                       {
        text: "Very professional and extremely secure place to store your belonging. Have been using these guys for a number of yrs now on and off when required. Thanks Faz. ",
        name: "Mohammed Shahid",
        date: "2 years ago",
        image: "",
    },
                {
        text: "Thank you Faisal for your help when I've needed it. Your doing a great job and it's a pleasure to be using you.",
        name: "Tony Conti",
        date: "2 years ago",
        image: "",
    },
                
              {
        text: "Great prices for safe and secure storage! ,Very professional and extremely`",
        name: "Kamil Ahmed",
        date: "2 years ago",
        image: "",
    },
                {
        text: " good place Excellent service and accessibility Your doing a great job",
        name: "Tomas Mankus",
        date: "2 years ago",
        image: "",
    },
                       {
        text: "First class customer service with flexible service offerings at a very competitive price.",
        name: "Grzegorz P",
        date: "2 years ago",
        image: "",
    },
                {
        text: "Best price in Peterborough,Friendly staff, reasonable prices. Timely retrieval and good comms.",
        name: "Shazia Kouser",
        date: "2 years ago",
        image: "",
    },
                
              {
        text: "Good,Friendly staff,Very good storage. Staff helpful. Good service. 5 star",
        name: "Splash",
        date: "a week ago",
        image: "",
    },
                {
        text: "recomended! Not even 10 minutes to set up! Everything was so easy and staff are friendly",
        name: "Egidijus Alaburda",
        date: "6 months ago",
        image: "",
    },
    
        
   
];
