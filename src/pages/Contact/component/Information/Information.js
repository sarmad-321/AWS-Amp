import React, { useState } from "react";
import {
	makeStyles,
	Typography,
	
	Button,
	TextField,
	withStyles,
	NativeSelect,
} from "@material-ui/core";
import { ButtonCV } from "../../../../components/Button/ButtonCV";
import Grid from '@mui/material/Grid';
import InputBase from "@material-ui/core/InputBase";
import useWindowSize from "../../../../WindowSize";
import "./Information.css";

// Data

const informationData = [
	{
		id: 1,
		beforeName: "Mr",
	},
	{
		id: 2,
		beforeName: "Mrs",
	},
	{
		id: 3,
		beforeName: "Miss",
	},
	{
		id: 4,
		beforeName: "Ms",
	},
	{
		id: 5,
		beforeName: "Other",
	},
];

export const Information = ({ contactInfo, setContactInfo }) => {
	// style
	const classes = useStyles();

	const [selected, setSelected] = useState(1);
    const [width] = useWindowSize();
	const handleChange = (props) => (event) => {
		setContactInfo({ ...contactInfo, [props]: event.target.value });
	};

	const handleClick = (props) => {
		setSelected(props.id);
		setContactInfo({ ...contactInfo, ["nameTitle"]: props.beforeName });
	};

	return (
		<Grid
			container
			direction="column"
			alignItems="flex-start"
			className={classes.root}
		>
			<Grid item className={classes.gridItem}>
				<Typography variant="h6" color="primary" style={{lineHeight : '0.35em'}} align="left">
					Title
				</Typography>
				<Grid container  spacing={{ xs: 1, sm: 2, md: 3 }} >
					{informationData.map((info, key) => {
						return (
							<Grid item>
								<Button
									className={`${classes.callenderButton} ${
										selected == info.id ? "selected" : ""
									}`}
									variant="outlined"
									onClick={() => handleClick(info)}
								>
									{info.beforeName}
								</Button>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
			<Grid item style={{marginBottom: width < 600 ? 0 : 30}} className={classes.gridItem}>
				<Typography variant="h6" color="primary" style={{lineHeight : '0.35em'}} align="left">
					Name
				</Typography>

				
				<Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item>
						<TextField
							id="outlined-basic"
							label="Name"
							variant="outlined"
							color="primary"
							required
							onChange={handleChange("name")}
						/>
					</Grid>
					<Grid item>
						<TextField
							id="outlined-basic"
							required
							label="last name"
							variant="outlined"
							color="textSecondary"
							onChange={handleChange("subname")}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		paddingInline: theme.spacing(1),
	},
	callenderButton: {
		color: "#3E3A00",
		border: "1px solid #3E3A00",
		borderRadius: "3px",
		width: "120px",
		// marginRight: theme.spacing(2),
		textTransform: "none",
		"&.selected": {
			boxShadow: "none",
			backgroundColor: theme.palette.primary.main,
			borderColor: "#064D7B",
			color: "#ffffff",
		},
	},
	gridItem: {
		// marginBottom: theme.spacing(3.75),
	},
}));
