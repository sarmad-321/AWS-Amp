import React from "react";
// Common components
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { ButtonCV } from "../../../components/Button/ButtonCV";
import { Phone } from "@material-ui/icons";
export const MaterialHeading = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Typography
                variant="h4"
                color="primary"
                className={classes.heading}
                gutterBottom
            >
                Looking for boxes? <br></br> <span style={{fontWeight:'400'}}> We are here to help </span> 
            </Typography>
            <Typography
                className={`${classes.para70} ${classes.para}`}
                paragraph
            >
               Our experts in self-storage and pacing are dedicated to offering
                you unparallel customer service, particularly when it comes to
                packing your valuables with our range of robust boxes and
                packing accessories.
            </Typography>
            <Button className={classes.btnContact} startIcon={<Phone />}>
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
    dialer: {
		textDecoration: 'none',
		color:'#064D7B',
	},
    para: {
        color: theme.palette.primary.contrastText,
    },
    para70: {
        width: "70%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    btnContact: {
        fontSize: "0.6875rem",
        fontWeight: "900",
        minWidth: "150px",
        height: "37px",
        background: theme.palette.secondary.contrastText,
        color: theme.palette.primary.main,
        "&:hover": {
			background: "white",
			color: "#064D7B",
		},
    },
}));