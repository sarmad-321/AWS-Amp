import {
    Box,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    makeStyles,
    Typography,
    CardContent,
    Card,
    Button,
    Avatar,
} from "@material-ui/core";
import { Delete, PhoneOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { ButtonCV } from "../../../components/Button/ButtonCV";
// kkkk
// icons
import BuildingWhite from "../../../assets/Icons/office-building.svg";
import BuildingBlue from "../../../assets/Icons/office-building-blue.svg";
import locationContact from "../../../assets/Icons/locationContact.svg"
import phoneContact from "../../../assets/Icons/phone-contact.svg"
import store from "../../../assets/Icons/store.svg"


import HomeWhite from "../../../assets/Icons/home.svg";
import HomeBlue from "../../../assets/Icons/home-blue.svg";

import GraduatedWhite from "../../../assets/Icons/graduated.svg";
import GraduatedBlue from "../../../assets/Icons/graduated-blue.svg";

import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

import video from  "../../../assets/videos/Family.mp4"
import clock from "../../../assets/Icons/clock.svg"
import CardMedia from '@material-ui/core/CardMedia'
// context
import { FormDataContext } from "../../../Context/Context";
import { GetAQuote } from "../newcomponent/GetAQuote";

let xyz = [{ id: "", name: "", slideNo: 1 }];

export const FormContextProvide = (props) => {
    return (
        <FormDataContext.Provider value={xyz}>
            {props.children}
        </FormDataContext.Provider>
    );
};

export const NewHomeBanner = ({ selectedSearch, handleSelectedChange }) => {
    const [selected, setSelected] = useState(0);
    const [slideNo, setSlideNo] = useState(1);

    const classes = styles();

    const history = useHistory();

    const handleButtonClick = () => {
        setSlideNo(2);
        xyz = { ...xyz, slideNo: slideNo };
        history.push("/quote");
    };

    const contactData = [
        {
            image: phoneContact,
            heading:"Quick Contact",
            contactDataOne:"contact@ivattselfstorage.co.uk",
            contactDataTwo: "01733306456",
            
        },
        {
            image: locationContact,
            heading:"Our Location",
            contactDataOne:"Ivatt Self Storage,Ivatt Way,",
            contactDataTwo:"Westwood, Peterborough, PE3 7PH."
        },
        {
            image: clock,
            heading:"Office opening times",
            contactDataOne:"Weekdays: 9:00AM – 5:30PM",
            contactDataTwo:"Saturday: 9:00AM – 2:00PM",
            // contactDataThree:"Sunday closed"
        },
         {
            image: store,
            heading:"Storage access times ",
            contactDataOne:"Weekdays: 8AM – 8PM",
            contactDataTwo:"Weekends: 9AM – 6PM"
        },
    ]

    return (
        
        <div className={classes.videoContainer}>
            <div className={classes.overlay}></div>
             <video src="https://ivattbucket.s3.us-east-2.amazonaws.com/Family.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCmFwLXNvdXRoLTEiRzBFAiEAz48aAE36UXS5G5seKLHWUbm%2B3APs%2FnlKVZ4ft0F4c8kCIE7zR%2FWWsbHvy%2F4yeQDgKAAS%2BM62PIAhAusfyw9KFHW7Kv8CCO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAhoMNjkzMzkyODExNDc2Igz9XIkVfox7BbvwhQsq0wKkAiwahPBt4ZaEVDIWO8SdCHl9H6u3GoGqbvnns1r3AJXGPaaABQP8J7U9f3kwT79i1%2F8jfKbsCW%2F31srYNUed%2B7JD1z%2FKhUVF1D51xq%2B8H9HABn17I9bV1HCyeTJ%2FeRRDQIPnI2tipDjI3Src6lPejOCwZ08ihFMEc03IVKff9IdcJMDTWoI6l1VLpe%2FM%2FjZ3mLHU6aIOSF1NdE4itvpho%2FA9cYkkWQjTJgN4Vu8kEeh4kmGpl5%2Fb0oSJnfWrqUN%2FL6%2BT2U7zsrT4dSZy4LSKyqoFkwbYsjgyiAtBbqx2H%2Fg4SkXs9%2FSVUX2xixZUNu18niDLOi9YyHqiiIMbhoBZCqK8izaGEUsKTJXEcFynxvLwpHdZCl1LGNxK3pBBYuxmhwA%2B%2BcjdiDJwhYXa7YKaZKdfphIMox9o09wy7jKFlbCk6zgoOH4ZpXiFD8pzybswM%2BYw99yBjgY6swKx3z3mTOSdwzPQFJNuIJwXMgRfB%2B6kF2tIrKU366VyXzhZ3zXaDfRBb%2BHClDV6m%2BtgpYeGl%2Fh9eSrRsAyoCnWyyWbH7t1q9rL0kn8NuRs1CceBcA3eUfuMj%2FzAWp5iWTUBETxkTtNrTyDpnwsfjeiNWv7EBDuj3Ud%2BmKjjs1%2BvEAdj4iDVjRTtc%2B0N20%2FU9flsA%2Btbh2ZvZivbwKa0SZRDSPjLzECOWyguOV%2BrrovdT4BOrvs0bzil%2FovHg5Knt4Xi6ynlkLx8N3cWfWQFi0ueYBnjx58jaLFIqCoIw2bQ8tCk8I5cAvQqpzDkR2HkQVajA2ltdw7IwUwr8c9B6CAnDhzwjGizfnNhQeVfY6jAKU5hk4bANA7YSr8gIX14uu1%2FgEyj01TJ7fcrNQH0kfubTJ0L&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211220T123425Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2C4LOUXKMT66MGMX%2F20211220%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=abdc634f28a56364cd861403952866d33d69de4660fc32e9176273459fdbdb57" className={classes.video} autoPlay muted loop>
          </video>
           
        <Container className={classes.downPaddingForHeader}>
           
            <Grid container spacing={2} >
                <Grid item xs={12} md={12} style={{zIndex:1}}>
                    <Grid item lg={6}>
                        <Typography
                            variant="h2"
                            color="primary"
                            className={classes.heading}
                        >
                            
                            Peterborough’s Premier <br/> <span style={{fontWeight:'normal'}}>Self Storage Facility</span> 
                        </Typography>
                    </Grid>
            
                    <Grid item xs={12} lg={6} className={classes.offContainer}>
                        {/* <Grid container lg={6} style={{background:'yellow' ,padding: 0, alignItems: 'center'}}>
                            <Grid item lg={10}>  50% off 1 Months Storage</Grid>
                            <Grid item lg={2}>
                                <Button><ArrowForwardOutlinedIcon /></Button>
                            </Grid>
                        </Grid> */}
                             <Button
                            endIcon={
                                        <ArrowForwardOutlinedIcon fontSize="large" />
                                    }
                            className={classes.rightSideBtn}
                            >
                           50% off 2 Months Storage
                           </Button>
                    </Grid>
                    <Grid item lg={12} >
                        <GetAQuote handleSelectedChange={handleSelectedChange} selectedSearch = {selectedSearch} padding={0}/>
                    </Grid>
                    {/* grid item large */}
                    <Grid container xs={12} sm={12} md={12} lg={12} >
                        {contactData.map((data) => {
                            return( <Grid container xs={12} sm={6} md={3} lg={3}  >
                                 <Grid item xs={2} sm={2} lg={2} >
                                        <img
                                            src={data.image}
                                            alt=""
                                            className={classes.address}
                                        />
                                 </Grid>
                                 <Grid item  xs={10} sm={10} lg={10} >
                                    <Typography className={classes.contactHeading}>{ data.heading}</Typography>
                                    <Typography className={classes.contactData}>{data.contactDataOne}</Typography>
                                    <Typography className={classes.contactData}>{ data.contactDataTwo}</Typography>
                                    <Typography className={classes.contactData}>{ data.contactDataThree}</Typography>
                                 </Grid>
                           </Grid>)
                        })}
                    
                        </Grid>
                        
                    
                </Grid>
            </Grid>
            
        </Container>
        </div>
        );
};

const styles = makeStyles((theme) => ({
    flex:{
        display:'flex',
        
    },
    background: {
        height: 90,
width: 90,
top: 0,
padding:' none',


    },
    videoContainer: {
        // zIndex:-3,
        position: 'relative',
        marginTop: -90,
        background:'#064D7B'
        
    },
    overlay :{
    background: '#12356ad4',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
        
    },

    video: {
        position: 'absolute',
        width: '100%',
        height:'100%',
        objectFit: "cover",
        zIndex: 0,
    },
    rightSideBtn: {
        color: '#064D7B',
        fontWeight: 'revert',
        background: '#FFD300',
        letterSpacing: '2px',
        '&:hover': {
       background: "white",
       color:"#064D7B" },
        ["@media (max-width: 361px)"]: {
             width: '246px',
            fontSize: '10px',
        },
        // width: '302px',
       display:' flex',
        padding: '5px 24px',
    justifyContent: 'space-around',
    },
    saleHeading:{
        background:'red'
    },
    offContainer: {
        paddingTop: '10px',
        
    },
    heading: {
        color:'white',
        fontWeight: "bold",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.125rem",
        },
    },
    paraClass: {
        fontSize: theme.spacing(2.25),
        color: "#3d3a00",
        paddingBlock: theme.spacing(1.6),
    },
    paddingBlock0: {
        paddingBlock: 0,
    },
    gridCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        maxWidth: "579px",
        maxHeight: "387px",
    },
    bannerCard: {
        paddingBottom: 0,
        ["@media (max-width: 361px)"]: {
            alignItems: "center",
            flexDirection: "column",
        },
        // [theme.breakpoints.down("xs")]: {
        //     alignItems: "center",
        //     flexDirection: "column",
        // },
    },
    card: {
        width: "447px",
        // height: "333px",
        background: theme.palette.primary.main,
    },
    cardContent: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "#ffffff",
        paddingInline: theme.spacing(4),
        paddingBlock: theme.spacing(3),
    },
    cardHeading: {
        fontWeight: "600",
    },
    cardSubHeading: {
        width: "55%",
        fontWeight: "400",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    cardClass: {
        // width: "180px",
        // height: "240px",
        color: "#ffffff",
        backgroundColor: "transparent",
        border: "1px solid #ffffff",
        height: "136px",
        width: "117px",
        "&.selected": {
            boxShadow: "none",
            backgroundColor: "#ffffff",
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
        },
    },
    cardClassContent: {
        color: "inherit",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        "& .MuiSvgIcon-root ": { fontSize: "4rem" },
    },
    cardImage: {
        "&.selected": {
            filter: "invert(42%) sepia(56%) saturate(4321%) hue-rotate(208deg) brightness(96%) contrast(93%)",
        },
    },
    cardFooterBtn: {
        paddingBlock: theme.spacing(1.3),
        "&.Mui-disabled": {
            color: "rgb(255 255 255 / 65%)",
        },
    },
    nextHeading: {
        fontWeight: "900",
        fontSize: theme.spacing(3),
        color: "#ffffff",
    },
    icon: {
        backgroundColor: theme.palette.primary.main,
    },
    contactHeading: {
        color: 'white',
        fontSize: '20px',
        fontWeight: "Bold",
    },
    contactData: {
        color: 'white',
        fontSize:'14px'
    },
    address: {
        padding: '5px'
    },
    downPaddingForHeader: {
        paddingTop: '5rem',
        
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '84px',
            paddingTop: '7rem',
         
    },
    }
}));

const storageData = [
    {
        id: 1,
        name: "Business",
        icon: BuildingWhite,
        icon2: BuildingBlue,
    },
    {
        id: 2,
        name: "Domestic",
        icon: HomeWhite,
        icon2: HomeBlue,
    },
    {
        id: 3,
        name: "Student",
        icon: GraduatedWhite,
        icon2: GraduatedBlue,
    },
];
