import React from "react";
// Common components
import {
	Container,
	Grid,
	Card,
	CardContent,
	makeStyles,
	Typography,
	Button,
	Avatar,
} from "@material-ui/core";
import Box from "../../../assets/images/box.png";
import Short from "../images/1.svg";
import Large from "../images/2.svg";
import Medium from "../images/3.svg";
import Podlock from "../images/4.svg";
import BlackWrap from "../images/5.svg";
import BubbleWrap from "../images/6.svg";
import XLarge from "../images/7.svg";
import Tape from "../images/8.svg";
import ArchieveBox from "../images/9.svg";
export const Products = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="lg">
			{dataTypes.map((item, key) => {
				return (
					<>
						<Grid
							key={key}
							container
							className={classes.headingContainer}
						>
							<h3
								className={`${classes.headingLineBefore} border1`}
							>
								<span>{item.name}</span>
							</h3>
						</Grid>
						<Grid
							key={key}
							container
							spacing={4}
							justify="center"
							className={classes.root}
						>
							{item.data.map((product, key) => {
								return (
									<Grid item key={key}>
										<Card
											className={classes.cardRoot}
											elevation={0}
										>
											<CardContent
												className={classes.cardContent}
											>
												<Grid
													container
													direction="column"
													alignItems="center"
												>
													<img
														variant="square"
														className={
															classes.cardImage
														}
														src={product.image}
														alt={product.name}
													/>
													<Typography
														variant="h5"
														className={
															classes.cardHeading
														}
														color="primary"
													>
														{product.name}
													</Typography>
													<Typography
														variant="h6"
														className={classes.type}
														color="primary"
													>
														{product.type}
													</Typography>
													<Typography
														variant="h6"
														className={
															classes.cardHeading
														}
														color="textSecondary"
													>
														{product.price}
													</Typography>
												</Grid>
												{product.bestSeller ===
													true && (
													<Typography
														className={`${classes.topLeft} ${classes.topLeftContent}`}
													>
														Best Seller
													</Typography>
												)}
												<Button
													variant="outlined"
													color="secondary"
													className={`${classes.bottomRight} `}
												>
													<a href='tel:07580902000' className={classes.dialer}> 
													Call Now
													</a>
												</Button>
											</CardContent>
										</Card>
									</Grid>
								);
							})}
						</Grid>
					</>
				);
			})}
		</Container>
	);
};
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	dialer: {
		textDecoration: 'none',
		color: '#064D7B',
		"&:hover": {
			color:'white'
		},
	},
	cardRoot: {
		minWidth: "280px",
		"@media (max-width: 300px)": {
			minWidth: "100%",
		},
	},
	cardContent: {
		backgroundColor: "#F4F8FE",
		width: "332px",
		height: "360px",
		position: "relative",
		paddingInline: theme.spacing(2),
		paddingBlock: theme.spacing(6),
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			paddingInline: theme.spacing(1),
			paddingBlock: theme.spacing(3),
		},
	},
	topLeft: {
		position: "absolute",
		top: 0,
		left: 0,
		borderRadius: "5px 0px 0px 0px",
		letterSpacing: "2.4px",
		textTransform: "uppercase",
	},
	topLeftContent: {
		backgroundColor: "#E2B240",
		color: "white",
		paddingInline: theme.spacing(2),
		paddingBlock: theme.spacing(1),
	},
	bottomRight: {
		position: "absolute",
		bottom: 0,
		right: 0,
		borderRadius: "0px 0px 5px 0px",
		letterSpacing: "2.4px",
		textTransform: "uppercase",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.secondary.contrastText,
		},
	},
	cardHeading: {
		fontWeight: "bold",
	},
	cardImage: {
		width: "160px",
		height: "160px",
		objectFit: "contain",
	},
	type: {
		fontSize: theme.spacing(1.5),
	},
	headingLineBefore: {
		textAlign: "center",
		width: "100%",
		lineHeight: "0.1em",
		margin: "10px 0 20px",
		color: theme.palette.primary.main,
		fontSize: "38px",
		"&.border1": {
			borderBottom: "1px solid #707070",
			"@media (max-width: 350px)": {
				borderBottom: 0,
			},
		},
		"&.border3": {
			borderBottom: "3px solid #707070",
			"@media (max-width: 350px)": {
				borderBottom: 0,
			},
		},
		"& span": {
			background: "#fff",
			padding: "0 20px",
		},
	},
	headingContainer: {
		maxWidth: "1060px",
		margin: "auto",
	},
}));
const IndBoxData = [
	{
		name: "Short box",
		type: "457mm x 457mm x 254mm",
		price: "£2.49",
		image: Short,
		bestSeller: false
	},
	{
		name: "Medium box",
		type: "457mm x 330mm x 330mm",
		price: "£2.79",
		image: Medium,
		bestSeller: true,
	},
	{
		name: "Large box",
		type: "457mm x 457mm x 508mm",
		price: "£3.49 ",
		image: Large,
		bestSeller: true,
	},
	{
		name: "Extra large box ",
		type: "610mm x 610mm x 610mm",
		price: "£4.49",
		image: XLarge,
		bestSeller: false,
	},
	{
		name: "Archive box with lid ",
		type: "406mm x 331mm x 318mm",
		price: "£2.99",
		image: ArchieveBox,
		bestSeller: false,
	},
];
const bundleBoxData = [
	{
		name: "10 x Medium boxes",
		type: "(10% discount)",
		price: "£25.11",
		image: Medium,
		bestSeller: true,
	},
	{
		name: "10 x Large boxes",
		type: "(10% discount)",
		price: "£31.41",
		image: Large,
		bestSeller: false,
	},
	{
		name: "10 x Extra large box ",
		type: "(10% discount)",
		price: "£44.91",
		image: XLarge,
		bestSeller: false,
	},
];
const bubbleWrapData = [
	{
		name: "Bubble wrap 5 metres",
		type: "500mm width",
		price: "£2.99",
		image: BubbleWrap,
		bestSeller: false,
	},
	{
		name: "Bubble wrap 10 metres",
		type: "500mm width",
		price: "£4.99",
		image: BubbleWrap,
		bestSeller: false,
	},
	{
		name: "Bubble wrap 25 metres",
		type: "500mm width",
		price: "£9.99",
		image: BubbleWrap,
		bestSeller: true,
	},
	{
		name: "Bubble wrap 50 metres",
		type: "500mm width",
		price: "£18.99",
		image: BubbleWrap,
		bestSeller: false,
	},
];
const othersData = [
	{
		name: "Parcel tape ",
		type: "50mm x 66 metres",
		price: "£1.89",
		image: Tape,
		bestSeller: false,
	},
	{
		name: "Shrink wrap ",
		type: "400mm x 300 metres",
		price: "£5.99",
		image: BlackWrap,
		bestSeller: false,
	},
];
const dataTypes = [
	{
		name: "Cardboard Boxes",
		data: IndBoxData,
	},
	{
		name: "Box bundles",
		data: bundleBoxData,
	},
	{
		name: "Bubble Wrap",
		data: bubbleWrapData,
	},
	{
		name: "Extra accessories",
		data: othersData,
	},
];
