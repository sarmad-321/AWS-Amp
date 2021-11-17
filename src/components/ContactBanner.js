import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import {
    PhoneOutlined,
    MailOutlineOutlined,
    MapOutlined,
    AccessTime,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { IconText } from "../components/IconText/IconText";

export const ContactBanner = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                justify="space-between"
                alignItems="center"
                className={`${classes.banner} ${
                    props.zeroPaddingInline
                        ? classes.zeroPaddingInline
                        : classes.bannerPadding
                }`}
            >
                <Grid
                    item
                    sm={6}
                    xs={12}
                    md={4}
                    lg={3}
                    className={`${classes.borderAfter} ${classes.gridContainer}`}
                >
                    <Typography variant="h6">Get in touch</Typography>
                    <Grid item container direction="column" spacing={1}>
                        <Grid item>
                            <IconText>
                                <PhoneOutlined /> <span>01733306456</span>
                            </IconText>
                        </Grid>
                        <Grid item>
                            <IconText>
                                <MailOutlineOutlined />
                                <span>contact@ivattstorage.co.uk</span>
                            </IconText>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    className={`${classes.borderAfter} ${classes.gridContainer}`}
                >
                    <Typography variant="h6">Office address</Typography>
                    <Grid item container direction="column" spacing={1}>
                        <Grid item>
                            <IconText>
                                <MapOutlined />
                                <span>
                                   Ivatt Self Storage,Ivatt Way,
                                    {props.full && <br></br>}
                                    Westwood, Peterborough, PE3 7PH.
                                    
                                </span>
                            </IconText>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sm={6}
                    xs={12}
                    md={4}
                    lg={3}
                     className={`${classes.borderAfter} ${classes.gridContainer}`}
                >
                    <Typography variant="h6">Store opening time</Typography>
                    <Grid item container direction="column" spacing={1}>
                        <Grid item>
                            <IconText>
                                <AccessTime />
                                <span>Weekdays: 9:00 AM – 5:30 PM <br/> Saturday: 9:00 AM – 2:00 PM </span>                                
                            </IconText>
                        </Grid>
                    </Grid>
                </Grid>
                 <Grid
                    item
                    sm={6}
                    xs={12}
                    md={4}
                    lg={3}
                    className={classes.gridContainer}
                >
                    <Typography variant="h6">Storage access times</Typography>
                    <Grid item container direction="column" spacing={1}>
                        <Grid item>
                            <IconText>
                                <AccessTime />
                                <span>Weekdays: 8:00 AM – 8:00 PM <br/>

Weekends: 9:00 AM – 6:00 PM</span>
                            </IconText>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    banner: {
        background: "#064D7B",
        // borderRadius: "12px",
        color: "white",
    },
    bannerPadding: {
        padding: "1.5rem 3rem",
        [theme.breakpoints.down("sm")]: {
            padding: "",
        },
    },
    zeroPaddingInline: {
        padding: "1.5rem 2%",
        borderRadius: 0,
    },
    borderAfter: {
        borderRight: "1px solid ",
        [theme.breakpoints.down("sm")]: {
            borderRight: "none",
        },
    },
    gridContainer: {
        padding: '0 29px',
        height: "135px",
    },
}));
