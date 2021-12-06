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
// import indoor from "../../../../assets/Icons/indoor.svg"
import delivery from "../../../../assets/Icons/delivery.svg"
import arrowDown from "../../../../assets/Icons/arrowDown.svg"
import wareHouse from "../../../../assets/Icons/warehouse.svg"
import truck from "../../../../assets/Icons/truckB.svg"
import indoor from "../../../../assets/images/indoor.svg"

export const ServiceCard = () => {
    const classes = useStyles();
    return (
        <>
        {data.map((item, key) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={'auto'}
                            md={'auto'}
                            lg={'auto'}
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
                                href={item.href}
                                marginTop={item.margnTop}
                            >
                                {item.childText}
                            </CardCV>
                        </Grid>
                    );
             })}
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
        childText: "Indoor Storage",
        img:indoor,
        topText: "Storage",
        bottomText: "We offer individual internal smart entry units",
        buttonText: "Explore",
        label: "Business",
        href: "/quote",
        margnTop:'2px'
    },
    {
        bgColor: "white",
        childText: "Outdoor Storage",
        img:wareHouse,
        topText: "Storage",
        bottomText:
            "We offer self storage containers with drive up access.",
        buttonText: "Explore",
        label: "Business",
		href: "/quote",
    },
    {
        bgColor: "white",
        childText: "Box Shop",
        img:arrowDown,
        topText: "Materials",
        bottomText: "A wide range of boxes and packaging materials.",
        buttonText: "Explore",
        label: "Box Shop",
		href: "/materials",
    },
    
    {
        bgColor: "white",
        childText: "Removals",
        img: truck,
        topText: "Pack",
        bottomText:
            "We also hold strong relationships with a number of removals companies locally.",
        buttonText: "Explore",
        label: "Parking",
		href: "/parking",
    },
];
