import React, { useState } from "react";
import {
	makeStyles,
	Typography,
	OutlinedInput,
	Grid,
	Button,
	TextField,
} from "@material-ui/core";
import "./PromotionOffer.css";

const promotionTypeData = [
	{
		id: 1,
		type: "House",
		value : 1
	},
	{
		id: 2,
		type: "Bungalow",
		value : 4
	},
	{
		id: 3,
		type: "Flat",
		value : 8
	},
	
];

export const PromotionOffer = ({ contactInfo, setContactInfo }) => {
	const [selected, setSelected] = useState(promotionTypeData[0]);
	const [startDate, setStartDate] = useState(false);
	const classes = useStyles();

	const handleChange = (prop) => (event) => {
		setContactInfo({ ...contactInfo, [prop]: event.target.value });
	};

	const handleClick = (props) => {
		setSelected(props);
		setContactInfo({ ...contactInfo, ["duration"]: {label : props.type , value : props.value} });
	};
	return (
		<Grid container direction="column" className={classes.root} spacing={1}>
			<Grid item className={classes.gridItem}>
				<Typography
					variant="h6"
					color="primary"
					className={classes.headingText}
					gutterBottom
				>
					Property Address
				</Typography>
			
				<div className={classes.promotioninput}>
				<Grid container>
					<TextField
						id="outlined-basic"
						type="text"
						placeholder="Property Address"
						variant="outlined"
						onChange={handleChange("startDate")}
						required
					/>
				</Grid>

				</div>
			</Grid>
			<Grid item className={classes.gridItem}>
				<Typography
					variant="h6"
					color="primary"
					gutterBottom
					className={classes.headingText}
				>
					Property Type
				</Typography>
				{promotionTypeData.map((data, key) => {
					return (
						<>
							<Button
								className={`${classes.callenderButton} ${
									selected.id == data.id ? "selected" : ""
								}`}
								variant="outlined"
								onClick={() => handleClick(data)}
							>
								{data.type}
							</Button>
						</>
					);
				})}
			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		alignItems: "start",
		justifyContent: "start",
	},
	contactButton: {
		padding: "0.3rem 1.5rem",
		color: "#3E3A00",
		fontSize: "0.65rem",
		borderBottomRightRadius: "5px",
		borderTopRightRadius: "5px",
		borderTopLeftRadius: "0",
		borderBottomLeftRadius: "0",
		marginBottom: "2px",
		height: theme.spacing(5),
		"&.selected": {
			boxShadow: "none",
			backgroundColor: theme.palette.primary.main,
			borderColor: "#064D7B",
			color: "#ffffff",
		},
		["@media (max-width : 340px)"]: {
			padding: "0.3rem 1rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginBottom: 0,
		},
	},
	promotioninput: {
		textAlign: "left",
		display: "flex",
	},
	headingText: {
		textAlign: "left",
	},
	callenderButton: {
		marginBottom: theme.spacing(2),
		marginRight: theme.spacing(2),
		width: "120px",
		"&.selected": {
			boxShadow: "none",
			backgroundColor: theme.palette.primary.main,
			borderColor: "#064D7B",
			color: "#ffffff",
		},
	},
	gridItem: {
		marginBottom: theme.spacing(3.75),
		maxWidth: "420px",
		textAlign: "left",
		[theme.breakpoints.only("xs")]: {
			marginBottom: 0,
		},
	},
	datePicker: {
		minWidth: "200px",
	},
	textField: {
		width: 200,
		height: theme.spacing(5),
		borderBottomRightRadius: "0",
		borderTopRightRadius: "0",
		borderTopLeftRadius: "5px",
		borderBottomLeftRadius: "5px",
		["@media (max-width : 340px)"]: {
			width: 170,
		},
	},
}));
