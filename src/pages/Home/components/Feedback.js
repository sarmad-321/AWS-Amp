import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { ButtonCV } from "../../../components/Button/ButtonCV";
import { CardCarousels } from "../../../components/CardCarousel/CardCarousels";
import { Link, useHistory, useLocation } from "react-router-dom";

export const Feedback = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Container maxWidth="false" className={classes.root}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item sm={12} md={4} lg={3}>
                    <Typography
                        variant="caption"
                        className={classes.headingTextTop}
                    >
                        Client feedback
                    </Typography>
                    <Typography
                        variant="h4"
                        color="primary"
                        gutterBottom
                        className={classes.headingText}
                    >
                        What Do People Say About Us
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className={classes.clientfeed} paragraph>
                       We have served hundreds of customers. See what they have to say about Ivatt facility.
                    </Typography>
                    <ButtonCV variant="outlined" click={()=>history.push("/officeContact")}>Contact Us</ButtonCV>
                </Grid>
                <Grid item sm={12} md={8} lg={9} className={classes.gridItem}>
                    <CardCarousels />
                </Grid>
            </Grid>
        </Container>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: "3vw",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "2rem",
        },
    },
    headingText: {
        fontWeight: "900",
    },
    headingTextTop: {
        color: "#05386B",
        letterSpacing: "1.2px",
        fontSize: 12
    },
    gridItem: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
        },
    },
    clientfeed: {
        fontSize: 15,
         color:' #58595B',
    },
    underlyingText: {
        position: 'relative',
        zIndex: 0
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
