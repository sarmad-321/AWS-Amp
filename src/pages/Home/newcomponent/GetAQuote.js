import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
    Slide,
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Container,
    Grid,
    Button,
} from "@material-ui/core";

// icons
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

// icons
import BuildingPurple from "../../../assets/Icons/office-building-purple.svg";
import Building from "../../../assets/Icons/office-building.svg";

import HomePurple from "../../../assets/Icons/home-purple.svg";
import Home from "../../../assets/Icons/home.svg";

import GraduatedPurple from "../../../assets/Icons/graduated-purple.svg";
import Graduated from "../../../assets/Icons/graduated.svg";

import { FormDataContext } from "../../../Context/Context";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

let xyz = [{ id: "", name: "" }];

export const FormContextProvide = (props) => {
    const [type, setType] = useState();
    setType(xyz);
    return (
        <FormDataContext.Provider value={type}>
            {props.children}
        </FormDataContext.Provider>
    );
};

export const GetAQuote = ({ selectedSearch, handleSelectedChange,padding }) => {
    // const [selected, setSelected] = useState(0);
    const history = useHistory();

    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 320,
    });

    
    return (
                <Container maxWidth="lg" className={classes.getQuote} >
                    <Grid
                        container
                        alignItems="center"
                        
                justify="space-between"
                className={classes.GetAQuoteGrid} 
                //  md={10} sm={7} xs={"auto"}
                    >
                        <Grid item xs={'auto'} sm={'auto'} md={'auto'}  className={classes.verticalLine}>
                            <Typography
                                variant="h5"
                                color="secondary"
                                className={classes.headingOne}
                            >
                                Get A Quote
                            </Typography>
                        </Grid>
                        <Grid  item  xs={'auto'} sm={'auto'} md={'auto'} >
                            <Typography
                                variant="subtitle1"
                                color="secondary"
                                className={classes.headingTwo}
                            >
                                What type of service do you need?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={'auto'} md={'auto'} >
                            <Grid
                                container
                                spacing={2}
                        className={classes.paddingBlock0}
                            >
                                {storageData.map((item, key) => {
                                    return (
                                        <Grid item xs={6} className={classes.mobilePadding} key={key}>
                                            {/* <Button
                                                variant="outlined"
                                                size="large"
                                                color="secondary"
                                                classes={{
                                                root: classes.btnQuote, 
                                                     }}
                                                className={`${
                                                    classes.cardFooterBtn
                                                } ${
                                                    selectedSearch == item.id &&
                                                    "selected"
                                                }`}
                                                onClick={() => {
                                                    // setSelected(item.id);
                                                    console.log('jawad')
                                                    handleSelectedChange(item);
                                                }}
                                            >
                                                <img
                                                    src={item.icon2}
                                                    className={`${
                                                        classes.icon
                                                    } ${
                                                        selectedSearch ==
                                                            item.id &&
                                                        "selected"
                                                    }`}
                                                />
                                                {item.name}
                                            </Button> */}
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                        <Grid item xs={'auto'} sm={'auto'} md={'auto'} >
                            <Grid
                                container
                                alignItems="center"
                                className={classes.paddingBlock0}
                            >
                                <Button
                                    disabled={selectedSearch ? false : true}
                                    size="large"
                                    color="secondary"
                                    endIcon={
                                        <ArrowForwardOutlinedIcon fontSize="large" />
                                    }
                                    className={`${classes.nextHeading} `}
                                    onClick={() => history.push("/quote")}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    appBar: { top: "auto", bottom: 0, background: "#f0daf2" },
    
    headingOne: {
        fontSize: "30px",
        fontWeight: "bold",
        paddingRight: '18px',
        ["@media (max-width: 1278px) and (min-width: 960px)"]: {
            fontSize: '20px',
        },
        ["@media (max-width: 960px) and (min-width: 10px)"]: {
            paddingTop:'1rem',
            fontSize: '20px',
        },
        ["@media (max-width: 900px) and (min-width: 600px)"]: {
              fontSize:'16px',
        },
         
    },
    verticalLine: {
        paddingRight: 10,
        
        borderRight: '1px solid #064d7b',
        ["@media (max-width: 1278px) and (min-width: 960px)"]: {
            fontSize: '20px',
        },
        ["@media (max-width: 600px) "]: {
            borderRight: 'none'
        },
        
    },
    headingTwo: {
        fontSize: 18,
        width: 210,
        paddingLeft: 18,
        padding: '0px 10px',
          ["@media (max-width: 1278px) and (min-width: 960px)"]: {
            width: 178,
            padding: '0px 6px',
            fontSize: 16,
        },
           ["@media (max-width: 1020px) and (min-width: 600px)"]: {
            maxWidth: '100%',
        },
           ["@media (max-width: 900px) and (min-width: 600px)"]: {
               width: 155,
               paddingLeft: 18,
               padding: '0px 10px',
                fontSize: "12px"
        },
           ["@media (max-width: 600px) and (min-width: 0px)"]: {
               paddingLeft: 0,
               width: '100%',
        },
          
    },
    mobilePadding: {
        paddingLeft:9,
        ["@media (max-width: 960px) and (min-width: 300px)"]: {
              paddingLeft:'0 !important'
        },
    },
    GetAQuoteGrid: {
        padding: ' 9px 17px',
        marginLeft: '0px',
        background: '#FFD300', 
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'flex-start',
        width: 'fit-content',
        [theme.breakpoints.down("sm")]: {
            width: "400px"
        },
        "@media (max-width: 414px)": {
            width: "100%"
        }
        
        
         
    },
    btnQuote: {
        border: '1px solid #064D7B',
    },
    cardFooterBtn: {
        textTransform:' capitalize',
        paddingBlock: 7,
        paddingInline: 28,
        fontSize: 16,
        whiteSpace: 'nowrap',
        
        // border: '1px solid #064D7B',
        fontWeight: 'revert',
        ["@media (max-width: 1278px) and (min-width: 600px)"]: {
            fontSize: '13px',
            paddingBlock: 10.4,
            paddingInline: 28,
        },
        ["@media (max-width: 900px) and (min-width: 300px)"]: {
              fontSize: '13px',
            paddingBlock: 9.4,
            width:'100%',
        },
       
        // ["@media (max-width: 375px) and (min-width: 0px)"]: {
        //      padding: '7px 15px',
        // },
        //  ["@media (max-width: 600) and (min-width: 300px)"]: {
        //       fontSize: '13px',
        //     paddingBlock: 4,
        //     paddingInline: 6,
        // },
        [theme.breakpoints.only("md")]: {
            paddingInline: theme.spacing(3.2),
        },
        "&.selected": {
            boxShadow: "none",
            backgroundColor: "#064D7B",
            borderColor: "#064D7B",
            color: "white",
        },
        "&.Mui-disabled": {
            color: "rgb(166 82 177 / 58%)",
        },
       
    },
    nextHeading: {
        
        fontSize: 20,
        fontWeight: 'bold',
        ["@media (max-width: 960px) and (min-width: 300px)"]: {
              paddingLeft:'0 !important'
        },
    },
    nextIcon: {
        marginLeft: theme.spacing(2),
        fontWeight: "900",
    },
    paddingBlock0: {
        paddingBlock: theme.spacing(0),
        margin:0,width:'100%'
    },
    icon: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: theme.spacing(1.2),
        "&.selected": {
            filter: " invert(100%) sepia(0) saturate(0) hue-rotate(1deg) brightness(200%) contrast(102%)",
        },
    },
    getQuote: {
        padding:0,
        paddingTop: '30px',
        
    },
}));

const storageData = [
    {
        id: 1,
        name: "Commercial",
        icon: BuildingPurple,
        icon2: Building,
    },
    {
        id: 2,
        name: "Domestic",
        icon: HomePurple,
        icon2: Home,
    },
   
];