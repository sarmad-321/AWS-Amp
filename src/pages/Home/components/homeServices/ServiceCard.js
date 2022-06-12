import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import React from "react";
import { CardCV } from "../../../../components/Card/CardCV";

import car from "../../../../assets/Icons/car.svg";
// import indoor from "../../../../assets/Icons/indoor.svg"
import delivery from "../../../../assets/Icons/delivery.svg";
import arrowDown from "../../../../assets/Icons/arrowDown.svg";
import wareHouse from "../../../../assets/Icons/warehouse.svg";
import truck from "../../../../assets/Icons/truckB.svg";
import indoor from "../../../../assets/images/indoor.svg";
import sound from "../../../../assets/images/broadcast.png";
import calculator from "../../../../assets/images/calculator.png";
import certificate from "../../../../assets/images/certificate.png";
import fan from "../../../../assets/images/fan.png";
import ecofunding from "../../../../assets/images/ecofunding.png";

export const ServiceCard = () => {
  const classes = useStyles();
  return (
    <>
      {data.map((item, key) => {
        return (
          <Grid
            item
            xs={12}
            sm={"auto"}
            md={"auto"}
            lg={"auto"}
            // align-items-xs-center
            className={`${classes.gridItem}`}
            style={{ order: key + 1 }}
          >
            <CardCV
              bgColor={item.bgColor}
              topTitle={item.topText}
              bottomTitle={item.bottomText}
              buttonText={item.buttonText}
              img={item.img}
              key={key}
              href={item.href}
              marginTop={item.margnTop}
            >
              {item.childText}
            </CardCV>
          </Grid>
        );
      })}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      paddingTop: 14,
    },
  },
}));

const data = [
  {
    bgColor: "white",
    childText: "EPC",
    img: certificate,
    // topText: "Storage",
    bottomText: "We offer Energy Performance Certificates (EPCs).",
    buttonText: "Explore",
    label: "Business",
    href: "/EPC",
  },
  {
    bgColor: "white",
    childText: "SAP",
    img: calculator,
    // topText: "Storage",
    bottomText: "We offer Standard Assessment Procedure.",
    buttonText: "Explore",
    label: "Business",
    href: "/Sap",
  },
  {
    bgColor: "white",
    childText: "Air Pressure Test",
    img: fan,
    // topText: "Materials",
    bottomText: "Air Pressure testing Service.",
    buttonText: "Explore",
    label: "Box Shop",
    href: "/AirPressure",
  },

  {
    bgColor: "white",
    childText: "Sound Test",
    img: sound,
    // topText: "Pack",
    bottomText: "We offer Sound Testing for your building.",
    buttonText: "Explore",
    label: "Parking",
    href: "/SoundTest",
  },
  // {
  //     bgColor: "white",
  //     childText: "Eco Funding",
  //     img:ecofunding,
  //     // topText: "Storage",
  //     bottomText:
  //         "We also offer Eco funding.",
  //     // buttonText: "Explore",
  //     label: "Business",
  // 	href: "/quote",
  // },
];
