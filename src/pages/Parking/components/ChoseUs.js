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
import sound from '../../../assets/images/Soundtesting.jpg'

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
                            src={sound}
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
                               Sound Insulation Testing is a test devised to check elements of a building for their sound insulation performance in accordance with building regulations Part E. 

When a new construction or the conversion of an existing construction results in two adjoining dwellings being separated by party elements, it is a Building Regulations requirement for these elements to be tested.  <br/> 
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
