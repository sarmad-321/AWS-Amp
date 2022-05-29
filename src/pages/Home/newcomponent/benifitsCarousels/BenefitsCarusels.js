import React, { useState } from "react";
import {
    Container,
    makeStyles,
    Grid,
    Card,
    Box,
    CardContent,
    Typography,
    Button
} from "@material-ui/core";

import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import Garage from "../../../../assets/images/garage.svg";
import Shed from "../../../../assets/images/shed.svg";
import flag from "../../../../assets/Icons/flag.svg";
import car from "../../../../assets/Icons/car2.svg";
import truck from "../../../../assets/Icons/truck.svg"

import Telephone from "../../../../assets/images/telephone-box.svg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// 
import Benifitone from "../../../../assets/Icons/BenifitOne.svg";
import Benefitwo from "../../../../assets/Icons/two.svg";
import Benifit from "../../../../assets/Icons/BenefiThree.svg";
import Benifithree from "../../../../assets/Icons/Benefit.svg";
import calender from "../../../../assets/Icons/calender7.svg";


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./benifitsCarusels.css";

///import brands//
import brand1 from '../../../../assets/brands/1.png'
import brand2 from '../../../../assets/brands/2.png'
import brand3 from '../../../../assets/brands/3.png'
import brand4 from '../../../../assets/brands/4.png'
import brand5 from '../../../../assets/brands/5.jpg'
import brand6 from '../../../../assets/brands/6.png'


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { SizeCarousel } from "../../../Contact/component/Size/carousel/SizeCarousel";
import { BenefitSwiper } from "../../../Contact/component/Size/carousel/benefitSwiper";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

export const BenefitsCarusels = ({ contactInfo, setContactInfo,cardBorder }) => {
    const classes = useStyles();
     const [selected, setSelected] = useState(1);

    const handleClick = (prop) => (event) => {
        setContactInfo({ ...contactInfo, ["size"]: prop.headingText });
        setSelected(prop.id);
    };

    return (
        <>
            <div className='benMainContainer'>
                <div className='bendesignContainer'> 
                </div>
                <div className={classes.addMargin} >
            <Grid className={classes.main}>
                
                <Grid container disableGutter={true}>
                    
                <Grid item xs={12} >
                    <Typography
                        variant="h4"
                        color="primary"
                        className={classes.benefitsHeading}
                        
                    >
                          Accreditation bodies
                            
                    </Typography>
                    
                </Grid>
                    <Grid container disableGutter={true}>
                        <Grid container lg={12} className={classes.swiperContainer} disableGutter={true}>
                <Swiper
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                freeMode={true}
                className='benefitSwiper'
                // slidesPerView={6}
                 breakpoints={{
                    425: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1240: {
                        slidesPerView: 6,
                    },
                    1440: {
                        slidesPerView: 6,
                     },
                    }}
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
                                        <img src={cardItem.icon} alt="" 
                        className={classes.iconsize} />
                                        <Typography
                                            className={classes.cardHeading}
                                        >
                                            {cardItem.headingText}
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
                        </Grid>
                        

                </Grid>
            </Grid>
        </Grid>
                    </div>
             </div>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    main: {
        borderRadius: '8px',
        backgroundColor: 'white'
    },
    swiperContainer: {
        padding: '0rem 1rem'
    },
    iconsize:{
        height:50,
    },
    benefitsHeading: {
        paddingTop:'3rem',
        fontWeight: 'bold',
        fontSize: '34px',
        color: '#064D7B',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: { paddingTop:'1rem', },
    },
    benifitContainer: {
        padding: '3.4375rem 0',
        backgroundColor: 'rgb(233, 233, 233)',
        borderRadius: '8px'
    },
    BoldHeading: {
        fontSize: '88px',
        fontWeight: 'Bold',
        color: '#12356A'
    },
    rentContainer: {
        padding:' 3rem 0px'
    },
    rightSideBtn: {
        backgroundColor: "#FFD300",
        color: "#064D7B",
        padding: "0.5rem 1.5rem",
        marginTop: '20px',
        borderRadius: theme.spacing(1),
    },
    sendMessage: {
        color: "#77838F",
    },
    heading: {
        paddingBottom:'2.4375rem',
        color:'#064D7B',
        fontSize: '34px',
        fontWeight: 'Bold',
        textAlign:'center'
    },
    cardClass: {
        width: "227px",
        border: 'none',
        // color: "#77838F",
        height: "215px",
        cursor: "pointer",
        background:" none"
    },
    cardContent: {
        height: "100%",
        color:'#77838F',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        "& .MuiSvgIcon-root ": { fontSize: "7rem" },
    },
    cardHeading: {
        color: '#064D7B',
        fontWeight:'bold',
        fontSize: "18px",
        height: 60,
        padding: '0px 28px',
        
    },
    rentAlign: {
        textAlign :"start"
    },
    cityLocation: {
        color:'rgb(12 92 144)'
    },
    locatedmsg: {
        color:'#77838F'
    },
    addMargin: {
        margin: 17
    },
    cardPara: {
        fontSize: 15,
        
    },
    underlyingText: {
        position: 'relative',
        zIndex: 0
    },
    underlying: {
        height: 6,
    width: '100%',
    backgroundColor: '#FFD300',
    position: 'absolute',
    left: 0,
    bottom: 10,
    zIndex: -1,
        
    }
}));

// card Data

const requiredSizeData = [
    {
        id: 1,
        icon: brand1,
        headingText: "ATTMA",
        paraText:
            "Telephone box size. An ideal size for storing boxes, suitcases, and small furniture",
    },

    {
        id: 2,
        icon: brand2,
        headingText: "TrustMark",
        paraText:
            "Small garden shed size. Great for storing the contents of a 1 bed studio flat",
    },
    {
        id: 3,
        icon:  brand3,
        headingText: "CoreLogic",
        paraText:
            "Large garden shed size. Perfect for storing the contents of a 1 bed flat",
    },
    {
        id: 4,
        icon: brand4,
        headingText: "ECMK",
        paraText:
            "Half a single garage size. Ideal for storing the contents of a small 2 bed house",
    },
     {
        id: 7,
        icon: brand5,
        headingText: "Elmhurst Energy",
        paraText:
            "Luton box van size. Brilliant for storing the contents of a standard 2 bed house",
    },
    {
        id: 5,
        icon: brand6,
        headingText: "Stroma Certification",
        paraText:
            "Luton box van size. Brilliant for storing the contents of a standard 2 bed house",
    },
   
    
   
];
