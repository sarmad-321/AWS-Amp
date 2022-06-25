import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import {
  PhoneOutlined,
  MailOutlineOutlined,
  MapOutlined,
  AccessTime,
  Phone,
  Mail,
  Facebook,
  Instagram,
  WhatsApp,
  Copyright,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { IconText } from "../components/IconText/IconText";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const ContactBanner = (props) => {
  const classes = useStyles();
  const history = useHistory();

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
          sm={7}
          xs={12}
          md={4}
          lg={4}
          className={`${classes.borderAfter} ${classes.gridContainer}`}
        >
          <Typography variant="h6">Get in touch</Typography>
          <Grid item container direction="column" spacing={1}>
            <Grid item>
              <IconText>
                <PhoneOutlined /> <span>07580902000</span>
              </IconText>
            </Grid>
            <Grid item>
              <IconText>
                <MailOutlineOutlined />
                <span>info@innovationenergyexperts.co.uk</span>
              </IconText>
            </Grid>
            <Grid item>
              <IconText>
                <Copyright />
                <span>2022 Innovation Energy Experts</span>
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
          <Typography variant="h6">Coverage Area</Typography>
          <Grid item container direction="column" spacing={1}>
            <Grid item>
              <IconText>
                {/* <AccessTime /> */}
                <MapOutlined />
                <span>
                  Milton Keynes – Bedford <br /> Buckingham – Northampton <br />{" "}
                  and Surrounding Areas
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
          className={classes.gridContainer}
        >
          <Typography variant="h6"></Typography>
          <Link
            to="#"
            style={{ textDecoration: " none" }}
            onClick={() => history.push("/officeContact")}
          >
            <Grid item>
              <Button
                startIcon={<Mail />}
                className={classes.smallBannerSideBtn}
              >
                <span className={classes.call}>
                  <a className={classes.call}>Contact Us</a>
                </span>
              </Button>
            </Grid>
            <Grid item>
              <IconText>
                {/* <AccessTime /> */}

                <div style={{ color: "white", marginTop: "2%" }}>
                  Follow us on
                </div>
              </IconText>
              <Facebook style={{ color: "white", marginRight: "3%" }} />
              <Instagram style={{ color: "white", marginRight: "3%" }} />
              <WhatsApp style={{ color: "white" }} />
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  smallBannerSideBtn: {
    width: 182,
    backgroundColor: theme.palette.button.main,
    color: "#064D7B",
    padding: "0.7rem 1.5rem",

    borderRadius: theme.spacing(1),
    fontSize: 12,
    "&:hover": {
      background: "white",
      color: "#064D7B",
    },
  },
  smallBannerCon: {
    padding: " 0px 34px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "1170px",
    },
  },
  call: {
    fontWeight: "bold",
    color: "#064d7b",
    textDecoration: "none",
  },
  banner: {
    background: theme.palette.primary.main,
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
    padding: "0 29px",
    height: "135px",
  },
}));
