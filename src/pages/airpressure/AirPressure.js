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

export const AirPressure = ({ setShowHeader,setHeaderColor }) => {
    setShowHeader(true);
    setHeaderColor('primary')
    const classes = useStyles();

    return (
        <>
            <Box component="section" className={classes.infoContainer}>
            <Container maxWidth="lg">
            <Typography
                variant="h4"
                color="primary"
                className={classes.heading}
                gutterBottom
            >
                Our Air Pressure Testing
            </Typography>

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
                            src={airpressure}
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
                        Air tightness testing or Air Pressure Test is the procedure to trace any unwanted drafts and uncontrolled airflow through a building. Too much air leakage leads to heat loss resulting in higher CO2 emissions 

Building Regulations Part L1A for new dwellings and Part L2A for new buildings other than dwellings came into force in April 2006, requiring that standards of air tightness in new properties are both achieved and proven by the means of Air leakage Testing and an air leakage test certificate.


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
    
    
    
    infoContainer: {
        backgroundColor : theme.palette.primary.main

    },    infoTopHeading: {
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

