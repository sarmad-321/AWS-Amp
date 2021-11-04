import React from "react";
import {
	Grid,
	makeStyles,
	Typography,
	Button,
	Hidden,
	Card,
	CardContent,
	Container,
	Avatar,
	duration,
} from "@material-ui/core";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

// icons
import NearMeIcon from "@material-ui/icons/NearMe";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBackIosRounded from "@material-ui/icons/ArrowBackIosRounded";

// storage icons
import Building from "../../../assets/Icons/office-building.svg";
import Home from "../../../assets/Icons/home.svg";
import Graduated from "../../../assets/Icons/graduated.svg";

const axios = require("axios");

export const ContactFormDetails = ({ contactInfo }) => {
	const [button, setButton] = useState(true);
	const formData ={
		startDate: contactInfo.startDate,
		duration: contactInfo.duration.label,
		size: contactInfo.size.label,
		email: contactInfo.email,
		nameTitle: contactInfo.nameTitle,
		name: contactInfo.name,
		subname:contactInfo.subname,
		phone: contactInfo.phone,

	}
    
console.log(formData)
	const classes = useStyles();
	const history = useHistory();

	const handleClick = () => {
		history.push("/");
	};
  const handleSubmit = (e) => {
    e.preventDefault();
	  let email = contactInfo.email;
   axios
      .post("https://ivatt-backend.herokuapp.com/tabular", {
       
        email: email,
        message: formData,
      })
      .then(function (response) {
		  setButton(false)
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
	
	return (
		<Container>
			{/* <Button
				startIcon={<ArrowBackIosRounded />}
				onClick={handleClick}
				className={classes.backButton}
			>
				Back
			</Button> */}
			<Typography
				variant="h4"
				color="primary"
				className={classes.infoHeading}
				paragraph
			>
				Hi {contactInfo.nameTitle} {contactInfo.name}{" "}
				{contactInfo.subname && contactInfo.subname},here is your quote for{" "}
				<span className={classes.underlinedContainer}>
					<span>{contactInfo.size.label}</span>
					<span className={classes.underlined}></span>
				</span>{" "}
				 {/* room at Ivatt Self Storage Peterborough{" "}
				<span className={classes.underlinedContainer}>
					<span>{contactInfo.duration.label}</span>
					<span className={classes.underlined}></span>
				</span>{" "} */}
				room at Ivatt Way Peterborough.
			</Typography>
			<Grid container spacing={2} >
				<Grid item xs={12} sm={4} md={3}>
					<Card
						className={`${classes.cardClass} selected `}
					>
						<CardContent className={classes.cardContent}>
							<img
								src={Building}
								alt={contactInfo.type}
								className={classes.cardIcon}
							/>
							<Typography variant="subtitle1" paragraph>
								{contactInfo.type}
							</Typography>
							<Typography
								variant="h4"
								className={classes.cardHeadingTwo}
							>
								{contactInfo.size.label}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid
					item
					xs={12}
					sm={4}
					md={4}
					lg={5}
					className={classes.detailedGrid}
				>
					<Grid container justify="center" spacing={2}>
						<Grid item xs={6}  className={classes.bordeRight}>
							<Typography
								color="primary"
								gutterBottom
								className={classes.contactInfoHeading}
							>
								£{
									contactInfo.duration.value <= 8 ?
									parseFloat( (contactInfo.size.value * contactInfo.duration.value)/2).toFixed(2) :
								parseFloat(contactInfo.size.value * contactInfo.duration.value) - ((contactInfo.size.value *8)/2 ).toFixed()
								
								}
							</Typography>
							<Typography color="primary">
								for {contactInfo.duration.label}
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography
								gutterBottom
								color="primary"
								className={classes.contactInfoHeading}
							>
								£{	(contactInfo.size.value)}
							</Typography>
							<Typography color="primary">
								Standard Price
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.borderText}>
								50% off 2 Months Storage
							</Typography>
						</Grid>
						<Grid item xs={12}>
							{button ?<Button
								variant="contained"
								color="secondary"
								fullWidth={true}
								endIcon={<ArrowForward />}
								className={classes.reserveButton}
								onClick={handleSubmit}
							>
								Reserve Now
							</Button> :
								<Button
								variant="contained"
								color="secondary"
								fullWidth={true}
								endIcon={<ArrowForward />}
								className={classes.reserveButton2}
							>
								Thanks! we will get back to you soon
							</Button>
							}
							
							<Typography
								color="primary"
								className={classes.noteText}
							>
								Price excludes insurance and padlock
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				{/* <Grid item xs={12} sm={4} md={4}>
					<Grid container>
						<Grid item xs={3} className={classes.iconGrid}>
							<Avatar className={classes.avatar}>£</Avatar>
						</Grid>
						<Grid item xs={9} className={classes.iconGrid}>
							<span className={classes.amount}></span>
							<span className={classes.amountTax}>inc Vat</span>
							<Typography color="primary">
								Peterborough Padholme Road East PE1 5XL
							</Typography>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={3}>
							<NearMeIcon className={classes.nearmeIcon} />
						</Grid>
						<Grid item xs={9}>
							<Typography color="primary">
								Peterborough Padholme Road East PE1 5XL
							</Typography>
						</Grid>
					</Grid>
				</Grid> */}
			</Grid>
		</Container>
	);
};

const useStyles = makeStyles((theme) => ({
	backButton: {
		marginBottom: theme.spacing(2),
	},
	infoHeading: {
		fontWeight: 700,
		fontSize: "2.5rem",
		 [theme.breakpoints.only("xs")]: {
			fontSize: 14
		},
	},
	cardClass: {
		width: "180px",
		height: "240px",
		color: "#064D7B",
		border: "1px solid #064D7B",
		"&.selected": {
			boxShadow: "none",
			backgroundColor: theme.palette.primary.main,
			borderColor: theme.palette.primary.main,
			color: "#ffffff",
		},
		[theme.breakpoints.down("sm")]: {
			margin: "auto",
		},
	},
	cardContent: {
		color: "inherit",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		// "& .MuiSvgIcon-root ": { fontSize: "7rem" },
	},
	cardIcon: {
		width: "70px",
		height: "70px",
		filter: "invert(100%) sepia(0) saturate(0%) hue-rotate(44deg) brightness(198%) contrast(105%)",
	},
	cardHeadingTwo: {
		fontSize: "1.75rem",
		fontWeight: "bold",
	},
	detailedGrid: {
		display: "flex",
		[theme.breakpoints.down("sm")]: {
			order: 1,
		},
	},
	bordeRight: {
		borderRight: "1px solid #064D7B",
	},
	contactInfoHeading: {
		fontWeight: "900",
		fontSize: "1.75rem",
	},
	borderText: {
		fontSize: "14px",
		boxShadow: "0px 3px 6px #00000029",
		border: "1px solid #064D7B",
		borderRadius: "4px",
		textAlign: "center",
		color: theme.palette.primary.main,
	},
	gridIconCenter: {
		height: "100%",
	},
	GridIcon: {
		display: "flex",
		justifyContent: "space-evenly",
	},
	amount: {
		fontSize: theme.spacing(5),
		marginRight: theme.spacing(1),
		fontWeight: "Bold",
		color: theme.palette.primary.main,
	},
	amountTax: {
		color: theme.palette.primary.main,
	},
	nearmeIcon: {
		color: "#273787",
		fontSize: "2.6rem",
	},
	avatar: {
		backgroundColor: "#273787",
		fontWeight: "bold",
	},
	underlinedContainer: {
		position: "relative",
	},
	underlined: {
		content: "''",
		position: "absolute",
		backgroundColor: "#FBD84A",
		zIndex: "-1",
		width: "100%",
		height: "10px",
		left: 0,
		bottom: "20%",
	},
	noteText: {
		fontSize: "14px",
		paddingTop: "4px",
	},
	reserveButton: {
		color: "#ffffff",
	},
	reserveButton2: {
		fontSize:10
	},
}));

const storageData = [
	{
		id: 1,
		icon: Building,
	},
	{
		id: 2,
		icon: Home,
	},
	{
		id: 3,
		icon: Graduated,
	},
];
// test