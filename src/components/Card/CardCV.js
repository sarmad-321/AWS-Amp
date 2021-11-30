import {
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
    Grid
} from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ViewWeek } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "198px",
        height: "289px",
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
        justifyContent: "space-between",
        padding: '1rem',
        background: (props) => props.bgColor,
        color: "#064D7B",
        borderColor: "#12356A",
        boxShadow:'0px 3px 8px #00000026'
    },
    cardContent: {
        paddingLeft: theme.spacing(0),
        paddingBlock: 0,
        paddingRight: 0,
    },
    cardButton: {},
    title: {
        fontSize: '20px',
        color:'#064D7B',
        fontWeight: "bold",
        ["@media (max-width: 1182px) and (min-width: 964px)"]: {
            fontSize: 17,
        },
        ["@media (max-width: 600px) and (min-width: 0px)"]: {
            fontSize: 17,
        },
        marginTop:'1rem',
    },
    topTitle: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#064D7B",
    },
    pos: {
        fontSize: "12px",
         ["@media (max-width: 1182px) and (min-width: 964px)"]: {
            fontSize: 12,
        },
    },
    cardButton: {
        padding: 0,
    },
    cardButtonText: {
        padding:0,
        color: "#064D7B",
        fontSize: 14,
        textTransform: 'revert',
    },
    cardButtonIcon: {
        fontWeight: "bold",
    },
    icon: {
        padding: '6px 0px'
    },
    xsIcon: {
        width: '60vw',
        height: '70vw'
    },
    xsBody: {
        borderRadius: 5,
        border: '1px solid #064D7B',
        
    },
    xsFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    xsText: {
        padding: '0 17px',
    }
}));


export const CardCV = (props) => {
    const { height, width } = useWindowDimensions();

   const history = useHistory();
   const classes = useStyles(props);
   const handleButton = (href, label) => {
       console.log('sdsddfsd')
			
			history.push(href);
		};
			
			
		
    return (
        <>
            
             {
       width < 600 ? <Grid container xs={12}  className={classes.xsBody}>
            <Grid item xs={4} className={classes.xsFlex}>
                <img
                    src={props.img}
                      className={classes.xsicon}
                    />
            </Grid>
            <Grid item xs={8} className={classes.xsText}>
                <Typography
                    className={classes.title}
                    variant="h5"
                    component="h2"
                    gutterBottom
        >
                    {props.children}
                </Typography>
                <Typography className={classes.pos}>
                    {props.bottomTitle}
                </Typography>
                <Button
                    size="small"
                    className={classes.cardButtonText}
                    endIcon={
                        <ArrowForwardIcon className={classes.cardButtonIcon} />
                    }
                >
                    {props.buttonText}
                </Button>
            </Grid>
        </Grid>
:
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.cardContent}>
                <Typography className={classes.topTitle}>
                    {props.topTitle}
                </Typography>
                <img
                    src={props.img}
                      className={classes.icon}
                />
                <Typography
                    className={classes.title}
                    style={{marginTop: props.marginTop}}
                    variant="h5"
                    component="h2"
                    gutterBottom
                >
                    {props.children}
                </Typography>
                <Typography className={classes.pos}>
                    {props.bottomTitle}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardButton}>
                <Button
                    onClick={() => {history.push(props.href)}}
                    size="small"
                    className={classes.cardButtonText}
                    endIcon={
                        <ArrowForwardIcon className={classes.cardButtonIcon} />
                    }
                >
                    {props.buttonText}
                </Button>
            </CardActions>
        </Card>  } 
    </>
    );
};
