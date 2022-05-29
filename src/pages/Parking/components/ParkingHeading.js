import React from "react";

// Common components
import {
    Container,
    Grid,
    makeStyles,
    Typography,
    Button,
} from "@material-ui/core";
import { Phone } from "@material-ui/icons";

export const ParkingHeading = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Typography
                variant="h4"
                color="primary"
                className={classes.heading}
                gutterBottom
            >
                Our Sound Testing Service
            </Typography>
           
            <Typography
                color="textSecondary"
                className={classes.textBold}
                paragraph
            >
                Give us a call to book your sound testing services
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
    );
};

const useStyles = makeStyles((theme) => ({
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
