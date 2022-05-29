import React, { useState } from "react";
import "./RequiredSize.css";

import {
	makeStyles,
	Typography,
	Card,
	CardContent,
	Grid,
	Button,
} from "@material-ui/core";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import { SizeCarousel } from "./carousel/SizeCarousel";
import { OurServices } from "../../../Home/components/OurServices";
import { RentCarousel } from "../../../Home/newcomponent/RentNowCarusel/rentCarousel";
import { RentCarouselShort } from "../../../Home/newcomponent/RentNowCarusel/RentCarouselShort";
import { SizeSearchBar } from "../../../../components/SizeSearchBar";
import useWindowSize from "../../../../WindowSize";

export const RequiredSize = ({ contactInfo, setContactInfo }) => {
	const classes = useStyles();
	const [selected, setSelected] = useState(0);
const [width] = useWindowSize();
	return (
		<Grid container   style={{padding : width < 600 && 5 , }} direction="column" alignItems="flex-start">
			<Grid item>
				<Typography  style={{fontSize : width < 600 && 17 , }} variant="h6" color="primary">
					What’s your required service?
				</Typography>
			</Grid>
			<Grid container className={classes.requiresSizeContent}>
				<SizeSearchBar selected={selected} setSelected={setSelected} />
				<RentCarouselShort
					selected={selected}
					setSelected={setSelected}
					setContactInfo={setContactInfo}
					contactInfo={contactInfo}
				/>
			</Grid>
			{/* <Grid container disableGutter={true}>
				<SizeCarousel
					contactInfo={contactInfo}
					setContactInfo={setContactInfo}
				/>
			</Grid> */}
		</Grid>
	);
};

const useStyles = makeStyles((theme) => ({
	requiresSizeContent: {
		maxWidth: "836px",
		marginLeft: "2px",
	},
}));
