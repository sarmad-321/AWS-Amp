import React, { useState } from "react";
import {
	Container,
	makeStyles,
	Grid,
	Card,
	Box,
	CardContent,
	Typography,
	Button,
} from "@material-ui/core";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";

import { Swiper, SwiperSlide } from "swiper/react";
import locationContact from "../../../../assets/Icons/rentSec.png";
import ft100 from  "../../../../assets/images/imageOne.png"
import ft70 from  "../../../../assets/images/imageTwo.png"
import ft50 from  "../../../../assets/images/imageThree.png"
import ft35 from  "../../../../assets/images/imageFour.png"
import ft20 from  "../../../../assets/images/imageFive.png"
import ft15 from  "../../../../assets/images/imageSix.png"
import ft10 from  "../../../../assets/images/imageSeven.png"
import ft25 from  "../../../../assets/images/imageEight.png"
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./RentCarouselShort.css";

// icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const RentCarouselShort = ({
	selected,
	setSelected,
	diableSelectButton,
	setContactInfo,
	contactInfo,
}) => {
	const classes = useStyles();
	const [optionselected, setoptionSelected] = useState(1);
	const handleClick = (props) => (event) => {
		console.log(props.headingText);
		setoptionSelected(props.id);
		setContactInfo({
			...contactInfo,
			["size"]: {label : props.headingText , value : props.cost},
		});
	};
	return (
		<>
			<Grid item spacing={0}>
				<Grid item xs={12} md={12}>
					<Grid item md={12} className="imgslider">
						<Grid
							container
							style={{padding: 0}}
							// alignItems={"center"}
							justify={"center"}
						>
							<Grid
								item
								xs={"auto"}
								sm={5}
								md={5}
								// spacing={0}
								className={classes.imgContainer}
							>
								<img
									className={classes.srcImg}
									src={requiredSizeData[selected].img}
									alt="1"
								/>
							</Grid>
							<Grid item xs={"auto"} sm={5} md={7}>
								<Grid
									container
									className={classes.rentContainer}
									lg={12}
								>
									<Grid
										className={classes.rentAlign}
										sm={12}
										xs={12}
										item
										md={8}
									>
										<Typography
											variant="body1"
											color="textSecondary"
											className={classes.storageText}
										>
											{
												requiredSizeData[selected]
													.roomType
											}
										</Typography>
									</Grid>
									<Grid
										className={classes.rentAlign}
										item
										xs={12}
										lg={12}
									>
										<Typography
											className={classes.BoldHeading}
										>
											{
												requiredSizeData[selected]
													.headingText
											}
										</Typography>
									</Grid>
									<Grid
										className={classes.rentAlign}
										sm={12}
										xs={12}
										item
										md={12}
									>
										<Typography
											variant="body1"
											color="textSecondary"
											className={classes.locatedmsg}
										>
											{
												requiredSizeData[selected]
													.paraText
											}
										</Typography>
									</Grid>
									{!diableSelectButton && (
										<Grid
											item
											xs={12}
											sm={12}
											md={12}
											className={classes.rentAlign}
										>
											<Button
												className={`${
													classes.storageBtn
												} ${
													optionselected ===
														requiredSizeData[
															selected
														].id && "selected"
												}`}
												disableRipple={true}
												onClick={handleClick(
													requiredSizeData[selected]
												)}
											>
												Select{" "}
												{
													requiredSizeData[selected]
														.headingText
												}
											</Button>
										</Grid>
									)}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	imgContainer: {
		["@media (max-width: 599px) "]: {
			textAlign: "center",
		},
	},
	BoldHeading: {
		lineHeight: "60px",
		fontSize: "44px",
		fontWeight: "Bold",
		color: "#12356A",
		["@media (max-width: 965px) and (min-width: 713px)"]: {
			fontSize: 47,
		},
		["@media (max-width: 713px) and (min-width: 599px)"]: {
			fontSize: 27,
		},
		["@media (max-width: 599px) "]: {
			fontSize: 22,
			lineHeight: "40px",
			// display: "flex",
			// justifyContent: "center",
		},
	},
	AddMargin: {
		margin: 17,
	},
	rentContainer: {
		padding: 0,
		// padding: " 3rem 0px",
		// ["@media (max-width: 599px) "]: {
		// 	padding: " 1rem 0px",
		// },
	},
	storageBtn: {
		backgroundColor: "#ffffff",
		color: "#064D7B",
		boxShadow: "0px 3px 8px #00000026",
		padding: "0.5rem 3.5rem",
		marginTop: "20px",
		borderRadius: theme.spacing(1),
		 [theme.breakpoints.down("sm")]: {
			marginTop: "3px",
		},
		"&:hover": {
			background: theme.palette.primary.main,
			color: "#ffffff",
			boxShadow: "0px 3px 8px #00000026",
		},
		"&.selected": {
			background: theme.palette.primary.main,
			color: "#ffffff",
			boxShadow: "0px 3px 8px #00000026",
		},
	},
	sendMessage: {
		textAlign: "center",
		color: "#77838F",
		padding: "1rem 0",
	},
	heading: {
		textAlign: "center",
		color: "#064D7B",
		fontSize: "34px",
		fontWeight: "Bold",
		["@media (max-width: 599px) "]: {
			fontSize: 15,
		},
	},
	flexCenter: {
		display: "flex",
		justifyContent: "center",
	},
	flexImg: {
		display: "flex",
		justifyContent: "center",
		paddingRight: 48,
		alignItems: " center",
		[theme.breakpoints.down("md")]: {
			justifyContent: "flex-end",
		},
		["@media (max-width: 965px) and (min-width: 599px)"]: {
			paddingRight: 8,
		},
		["@media (max-width: 599px)"]: {
			// paddingRight: 0,
			// justifyContent: "center",
		},
	},
	srcImg: {
		height: "100%",
		width: "100%",
		["@media (max-width: 599px)"]: {
			width: "10rem",
			height: "80px",
			// texAlign: "center",
		},
	},

	cardClass: {
		width: "227px",
		color: "#064D7B",
		height: "295px",
		border: "1px solid #064D7B",
		"&.selected": {
			boxShadow: "none",
			backgroundColor: "#0062cc",
			borderColor: "#064D7B",
			color: "#ffffff",
		},
	},
	cardContent: {
		height: "100%",
		color: "inherit",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		"& .MuiSvgIcon-root ": { fontSize: "7rem" },
	},
	cardHeading: {
		fontSize: "1.25rem",
		// color: "#12356A",
		color: "inherit",
	},
	rentAlign: {
		textAlign: "start",
		["@media (max-width: 599px)"]: {
			textAlign: "center",
			// display: "flex",
			// justifyContent: "center",
		},
	},
	cityLocation: {
		paddingLeft: 5,
		color: "rgb(12 92 144)",
	},
	locatedmsg: {
		color: "#77838F",
		fontSize: 17,
		["@media (max-width: 965px) and (min-width: 0px)"]: {
			fontSize: 12,
		},
		["@media  (max-width: 599px)"]: {
			width: "100%",
			// textAlign: "center",
			margin: "auto",
		},
	},
	storageText: {
		color: "#064D7B",
		fontSize: 12,
		letterSpacing: "2px",
		["@media (max-width: 965px) and (min-width: 0px)"]: {
			fontSize: 14,
		},
		["@media  (max-width: 599px)"]: {
			width: "50%",
			margin: "auto",
			display: "none",
			// textAlign: "center",
		},
	},
	underlyingText: {
		position: "relative",
		zIndex: 0,
		marginLeft: 5,
	},
	underlying: {
		height: 6,
		width: "100%",
		backgroundColor: "#FFD300",
		position: "absolute",
		left: 0,
		bottom: 10,
		zIndex: -1,
		["@media (max-width: 599px) "]: {
			bottom: 5,
			height: 3,
		},
	},
}));

// card Data

const requiredSizeData = [
	{
		id: 0,
		img: ft15,
		roomType: "Storage Room",
		headingText: "15sqft",
		cost : 7.99,
		paraText:
			"Approximately the same size as a telephone box. Ideal for stacking boxes, suitcases, and small items of furniture",
	},
	{
		id: 1,
		img: ft25,
		roomType: "Storage Room",
		headingText: "25sqft",
		cost : 9.99,
		paraText:
			"Approximately the same size as a small garden shed. Ideal for storing the contents of studio flat.",
	},
	{
		id: 3,
		img: ft35,
		roomType: "Storage Room",
		headingText: "35sqft",
		cost : 11.99,
		paraText:
			"Approximately the same size a garden shed. Ideal for storing the contents of a one-bedroom studio flat.",
	},
	{
		id: 4,
		img: ft50,
		roomType: "Storage Room",
		headingText: "50sqft",
		cost : 17.99,
		paraText:
			"Approximately the size of half a single garage. Ideal for storing the contents of a one-bedroom flat.",
	},
	{
		id: 5,
		img: ft70 ,
		roomType: "Storage Room",
		headingText: "75sqft",
		cost : 25.99,
		paraText:
			"Approximately ¾ of a single garage. Ideal for storing the contents of a two bedroom house.",
	},
	{
		id: 6,
		img: ft100,
		roomType: "Storage Room",
		headingText: "100sqft",
		cost : 31.99,
		paraText:
			"Approximately the size of a single garage. Ideal for storing contents of a two or three bedroom house.",
	},
	{
		id: 7,
		img: ft10 ,
		roomType: "External Container",
		headingText: "10ft",
		cost : 30,
		paraText:
			"Approximately ¾ of a single garage. Ideal for storing the contents of a two-bedroom house.",
	},
	{
		id: 8,
		img: ft20,
		roomType: "External Container",
		headingText: "20ft",
		cost : 40,
		paraText:
			"Approximately one and a half single garages. Ideal for storing the contents of a three- or four-bedroom house.",
	},
];
