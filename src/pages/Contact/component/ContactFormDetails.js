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

// image
import off from "../../../assets/images/off.svg";
// storage icons
import Building from "../../../assets/Icons/office-building.svg";
import Home from "../../../assets/Icons/home.svg";
import Graduated from "../../../assets/Icons/graduated.svg";
import { sendQuote } from "../../../services/email";

const axios = require("axios");

export const ContactFormDetails = ({ contactInfo }) => {
	useEffect(() => {
		// setCurrentSlide(swiper);
		handleSubmit()
		console.log(formData)
	}, []);
	const [button, setButton] = useState(true);
	const formData ={
		startDate: contactInfo.startDate,
		PropertyType: contactInfo?.duration?.label,
		size: contactInfo?.size?.label,
		email: contactInfo.email,
		name: contactInfo.name,
		phone: contactInfo.phone,
		address: contactInfo.address

	}
    
console.log(contactInfo)
	const classes = useStyles();
	const history = useHistory();

	const handleClick = () => {
		history.push("/");
	};
  const handleSubmit = () => {
	let email = contactInfo.email;

	let data = {
		email : email,
		bedrooms: contactInfo["Bedrooms"] ,
		propertyType: contactInfo["Property Type"].label,
		address: contactInfo["address"],
		name: contactInfo.name,
		phone:contactInfo.phone,
		type : contactInfo.type,
		address: contactInfo.address

	}
	// console.log()
	sendQuote(data)
	
  };
	
	return (
		<Container className={classes.paddingBottom}>
			<Button
				startIcon={<ArrowBackIosRounded />}
				onClick={handleClick}
				className={classes.backButton}
			>
				Back
			</Button>
			<Typography
				variant="h4"
				color="primary"
				className={classes.infoHeading}
				paragraph
			>
				Hi {contactInfo.nameTitle} {contactInfo.name}{" "}
				, Thanks for reaching us. you will recieve the quote in your email soon.
				
				
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
								{contactInfo["Property Type"].label}
							</Typography>
						</CardContent>
					</Card>
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
		display: 'flex',
		flexDirection: 'column',
		paddingLeft:16
		// paddingRight: '1rem'
		
	},
	alignRight: {
		alignSelf:'end'
	},
	lineCut: {
		textDecoration:" line-through",
        textDecorationColor:" red",
	},
	contactInfoHeading: {
		
		fontWeight: "900",
		fontSize: "1.75rem",
		// alignSelf: 'flex-start',
		// paddingLeft: 28,
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
		marginTop: 10,
		color: "#ffffff",
	},
	reserveButton2: {
		
		fontSize:10
	},
	offprice: {
		width: '100%',
		height: '100%',
		objectFit: 'none'
	},
	leftStandard: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		paddingLeft: '23px',
	},
	paddingTag: {
		paddingRight: '24px'
	},
	paddingBottom: {
			[theme.breakpoints.down("md")]: {
			paddingBottom:'10vw'
		},
	},
	xsFont: {
		fontSize:18,
		[theme.breakpoints.down("sm")]: {
			fontSize:14,
		},
	}
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