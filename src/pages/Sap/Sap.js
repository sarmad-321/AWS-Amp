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
import epcImage from '../../assets/images/epcimage.png'
import sap from '../../assets/images/SAP.jpg'

export const Sap = ({ setShowHeader,setHeaderColor }) => {
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
                SAP Assessment (EPC for New Building)  
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
                            src={sap}
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
                The Standard Assessment Procedure (SAP) is the methodology for assessing and comparing the energy and environmental performance of dwellings. Its purpose is to provide accurate and reliable assessments of dwelling energy performances that are needed to underpin energy and environmental policy initiatives. 

SAP works by assessing how much energy a dwelling will consume and how much carbon dioxide (CO2 ) will be emitted in delivering a defined level of comfort and service provision, based on standardised occupancy conditions. This enables a like for like comparison of dwelling performance. 

SAP calculations are used to demonstrate compliance with building regulations. Part L1A is the document by which new dwellings are assessed and Part L1B, which is less stringent, is used for existing dwellings. 


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

