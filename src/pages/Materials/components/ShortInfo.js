import React from "react";

// Common components
import {
    Container,
    Grid,
    makeStyles,
    Typography,
    Button,
} from "@material-ui/core";
import { ButtonCV } from "../../../components/Button/ButtonCV";
import { Phone } from "@material-ui/icons";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

export const ShortInfo = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.infoContainer}>
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <Grid
                        container
                        alignItems="center"
                        direction="row"
                        fontSize="xx-large"
                    >
                        <DriveEtaIcon color="primary" />
                        <Typography
                            variant="h6"
                            color="primary"
                            className={classes.headingIcon}
                        >
                            Same day delivery on orders before 11:00
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        startIcon={<Phone />}
                        color="secondary"
                    >
                       <a href='tel:01733306456' className={classes.dialer}>
							01733306456
							</a>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    infoContainer: {
        backgroundColor: "#F4F8FE",
    },
    headingIcon: {
        paddingLeft: "1rem",
        [theme.breakpoints.down("xs")]: {
            width: "80%",
        },
    },
   dialer: {
		textDecoration: 'none',
		color:'#064D7B',
	},
    cardBtn: {
        fontSize: "1rem",
    },
}));
