import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { ButtonCV } from "../../../components/Button/ButtonCV";
// import phoneContact from "../../../assets/Icons/phone-contact.svg"
import {Phone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    banner: {
        background: theme.palette.primary.main,
        boxShadow:'0px 10px 30px #00000026',
        borderRadius: "5px",
        padding: "1.5rem 3rem",
        [theme.breakpoints.down("xs")]: {
            padding: "1.5rem 1rem",
        },
    },
    bannerHeading: {
        fontSize: "1.75rem",
        fontWeight: "900",
        color: "white",
        margin: 0
    },
    bannerSubHeading: {
        color: "white",
        fontWeight: "600",
        // maxWidth: "370px",
    },
    bannerButton: {
        background: "#FFD300",
        width: "202px",
        height: "45px",
        color: 'white',
        fontWeight: "900",
        borderRadius: "8px",
    },
   
    smallBannerSideBtn: {
        width:182,
        backgroundColor: theme.palette.button.main,
        color: "#064D7B",
        padding: "0.7rem 1.5rem",
        borderRadius: theme.spacing(1),
        fontSize: 12,
        '&:hover': {
       background: "white",
       color:"#064D7B"
    }  },
    smallBannerCon: {
        padding:' 0px 34px',
        [theme.breakpoints.up("md")]: {
                maxWidth: "1170px",
        },
        
    },
    call: {
        fontWeight: 'bold',
        color: '#064d7b',
        textDecoration: 'none',
    },
    underlyingText: {
        position: 'relative',
        zIndex: 0,
        marginRight: 5
    },
    underlying: {
    height: 6,
    width: '100%',
    backgroundColor: '#FFD300',
    position: 'absolute',
    left: 0,
    bottom: 7,
    zIndex: -1,
        
    }
}));

export const SmallBanner = () => {
    const classes = useStyles();
    return (
        <Container className={classes.smallBannerCon}>
            <Grid
                container
                spacing={2}
                justify="space-between"
                alignItems="center"
                className={classes.banner}
            >
                <Grid item>
                    <Typography
                        variant="h4"
                        className={classes.bannerHeading}
                        paragraph
                    >   Still confused ? Contact one of our experts today
                    </Typography>
                    {/* <Typography
                        variant="subtitle2"
                        className={classes.bannerSubHeading}
                    >
                        It’s easy to get started. Reach out to us and our
                        representative will get in touch with you.
                    </Typography> */}
                </Grid>
                <Grid item>
                   <Button
                            startIcon={<Phone />}
                            className={classes.smallBannerSideBtn}
                            >
                            <span className={classes.call}>
                            <a  href='tel:01733306456' className={classes.call}>01733306456</a>
                            </span>
                           
                           </Button>
                </Grid>   
            </Grid>
        </Container>
    );
};
