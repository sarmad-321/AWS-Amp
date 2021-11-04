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
import Logo from "../../assets/Icons/headerLogo.svg";
import { Phone } from "@material-ui/icons";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { border, borderRadius } from "@material-ui/system";

export default function ShortHeader() {
	const {
		header,
		logo,
		rightSideBtn,
		headerSideBtn,
		menuButton,
		toolbar,
		drawerContainer,
		appBar,
		flex,
		menuItemsMId,
		topSmallBanner,
		topSmallBannerIcon,
		dash,
	} = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;
	const [active, setActive] = useState();

	const history = useHistory();
	const location = useLocation();

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

	const displayDesktop = () => {
		return (
			<Container style={{ zIndex: 4 }}>
				<Toolbar className={toolbar} disableGutters>
					<Grid container alignItems="center">
						<Grid item xs={2} lg={2}>
							{femmecubatorLogo}
						</Grid>
						<Grid item xs={8} lg={8} className={menuItemsMId}>
							<div className={dash}>{getMenuButtons()}</div>
						</Grid>
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
					{/* <ul className={drawerContainer}>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul> */}
					<div className={drawerContainer}>{getDrawerChoices()}</div>
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
						color: "inherit",
						style: { textDecoration: "none" },
						key: label,
					}}
				>
					<MenuItem>{label}</MenuItem>
				</Link>
			);
		});
	};
	// logo for header
	const femmecubatorLogo = (
		<img
			src={Logo}
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
			// console.log(active);
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
				className={header}
				position="static"
				elevation={0}
				className={appBar}
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
	{
		label: "Parking",
		href: "/parking",
	},
	{
		label: "Contact us",
		href: "/parking",
	},
];

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: "transparent",
		height: "64px",
		// paddingRight: "79px",
		// paddingLeft: "118px",
		color: theme.palette.primary.main,
		"@media (max-width: 1140px)": {
			// paddingLeft: 0,
			// paddingRight: 0,
		},
	},
	appBar: {
		background: "transparent",
		color: theme.palette.primary.main,
	},
	logo: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: "#FFFEFE",
		textAlign: "left",
	},
	menuButton: {
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		size: "18px",
		// marginLeft: "38px",
		color: "white",
		borderRadius: "0px",
		padding: "6px 0px",
		width: "20%",
		color: theme.palette.primary.main,
		"&:hover": {
			background: "#FFD300",
			color: theme.palette.primary.main,
			borderRadius: "3px 3px 0 0",
		},
		"&.active": {
			background: "#FFD300",
			color: "#064D7B",
			borderRadius: "3px 3px 0 0",
		},
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
	},
	drawerContainer: {
		padding: "40px 30px",
		// background: 'red',
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
		borderBottom: "1px solid #FFD300",
		width: "635px",
		// background:'red'
	},
	menuItemsMId: {
		paddingLeft: "22px",
	},
}));
