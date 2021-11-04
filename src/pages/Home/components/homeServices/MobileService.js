import {
    Box,
    Container,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";

import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import React from "react";
import { CardCV } from "../../../../components/Card/CardCV";

import car from "../../../../assets/Icons/car.svg"
import delivery from "../../../../assets/Icons/delivery.svg"
import arrowDown from "../../../../assets/Icons/arrowDown.svg"
import wareHouse from "../../../../assets/Icons/warehouse.svg"

//  swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./mobileService.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

export const MobileServiceCard = () => {
    const classes = useStyles();
    return (
        <>
             <Swiper
                navigation={true}
                freeMode={true}
                className='ServiceSwiper'
                slidesPerView={1}
                pagination={{
  "clickable": true
}}
                
            >
        {data.map((item, key) => {
            return (
                    <SwiperSlide>
                        <Grid
                            item
                            sm={3}
                            md={'auto'}
                            lg={2}
                            // align-items-xs-center
                            className={`${classes.gridItem}`}
                            style={{ order: key + 2 }}
                        >
                            <CardCV
                                bgColor={item.bgColor}
                                topTitle={item.topText}
                                bottomTitle={item.bottomText}
                                buttonText={item.buttonText}
                                img={item.img}
                                key={key}
                            >
                                {item.childText}
                            </CardCV>
                        </Grid>
                    </SwiperSlide>
                    );
        })}
        </Swiper>
        </>  
           
        
    );
};

const useStyles = makeStyles((theme) => ({

  
   
    gridItem: {
        display: "flex",
        justifyContent: 'center',
         [theme.breakpoints.down("md")]: {
            
            paddingTop:14,
         },
        
    },
   
    
}));

const data = [
    {
        bgColor: "white",
        childText: "Indoor Storage space",
        img:car,
        topText: "Storage",
        bottomText: "We offer internal, and external storage units",
        buttonText: "Explore",
    },
    {
        bgColor: "white",
        childText: "All packing material",
        img:arrowDown,
        topText: "Pack",
        bottomText: "We have a box shop wide range of materials for packing",
        buttonText: "Explore",
    },
    {
        bgColor: "white",
        childText: "Outdoor Storage",
        img:wareHouse,
        topText: "parking",
        bottomText:
            "we have a huge parking space with charging facility available",
        buttonText: "Explore",
    },
    {
        bgColor: "white",
        childText: "Secure car parking",
        img:car,
        topText: "delivery",
        bottomText:
            "we have a huge parking space with charging facility available",
        buttonText: "Explore",
    },
];
