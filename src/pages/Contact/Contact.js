import React, { useState, useContext, useEffect } from "react";
import {
	Grid,
	makeStyles,
	Typography,
	Button,
	Hidden,
	Card,
	CardContent,
	Container,
	LinearProgress,
} from "@material-ui/core";
import { ArrowBackIosRounded, Phone } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { ContactFormDetails } from "./component/ContactFormDetails";
import { ContactFrom } from "./component/ContactFrom";
import useWindowSize from "../../WindowSize";
import { FormDataContext } from "../../Context/Context";
import ShortHeader from "../../components/Header/ShortHeader";
import NewTopHeader from "../../components/Header/NewTopHeader";
import { Alert } from "@mui/material";

export const Contact = ({
	setShowHeader,
	setHeaderColor,
	headercolor,
	headerContext,
	setHeaderContext,
}) => {
	const Data = useContext(FormDataContext);
	// const [headerContext, setheaderContext] = useState({
	// 	id: "",
	// 	name: "",
	// 	slideNo: "",
	// });
	const [slideNo, setSlideNo] = useState(
		headerContext.slideNo === "" ? Data.slideNo : headerContext.slideNo
	);
console.log(' slide number',slideNo)

	const [currentSlide, setCurrentSlide] = useState(1);
	const [width] = useWindowSize();
	setShowHeader(false);
	setHeaderColor("transparent");
	const classes = useStyles();

	const FormData = {
		startDate: "",
		duration: {label : "1 week" , value : 1},
		type: headerContext ? headerContext.name : Data.name || "Business",
		typeId: headerContext ? headerContext.id : Data.id || 1,
		size: {label : "25sqft" , value : 7.99},
		email: "",
		nameTitle: "Mr ",
		name: "Name",
		subname: "subname",
		phone: "",
		// slideNo: Data.slideNo,
	};

	const [contactInfo, setContactInfo] = useState(FormData);

	const [formSubmited, setFormSubmited] = useState(false);

	const history = useHistory();

	const handleClick = () => {
		alert('koksab')
		setSlideNo(1);
		// history.push("/");
	};
	// setHeaderContext((prevState) => ({
	// 	...prevState,
	// 	id: 1,
	// 	name: "asd",
	// 	slideNo: 1,
	// }));
	return (
		<>
			<Grid container zeroMinWidth={true} className={classes.root}>
				<Grid item xs={12} md={12} lg={9}>
					<NewTopHeader
						hideQuoteButton
						headercolor={"white"}
						setHeaderContext={setHeaderContext}
					/>
					<Grid className={classes.leftSide}>
						{formSubmited == true ? (
							<ContactFormDetails contactInfo={contactInfo} />
						) : (
							<>
								<Typography
										variant="h4"
										style={{fontSize: width < 600 ? 16 : 30}}
									className={classes.leftSideHeadingText}
									color="primary"
									// paragraph
								>
									Get a quote
								</Typography>
								<Typography style={{fontSize: width < 600 ? 10 : 14}} color="textSecondary" >
									Please complete the information form to receive your personalised quote
								</Typography>
								<Grid
									container
									spacing={1}
									disableGutters
									direction="row"
									className={classes.progressBarRoot}
								>
									{progressBar.map((item, key) => {
										return (
											<Grid item>
												<p
													className={`${
														classes.progressBar
													} ${
														key <=
															currentSlide - 1 &&
														"selected"
													} `}
												></p>
											</Grid>
										);
									})}
								</Grid>
								<ContactFrom
									contactInfo={contactInfo}
									setContactInfo={setContactInfo}
									setFormSubmited={setFormSubmited}
									typeId={Data.id}
									slideNo={slideNo}
									setCurrentSlide={setCurrentSlide}
									/>
									
							</>
						)}
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item xs={12} md={3} className={classes.rightSide}>
						<Typography
							variant="h4"
							className={classes.rightSideHeadingText}
							gutterBottom
						>
						 Contact one of our expert today
						</Typography>
						<Typography
							variant="subtitle1"
							color="secondary"
							className={classes.rightSideParaText}
							paragraph
						>
							Speak to our agent and, we will be able to guide you
							along the process.
						</Typography>
						<Button
							variant="outlined"
							startIcon={<Phone />}
							className={classes.rightSideBtn}
						>
							<a href='tel:01733306456' className={classes.dialer}>
							01733306456
							</a>
						</Button>
					</Grid>
				</Hidden>
			</Grid>
		</>
	);
};

const progressBar = ["", "", "", "", ""];

// Styling

const useStyles = makeStyles((theme) => ({
	root: {
		height: `100vh`,
		paddingBlock: 0,
	},
	dialer: {
		textDecoration: 'none',
		color:'#064D7B',
	},
	rightSide: {
		backgroundColor: theme.palette.primary.main,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "start",
		paddingInline: "3rem",
		paddingBlock: "2rem",
	},
	rightSideHeadingText: {
		fontWeight: "900",
		color: "#ffffff",
		fontSize: theme.spacing(3.5),
	},
	rightSideParaText: {
		fontWeight: "600",
		color: "#ffffff",
	},
	rightSideBtn: {
		backgroundColor: "#ffffff",
		color: theme.palette.primary.main,
		padding: "0.5rem 1.5rem",
		borderRadius: theme.spacing(1),
		"&:hover": {
			backgroundColor: "#ffffff",
			color: theme.palette.primary.main,
		},
	},
	leftSide: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "start",
		paddingLeft: "5vw",
		paddingRight: "5vw",
		paddingTop: "0.25rem",
		// marginTop: theme.spacing(3.75),
		// [theme.breakpoints.down("sm")]: {
		// 	paddingInline: "10px",
		// 	paddingTop: "0.5rem",
		// },
	},
	leftSideHeadingText: {
		fontWeight: "900",
		
	},
	detailedGridContainer: {
		paddingInline: "1.5rem",
	},
	backButton: {
		marginBottom: theme.spacing(1),
	},
	progressBarRoot: {
		// padding: theme.spacing(0),
		paddingTop: 10,
		paddingBottom:0,
	},
	progressBar: {
		width: "30px",
		height: "6px",
		borderRadius: "2px",
		border: "1px solid",
		// backgroundColor: theme.palette.primary.main,
		"&.selected": {
			backgroundColor: theme.palette.primary.main,
			borderColor: theme.palette.primary.main,
		},
	},
}));
