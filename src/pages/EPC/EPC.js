import React from "react";
// Common components
import {
    Container,
    Grid,
    makeStyles,
    Avatar,
    Typography,
    Button,
} from "@material-ui/core";

import { Phone } from "@material-ui/icons";
// Common Component
import { Box } from "@material-ui/core";
import sound from '../../assets/images/Soundtesting.jpg'
import airpressure from '../../assets/images/airpressure.jpeg'
import epcImage from '../../assets/images/epcimage.png'

export const EPC = ({ setShowHeader,setHeaderColor }) => {
    setShowHeader(true);
    setHeaderColor('primary')
    const classes = useStyles();

    return (
        <>
            <Box component="section" style={{backgroundColor:'#064D7B'}}>
            <Container maxWidth="lg">
            <Typography
                variant="h4"
                color="primary"
                className={classes.heading}
                gutterBottom
            >
                EPC  (Energy Performance Certificate for Existing Building) 
            </Typography>
           
            <Typography
                color="textSecondary"
                className={classes.textBold}
                paragraph
            >
                Give us a call to book your Air pressure service
            </Typography>
            <Button
                startIcon={<Phone />}
                color="secondary"
                className={classes.borderBtn}
            >
               <a href='tel:01733306456' className={classes.dialer}>
							01733306456
							</a>
            </Button>
        </Container>
            </Box>
            <Box component="section">
            <Container maxWidth="lg">
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={5}>
                    <Grid container className={classes.infoContainer}>
                        <Avatar
                            variant="square"
                            className={classes.image}
                            src={epcImage}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={7}
                    className={classes.infoGridRight}
                >
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                             <Typography
                                variant="body2"
                                className={classes.iconPara}
                            >
                     An Energy Performance Certificate is often referred to as an EPC. Similar to the energy rating that you see on appliances, the EPC shows the rating of the property It provides an energy rating from A to G, where A is the most efficient and G is the least efficient. The better the rating the more energy efficient the building is and the lower the fuel bills will be. 

To produce the Energy Performance Certificate, a qualified Domestic Energy Assessor must visit the house. The Domestic Energy Assessor or DEA will collect information regarding the existing heating, lighting, glazing and insulation. Measurements will also be taken of the home. Once the relevant data is collected, the information is then put into Government approved software that will then produce the EPC. The EPC is lodged on a national register and is then valid for 10 years.  

It is a legal requirement to have a valid Energy Performance Certificate (EPC) when a building is sold, rented or constructed. Your property's EPC needs to be available to potential buyers as soon as you start to market your property for sale or rent. 

An EPC is valid for 10 years and can be used multiple times during this period. The EPC will expire after 10 years and a new EPC (valid for the next 10 years) should be produced if the property is marketed for sale or rent at that time.


                            </Typography>
                        </Grid>
                        {/* <Grid item>
                            <Typography
                                variant="subtitle2"
                                color="primary"
                                className={classes.infoTopHeading}
                            >
                                Choose us
                            </Typography>
                            <Typography
                                variant="h4"
                                color="primary"
                                className={classes.infoHeading}
                                paragraph
                            >
                                Why to choose us
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar
                                variant="circle"
                                className={classes.icon}
                                paragraph
                            >
                                <VoiceChatIcon />
                            </Avatar>
                            <Typography
                                variant="h5"
                                color="textSecondary"
                                className={classes.iconHeading}
                                gutterBottom
                            >
                                24 hours CCTV security
                            </Typography>
                            <Typography
                                variant="body2"
                                className={classes.iconPara}
                            >
                                Fusce placerat pretium mauris, vel sollicitudin
                                elit lacinia vitae. Quisque sit amet nisi erat.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar
                                variant="circle"
                                className={classes.icon}
                                paragraph
                            >
                                <VoiceChatIcon />
                            </Avatar>
                            <Typography
                                variant="h5"
                                color="textSecondary"
                                className={classes.iconHeading}
                                gutterBottom
                            >
                                Staff on site 7 days a week
                            </Typography>
                            <Typography
                                variant="body2"
                                className={classes.iconPara}
                            >
                                Fusce placerat pretium mauris, vel sollicitudin
                                elit lacinia vitae. Quisque sit amet nisi erat.
                            </Typography>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
            </Box>
        
        </>
    );
};


const useStyles = makeStyles((theme) => ({
    
    
    infoContainer: {},
    infoTopHeading: {
        fontWeight: "bold",
    },
    infoHeading: {
        fontWeight: "900",
        // [theme.breakpoints.down("sm")]: {
		// 	fontSize: 14
		// },
    },
    image: {
        width: "100%",
        height: "100%",
        position: "relative",
    },
    icon: {
        background: "#064D7B",
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    iconHeading: {
        fontWeight: "bold",
    },
    infoGridRight: {
        padding: theme.spacing(6),
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(0),
        },
    },
    iconPara: {
        lineHeight: "2",
        color: "#58595B",
        fontSize: theme.spacing(2),
    },
    heading: {
        fontWeight: "900",
         color: theme.palette.secondary.contrastText,
    },
     para: {
        color: theme.palette.primary.contrastText,
    },
     dialer: {
		textDecoration: 'none',
		color:'#064D7B',
	},
    para70: {
        textTransform:'capitalize !imporatnt',
        width: "70%",
         [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    textBold: {
        fontWeight: "bold",
        color: theme.palette.primary.contrastText,
    },
    borderBtn: {
        // border: "1px solid #A21EB0", 
        color: ' #064D7B',
        background: ' #FFD300',
        minWidth: 150,
        '&:hover': {
       background: "white",
       color:"#064D7B"
        },
    }
}));

