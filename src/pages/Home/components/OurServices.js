import {
    Box,
    Container,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { useState, useEffect } from 'react';
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import React from "react";
import { ButtonCV } from "../../../components/Button/ButtonCV";
import { CardCV } from "../../../components/Card/CardCV";

import car from "../../../assets/Icons/car.svg"
import delivery from "../../../assets/Icons/delivery.svg"
import arrowDown from "../../../assets/Icons/arrowDown.svg";
import wareHouse from "../../../assets/Icons/warehouse.svg";
import { GetAQuote } from "../newcomponent/GetAQuote";
import { ServiceCard } from "./homeServices/ServiceCard";
import { MobileServiceCard } from "./homeServices/MobileService";

// pop up
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


export const OurServices = () => {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();
    const [open, setOpen] = React.useState(false);

    

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1}  spacing-sm-2 className={classes.gridContainer}>
                <Grid item xs={12} sm={12} md={3} lg={3} className={classes.gridOurService}>
                    <Typography
                        variant="h4"
                        color="primary"
                        className={classes.serviceHeading}
                        gutterBottom
                    > 
                        Our services 
                    </Typography>
                    <Typography
                        variant=""
                        color="textSecondary"
                        className={classes.servicePara}
                        paragraph
                    >
                        To find out more about our services, contact one of our
                        storage experts.
                    </Typography>
                    <ButtonCV
                        variant="outlined"
                        startIcon={<PhoneIcon />}
                        maxWidth="151px"
                        background="white"
                        marginBottom='8px'
                        marginRight='5px'
                        border='1px solid #064D7B'
                    >
                        <span className={classes.call}> <a href='tel:01733306456' className={classes.call}>01733306456</a></span>
                       
                    </ButtonCV>
                     <Link
                        to='#'
                        style={{textDecoration:' none'}}
                      onClick={(e) => {
                       window.location = "mailto:contact@ivattstorage.co.uk";
                          e.preventDefault();
                       }}
                      >
              
        
                    <ButtonCV
                        variant="outlined"
                        startIcon={<MailOutlineIcon/>}
                        maxWidth="151px"
                        background="#FFD300"
                        border='none'
                        // click= {sendEmail()}
                    >
                    <span className={classes.call}>Email Agent</span>                       
                    </ButtonCV>
                    </Link>
                </Grid>
                <ServiceCard  />
                {/* <MobileServiceCard/> */}
            </Grid>
           
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    gridOurService: {
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column",
        paddingInline: "1rem",
        order: 1,
        [theme.breakpoints.up("lg")]: {
            order: 6,
           
        },
        [theme.breakpoints.down("sm")]: {
            alignItems: "center",
            textAlign: "center"
        },
       
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            textAlign: "center"
        },
        ["@media (max-width: 960px)"]: {
            marginBottom: 12,
        },
    },
    serviceHeading: {
        fontWeight: "900",
    },
    servicePara: {
        color: "#58595B",
        lineHeight: 1.6,
        marginTop: 3,
        marginBottom: 20,
        fontFamily:'Inter',
         ["@media (max-width: 960px)"]: {
            marginBottom: 12,
        },
    },
    // eaf8ff
    serviceButton: {
        marginBlock: "6rem",
    },
    gridContainer: {
        flexGrow: 1,
        //  justifyContent: "center",
        

        [theme.breakpoints.only("lg")]: {
            justifyContent: "center",
        },
        
         ["@media (max-width: 618px) and (min-width: 600px)"]: {
             justifyContent: "center",
        },
        [theme.breakpoints.only("xs")]: {
            justifyContent: "center",
        },
       
    },
    gridItem: {
        display: "flex",
        justifyContent: 'center',
         [theme.breakpoints.down("md")]: {
            
            paddingTop:14,
         },
        
    },
    btn: {
        maxWidth: "148px",
    },
    call: {
        fontSize: '10px',
        color: '#064d7b',
        textDecoration: 'none',
    },
    underlyingText: {
        position: 'relative',
        zIndex: 0,
        marginLeft: 5
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

