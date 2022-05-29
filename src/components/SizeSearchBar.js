import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import useWindowSize from "../WindowSize";
export const SizeSearchBar = ({ selected, setSelected }) => {
    const [width] = useWindowSize();
    const classes = useStyles();
    // const [selected, setSelected] = useState(1);
    const handleSelect = (item, key) => {
        setSelected(key);
    };
    return (
        <>
            {width > 986 ? (
                <Grid
                    container
                    alignContent={"center"}
                    className={classes.TopSearchBar}
                >
                    {data.map((size, key) => {
                        return (
                            <Button
                                key={key}
                                onClick={() => handleSelect(size, key)}
                                className={`${classes.topSearchBarItem} ${
                                    selected === size.id && "selected"
                                }`}
                                disableRipple={true}
                            >
                                {size.name}
                            </Button>
                        );
                    })}
                </Grid>
            ) : (
                <Grid container style={{padding: 0}} justify="center">
                    <ResponsiveSearchBar
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Grid>
            )}
        </>
    );
};
const ResponsiveSearchBar = ({ selected, setSelected }) => {
    const classes = useStyles();
    const handleChange = (e) => {
        setSelected(e.target.value);
    };
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selected}
                label="Size"
                onChange={(e) => handleChange(e)}
                inputProps={{
                    name: "age",
                    id: "age-simple",
                    classes: { paper: classes.inputdropdown },
                }}
                MenuProps={{ classes: { paper: classes.dropdownStyle } }}
            >
                <MenuItem value={0}>EPC</MenuItem>
                <MenuItem value={1}>SAP</MenuItem>
                <MenuItem value={2}>Air Pressure Test</MenuItem>
                <MenuItem value={3}>Sound Test</MenuItem>
            </Select>
        </FormControl>
    );
};
const useStyles = makeStyles((theme) => ({
    TopSearchBar: {
        width: "1000px",
        height: "46px",
        background: "#FFFFFF",
        filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.16))",
        padding: "03px",
        marginBottom: theme.spacing(3.75),
        position: "relative",
    },
    dropdownStyle: {
        borderRadius: "5%",
        maxHeight: "50%",
        overflow: "scroll",
        position: "absolute",
        // marginTop: "50px",
        "& ul": {},
        "& li": {
            color: "#064D7B",
            "&:focus": {
                backgroundColor: "#064D7B",
                color: "#FFFFFF",
            },
            "&:active": {
                backgroundColor: "black",
                color: "#FFFFFF",
            },
        },
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    topSearchBarItem: {
        fontFamily: "Helvetica",
        fontWeight: "normal",
        fontSize: "18px",
        textAlign: "left",
        color: "#064D7B",
        width: "180px",
        height: "40px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fill: "none",
        marginRight: theme.spacing(1.1),
        "&:hover": {
            background: "none",
        },
        "&.selected": {
            backgroundColor: "#FFD300",
        },
        "&:last-child": {
            marginRight: 0,
        },
    },
    requiresSizeContent: {
        maxWidth: "836px",
        marginLeft: "2px",
    },
    cardClass: {
        width: "180px",
        height: "210px",
        border: "1px solid #064D7B",
    },
    cardContent: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    formControl: {
        marginBottom: theme.spacing(3.75),
        width: "80%",
        "@media (max-width: 500px)": {
            marginBottom: theme.spacing(1),
        },
        "& .MuiOutlinedInput-input": {
           padding: '10px 15px' ,
        }
    },
}));
const data = [
    {
        id: 0,
        name: "EPC",
    },
    {
        id: 1,
        name: "SAP",
    },
    {
        id: 2,
        name: "Air Pressure Test",
    },
    {
        id: 3,
        name: "Sound Test",
    },
    
    
];