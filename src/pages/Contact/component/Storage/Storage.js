import React, { useState } from "react";
import "./Storage.css";
import {
	makeStyles,
	Typography,
	Card,
	CardContent,
	Grid,
} from "@material-ui/core";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Building from "../../../../assets/Icons/office-buildings.svg";
import Home from "../../../../assets/Icons/home.svg";
import Graduated from "../../../../assets/Icons/graduated.svg";

import useWindowSize from "../../../../WindowSize";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./Storage.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

const storageData = [
	{
		id: 1,
		name: "Business",
		icon: Building,
	},
	{
		id: 2,
		name: "Domestic",
		icon: Home,
	},
];

export const Storage = ({ selectedSearch,contactInfo, setContactInfo, typeId }) => {
	const classes = useStyles();
	const [selected, setSelected] = useState(typeId || 1);

	const [width] = useWindowSize();

	const handleClick = (props) => (event) => {
		setSelected(props.id);
		setContactInfo({
			...contactInfo,
			["type"]: props.name,
			["typeId"]: props.id,
		});
	};
	return (
		<Grid container direction="column" alignItems="flex-start">
			<Grid item>
				<Typography
					variant="h6"
					color="primary"
					style={{fontSize: width < 600  ? 17 : 17}}
					// className={classes.headingText}
					paragraph
				>
					What type of storage do you need?
				</Typography>
			</Grid>
			<Grid container spacing={3} className={"cardContainer"}>
				<Swiper
					freeMode={true}
					slidesPerView={"auto"}
					// navigation={{
					// 	nextEl: ".swiper-button-next",
					// 	prevEl: ".swiper-button-prev",
					// }}
					className="storageCarousel"
				>
					{storageData.map((cardItem, key) => {
						return (
							<SwiperSlide className={classes.swiperSlide}>
								<Grid item>
									<Card
										className={`${classes.cardClass} ${
											selected == cardItem.id &&
											"selected"
										} `}
										variant="outlined"
										onClick={handleClick(cardItem)}
									>
										<CardContent
											className={classes.cardContent}
										>
											<img
												src={cardItem.icon}
												className={`${
                                                        classes.icon
                                                    } ${
                                                       selected == cardItem.id &&
											"selected"
                                                    }`}
											/>
											<Typography variant="" style={{fontFamily:'inter'}}>
												{cardItem.name}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</SwiperSlide>
						);
					})}
					{/* {width <= 600 && (
						<>
							<ArrowBackIcon className="swiper-button-prev" />
							<ArrowForwardIcon className="swiper-button-next" />
						</>
					)} */}
				</Swiper>
			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles((theme) => ({
	cardClass: {
		width: "180px",
		height: "210px",
		color: "#064D7B",
		border: "1px solid #064D7B",
		cursor: "pointer",
		"&.selected": {
			boxShadow: "none",
			backgroundColor: theme.palette.primary.main,
			borderColor: theme.palette.primary.main,
			color: "#ffffff",
		},
	},
	cardContent: {
		color: "inherit",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		"& .MuiSvgIcon-root ": { fontSize: "7rem" },
	},
	
	icon: {
        width: "70px",
		height: "70px",
        marginRight: theme.spacing(1.2),
		"&.selected": {
			filter: "invert(100%) sepia(0) saturate(0) hue-rotate(1deg) brightness(200%) contrast(102%)",
        },
    },
	 
	swiperSlide: {
		justifyContent: "start",
		[theme.breakpoints.down("sm")]: {
			justifyContent: "center",
		},
	},

}));
