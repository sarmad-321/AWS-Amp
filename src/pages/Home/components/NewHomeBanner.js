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
             <video src="https://ivattbucket.s3.us-east-2.amazonaws.com/Family.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCmFwLXNvdXRoLTEiRjBEAiAoN6WJZSbCHQh8MZtrd2Z0MjRnhcG0ejHpN4Iicd285gIgBZKverqx3OtAPLMkNdl2xSXMYqVYdl7rMrBB4Ox6SBwq%2FwII%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw2OTMzOTI4MTE0NzYiDLwO6SYMgSZ5v2zzHirTAoRY0rzoJ74JzsUd1Ez06cXOYKJaPYrSe1v7XNEsKv1lf%2FX368LO6gr5zT0XFWndAGD7GVQTG87M7AHuNb3SiIRzZgbadiEuTkUupFQhP9axU0f8x6gYtCiuL8zH0qeibsA%2BwcNy%2FfbA6Wkt2eIW94QMtUXKdkSBuILVZ1oC73GzGKXUff2mIezHeb%2BNaty%2FN8flMFaCRKH7vIkPxxeqFzZqVTOYy1pC%2BQcifYMxy4Sff0TDc%2B9rdYHON9gnWUUUqF7Ym30Yo5boj36aq1%2BXIkUraUIa%2BcLDe2UyoFOr7eTaN8OiYh2nb8gA83idv26GEKa740obmBl5NyQ9Boac3tjuAL6EFGsY4qdP9wa6AmlNZOobFqjAIupgaXghAD325sTy22%2FQSUKIo%2Bj%2FTqatOMmRVMpykdwcVZnVMvL1W0GAHaWVrt1S6WVbHoLHzomNwAZ47jD5mIWOBjq0AtUpXksuXtVCfRf22HHrLBq0WuXN008ik5n%2FyoHfrvuWRgruz55uAMuowo66r8YjHQ8rm9%2FayujSPPer3Mnq63s7lv7KDvtAZsC8SKm8Mcu9XCpHrPJESiwmbu7n5xxYkKrv06eykgEP6cU6j7ZykvyOBdcyWM7z8yI8jCwu1GYRDxmksXJjzro0Jn%2BF%2BigUnvPNS3L2gPjvPE4kf4ATkc2MrcajC9BZUtLto2%2BCS5GJI3Yra656KF6779AocMDhR9eiGYhwHuIgEEOh5Spkx5UoQLh00WAMpZme8iy6UNZMmVLod42iRY5nXXxibOmhFmjHyitvAct9vb21qi3Gm8LhZ4Q6DHLw08DanjVkIhMqvqfqafd5ly8yfihZZCKEksbqB8OaVZAuoGEUgK%2BQTbT%2FbYGJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211221T034149Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA2C4LOUXKFPAXRKO4%2F20211221%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=d81d105f77d75057714480bcc2a110f975e685c7e78d442109a4d73cde484ebe" className={classes.video} autoPlay muted loop>
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
