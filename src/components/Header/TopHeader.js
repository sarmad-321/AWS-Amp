import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    MenuItem,
    Container,
    Grid,
    Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/Icons/headerLogo.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export default function TopHeader() {
    const {
        header,
        logo,
        menuButton,
        toolbar,
        drawerContainer,
        appBar,
        topSmallBanner,
        topSmallBannerIcon,
    } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    const history = useHistory();

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({
                      ...prevState,
                      mobileView: false,
                  }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <Container>
                <Toolbar className={toolbar} disableGutters>
                    <Grid container alignItems="center">
                        <Grid item lg={3}>
                            {femmecubatorLogo}
                        </Grid>
                        <Grid item>
                            <div>{getMenuButtons()}</div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar className={toolbar}>
                <div>{femmecubatorLogo}</div>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "right",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    {/* <ul className={drawerContainer}>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul> */}
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        // component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const femmecubatorLogo = (
        <img
            src={Logo}
            style={{ width: "156px", height: "79px", cursor: "pointer" }}
            alt="Ivett Storage"
            onClick={() => history.push("/")}
        />
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        // component: RouterLink,
                        className: menuButton,
                    }}
                    disableRipple={true}
                    onClick={() => history.push(href)}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <Hidden smDown>
                <Container maxWidth={false} className={topSmallBanner}>
                    <Typography>Upto 50% off on your first purchase</Typography>
                    <ArrowForwardIcon className={topSmallBannerIcon} />
                </Container>
            </Hidden>
            <AppBar
                className={header}
                position="static"
                elevation={0}
             
            >
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}

const headersData = [
    {
        label: "Get Quote",
        href: "/quote",
    },
    {
        label: "Materials",
        href: "/materials",
    },
    {
        label: "Parking",
        href: "/parking",
    },
];

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "transparent",
        // paddingRight: "79px",
        // paddingLeft: "118px",
        color: theme.palette.primary.main,
        "@media (max-width: 900px)": {
            // paddingLeft: 0,
            // paddingRight: 0,
        },
    },
    appBar: {
        background: "transparent",
        color: theme.palette.primary.main,
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
    topSmallBanner: {
        background: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "45px",
        color: "#fff",
    },
    topSmallBannerIcon: {
        marginLeft: theme.spacing(2),
    },
}));
