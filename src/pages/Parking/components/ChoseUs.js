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
import VoiceChatIcon from "@material-ui/icons/VoiceChat";

import ParkingImage from "../../../assets/images/A&RRemovals.jpg";
// import Box from "../../../assets/images/box.png";

export const ChoseUs = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={5}>
                    <Grid container className={classes.infoContainer}>
                        <Avatar
                            variant="square"
                            className={classes.image}
                            src={ParkingImage}
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
                                A & R Removals is a family owned Removals Company based in the heart of Peterborough. We work hard to provide you house moving services under a stress free environment.

Moving house can be very stressful and hectic. Therefore, we do whatever it takes to make the process easy and hassle free. We assist you from the commencement of the relocation process to the placement of the last piece. Our staff is courteous, prompt and professional, who take extra care while treating your belongings.

We go an extra mile to ensure that your belongings are transported safely and carefully. A&R Removals offers a full packing solution where our trained experienced packers will carefully pack all your belongings.

We proudly provide value added house moving services at very competitive prices.

For further details please speak to one of our representatives or browse through our website.
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
}));
