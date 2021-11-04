import React, { useState, useEffect } from "react";
import { Box, Divider, Hidden } from "@material-ui/core";
import { CardCarousels } from "../../components/CardCarousel/CardCarousels";
// import { Benefits } from "./components/Benefits";
import { Feedback } from "./components/Feedback";
import { HomeBanner } from "./components/HomeBanner";
import { NewHomeBanner } from "./components/NewHomeBanner";
import { OurServices } from "./components/OurServices";
import { ContactBanner } from "../../components/ContactBanner";
import { makeStyles } from "@material-ui/styles";

// new Components
import { Benefits } from "../Home/newcomponent/Benefits";
import { TogglePhotoMAp } from "./newcomponent/TogglePhotoMAp";
import { FormDataContext } from "../../Context/Context";
import { RentCarousel } from "./newcomponent/RentNowCarusel/rentCarousel";
import "./Home.css";
import { CardFooter } from "./newcomponent/CardFooter";
import { Suggestion } from "./newcomponent/Suggestion";
import { SmallBanner } from "./newcomponent/SmallBanner";
import { BenefitsCarusels } from "./newcomponent/benifitsCarousels/BenefitsCarusels";

let xyz = [{ id: "", name: "", slideNo: 0 }];

export const FormContextProvide = (props) => {
	return (
		<FormDataContext.Provider value={xyz}>
			{props.children}
		</FormDataContext.Provider>
	);
};

export const Home = ({ setShowHeader, setHeaderColor }) => {
	const [selectedSearch, setSelectedSearch] = useState(2);

	const classes = useStyles();

	useEffect(() => {
		xyz = [{ id: "", name: "", slideNo: 0 }];
	}, []);

	const handleSelectedChange = (e) => {
		setSelectedSearch(e.id);

		xyz = { id: e.id, name: e.name, slideNo: 1 };
	};

	setShowHeader(true);
	setHeaderColor("transparent");
	return (
		<>
			<div>
				<NewHomeBanner
					selectedSearch={selectedSearch}
					handleSelectedChange={handleSelectedChange}
				/>
			</div>
			<Box component="section">
				<OurServices />
			</Box>
			<div component="section">
				<RentCarousel />
			</div>
			<Box component="section">
				<SmallBanner />
			</Box>
			<div component="section">
				<BenefitsCarusels />
			</div>
			<Box component="section">
				<Feedback />
			</Box>
			<ContactBanner full zeroPaddingInline />
			{/* <Hidden smDown>
                <CardFooter
                    selectedSearch={selectedSearch}
                    handleSelectedChange={handleSelectedChange}
                />
            </Hidden> */}

			{/* <Box component="section">
                <TogglePhotoMAp />
            </Box>
            <Box component="section">
                <Benefits />
            </Box>
            <Box
                component="section"
                className={`${classes.colorLightBlue} ${classes.sizeSection}`}
            >
                <Suggestion />
                <SmallBanner />
            </Box>
            <Box component="section">
                <Feedback />
            </Box>
            <Box component="section">
                <OurServices />
            </Box>
            <ContactBanner full zeroPaddingInline />
            <Hidden smDown>
                <CardFooter
                    selectedSearch={selectedSearch}
                    handleSelectedChange={handleSelectedChange}
                />
            </Hidden> */}
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	colorLightBlue: {
		background: "#f2f9fe",
	},
	sizeSection: {
		minHeight: "776px",
	},
	box: {
		width: "440px",
		height: "440px",
		background: "#1992EE",
		position: "absolute",
		zIndex: "-1",
		top: 0,
		right: 0,
		opacity: 0.3,
	},
}));
