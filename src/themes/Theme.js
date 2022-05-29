import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0f833a",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#064D7B",
            contrastText: "#FFD300",
        },
        info: {
            main: "#3D3A00",
        },
        text: {
            secondary: "#3E3A00",
        },
    },
    typography: {
        fontFamily: "Inter",
        fontWeightLight: "300",
        fontWeightRegular: "400",
        fontWeightMedium: "600",
        fontWeightBold: "bold",
        h2: {
            fontSize: "43px",
            fontWeight: "900",
            paddingBlock: "1rem",
        },
    },
});

theme.overrides = {
    MuiContainer: {
        paddingLeft: 160,
        maxWidthLg: {
            [theme.breakpoints.up("lg")]: {
                maxWidth: "1323px",
            },
        },
    },
    MuiBox: {
        root: {
            [theme.breakpoints.up("lg")]: {
                padding: "2rem",
            },
        },
    },
    MuiButton: {
        root: {
            textTransform: "none",
        },
    },
};
