import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	MenuItem,
	Container,
	Grid,
	Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import LogoBlue   from "../../assets/Icons/logoDark.png";
import Logo from "../../assets/Icons/logoLight.png";
import { Phone } from "@material-ui/icons";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { border, borderRadius } from "@material-ui/system";
import "./Header.css";

import ClearIcon from '@material-ui/icons/Clear';
import { mergeClasses } from "@material-ui/styles";
import  reviewLight from "../../assets/Icons/reviewLeft.svg"
import  review from "../../assets/Icons/reviewLeftLight.svg"
export default function NewTopHeader({
	headercolor,
	hideQuoteButton,
	setHeaderContext,
	headerContext,
}) {
	const {
		header,
		menuItems,
		logo,
		rightSideBtn,
		headerSideBtn,
		menuButton,
		toolbar,
		drawerContainer,
		appBar,
		drawerCross,
		flex,
		menuItemsMId,
		topSmallBanner,
		topSmallBannerIcon,
		dash,
		paper,
	} = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});
	const history = useHistory();
	const location = useLocation();
	const [selectedSearch, setSelectedSearch] = useState();

	// const handleSelectedChange = (e) => {
	// 	setSelectedSearch(e.id);

	// 	xyz = { id: e.id, name: e.name, slideNo: 1 };
	// };

	const labe = headersData.find((e) => e.href === location.pathname);
	const [active, setActive] = useState(labe ? labe.label : null);
	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 1089
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({
						...prevState,
						mobileView: false,
				  }));
		};

		setResponsiveness();

		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);

	const displayDesktop = (handleSelectedChange) => {
		return (
			<Container className='hello' style={{ zIndex: 4 }}>
				<Toolbar className={toolbar} disableGutters>
					<Grid container alignItems="center">
						<Grid item xs={2} lg={2}>
							{femmecubatorLogo}
						</Grid>
						<Grid item xs={8} lg={8} className={menuItemsMId}>
							<div className={dash}>{getMenuButtons()}</div>
						</Grid>
						{!hideQuoteButton && (
							<Grid item xs={2} lg={2} className={flex}>
								<img src={headercolor === "white" ? review : reviewLight} alt="" />
								{/* <Button
									startIcon={<Phone />}
									className={headerSideBtn}
									onClick={() => {history.push("/quote");}}
								>
									GET A QUOTE
								</Button> */}
							</Grid>
						)}
					</Grid>
				</Toolbar>
			</Container>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar className={toolbar}>
				<div>{femmecubatorLogo}</div>
				<IconButton
					{...{
						edge: "start",
						color: "white",
						"aria-label": "menu",
						"aria-haspopup": "true",
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon style={{ fill: "#FFD300" }} />
				</IconButton>

				<Drawer
					{...{
						anchor: "right",
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
				
					<div className={drawerContainer}>
						<div className={drawerCross} onClick={handleDrawerClose}><ClearIcon style={{color:'white'}}/></div>
						{getDrawerChoices()}
					</div>
				</Drawer>
			</Toolbar>
		);
	};

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						// component: RouterLink,
						to: href,
						style: { textDecoration: "none", color: "white" },
						key: label,
					}}
				>
					<MenuItem className={menuItems}>{label}</MenuItem>
				</Link>
			);
		});
	};
	// logo for header
	const femmecubatorLogo = (
		<img
			src={headercolor === "white" ? LogoBlue : Logo}
			style={{ width: "124.92px", height: "54.38px", cursor: "pointer" }}
			alt="Ivett Storage"
			onClick={() => {
				setActive(null);
				history.push("/");
			}}
		/>
	);

	const getMenuButtons = () => {
		const handleButton = (href, label) => {
			setActive(label);
			const data = headersData.find((e) => e.label === label);
			// console.log(data.label);
			// if (data.label === "Domestic" || data.label === "Business") {
			// 	if (data.label === "Domestic") {
			// 		setHeaderContext((prevState) => ({
			// 			...prevState,
			// 			id: 1,
			// 			name: "Domestic",
			// 			slideNo: 1,
			// 		}));
			// 	} else {
			// 		setHeaderContext((prevState) => ({
			// 			...prevState,
			// 			id: 2,
			// 			name: "Business",
			// 			slideNo: 1,
			// 		}));
			// 	}
			// }
			history.push(href);
		};
		return headersData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						// color: "inherit",
						to: href,
						// component: RouterLink,
					}}
					className={`${menuButton} ${
						active === label && "active"
					} menu-button`}
					disableRipple={true}
					onClick={() => handleButton(href, label)}
				>
					{label}
				</Button>
			);
		});
	};

	return (
		<header>
			<AppBar
				className={` header bg-${headercolor}`}
				position="static"
				elevation={0}
				// className={appBar}
			>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}

const headersData = [
	{
		label: "Domestic",
		href: "/quote",
	},
	{
		label: "Business",
		href: "/quote",
	},
	{
		label: "Box Shop",
		href: "/materials",
	},
	// {
	// 	label: "Removals",
	// 	href: "/parking",
	// },
	{
		label: "Contact us",
		href: "/officeContact",
	},
];

const useStyles = makeStyles((theme) => ({
	header: {
		// backgroundColor: "transparent",
		// paddingRight: "79px",
		// paddingLeft: "118px",
		// color: theme.palette.primary.main,
		"@media (max-width: 1140px)": {
			// paddingLeft: 0,
			// paddingRight: 0,
		},
	},
	appBar: {
		// background: "transparent",
		color: theme.palette.primary.main,
	},
	MuiDrawerPaper: {
		background: "red",
	},
	menuItems: {
		paddingLeft: 0,
		"&:hover": {
			borderBottom: "1px solid #FFE04A",
		},
	},
	logo: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: "#FFFEFE",
		textAlign: "left",
	},
	menuButton: {
		"&:hover": {
			background: "#FFD300",
			color: "#064D7B",
			borderRadius: "3px 3px 0 0",
		},
		"&.active": {
			background: "#FFD300",
			color: "#064D7B",
			borderRadius: "3px 3px 0 0",
		},
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		size: "18px",
		// marginLeft: "38px",
		color: "white",
		borderRadius: "0px",
		borderBottom: "1px solid #FFD300",
		padding: "6px 0px",
		width: "20%",
	},
	headerSideBtn: {
		backgroundColor: "#FFD300",
		color: "#064D7B",
		padding: "0.5rem 1.5rem",
		borderRadius: theme.spacing(1),
		"&:hover": {
			background: "white",
			color: "#064D7B",
		},
	},
	toolbar: {
		zIndex: 4,
		display: "flex",
		justifyContent: "space-between",
		[theme.breakpoints.up("lg")]: {
			padding: " 0px 44px",
		},
		paper: {
			background: "blue",
		},
	},
	drawerContainer: {
		padding: ' 10px 12px 8px 18px',
		background: " #142535",
		height: "100%",
		
		// background: 'red',
	},
	drawerCross: {
		display: 'flex',
    justifyContent: 'flex-end',
	},
	topSmallBanner: {
		background: theme.palette.secondary.main,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "45px",
		color: "#fff",
	},
	topSmallBannerIcon: {
		marginLeft: theme.spacing(2),
	},
	flex: {
		display: "flex",
		justifyContent: "flex-start",
	},
	dash: {
		width: "635px",
		// background:'red'
	},
	menuItemsMId: {
		paddingLeft: "22px",
	},
}));
