import { makeStyles, Typography , Grid,Button ,Container,} from "@material-ui/core";
import React from "react";
import { useState, useEffect } from 'react';
import building from "../../assets/images/building.svg";
// import google from "../../assets/images/google.png";
import { Link, useHistory } from "react-router-dom";

// import indoor from "../../../../assets/images/indoor.svg"
import addressMap from "../../assets/images/map.jpg"

import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import TextField from '@material-ui/core/TextField';
import { padding } from "@mui/system";
import { baseUrl } from "../../services/email";

const axios = require("axios");

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

// 

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



export const OfficeContact = (props) => {
  const history = useHistory();
  const classes = useStyles(props);
  const { height, width } = useWindowDimensions();
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [UserEmail, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  props.setHeaderColor('white')


  const setActive = (el, active) => {
    const formField = el.parentNode.parentNode;
    if (active) {
      formField.classList.add("form-field--is-active");
    } else {
      formField.classList.remove("form-field--is-active");
      el.value === ""
        ? formField.classList.remove("form-field--is-filled")
        : formField.classList.add("form-field--is-filled");
    }
  };

  [].forEach.call(
    document.querySelectorAll(".form-field__input, .form-field__textarea"),
    (el) => {
      el.onblur = () => {
        setActive(el, false);
      };
      el.onfocus = () => {
        setActive(el, true);
      };
    }
  );

  const handleCheckBox = () => {
    setChecked(!checked);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    let user_name = name;
    let email = UserEmail;
    let message = msg;

    alert("Sumbitted")

    axios
      .post( baseUrl +"/sendEmail", {
        user_name: user_name,
        email: email,
        message: message,
      })
      .then(function (response) {
        history.push("/");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleGoogleMap = () => {

  }
  return (
    <Container>
      <Grid container spacing={1} sm={12} md={12} lg={12} spacing-sm-2 className={classes.OfficeContainer}>
        
        {/* <Grid item className={classes.labelOn}>
          <Typography
                        variant=""
                        color="primary"
                        className={classes.servicePara}
                        paragraph
                    >
                        Our Office
            </Typography>
           <Typography
                            variant="h2"
                            color="primary"
                            className={classes.headingBold}
                        >
                            Write to tell us 
          </Typography>
          <Typography
                        variant=""
                        color="primary"
                        className={classes.servicePara}
                        paragraph
                    >
                        England
          </Typography>
        </Grid>
         */}
        
        <Grid container spacing={1} spacing-sm-2 className={classes.officePicContainer}>

          <Grid item spacing={0} xs={12} sm={12} md={5} lg={5}  className={classes.formContainer}>
            <Grid container className={classes.peterBourough} >
              <Typography
                            // variant="h2"
                            color="primary"
                            className={classes.headingBold}
                        >
                            Write to  us 
              </Typography>
            {/* <Grid item xs={12} md={12} lg={12}> */}
              <Typography
                 variant="body1"
                  color="textSecondary"
                   className={classes.locatedmsg}
              >
                Tell us how we can help. Book session with one of our storage experts to discuss your requirments in detail.
                                      
                
                   </Typography>
            {/* </Grid>             */}
            <Grid item xs={12} md={12}lg={12}>
             <form className={classes.root} noValidate onSubmit={handleSubmit}  autoComplete="off">
              <div>        
              <Grid container className={classes.NameAndEmail} spacing={1} sm={12}>
              <Grid item xs={6} sm={6}>
                
             <TextField size={width < 960 ? "small" : 'big'}
              id="outlined-read-only-input"
              
              style={{ width: '100%' }}
              onChange={(e) => setName(e.target.value)}
              type='string'
              required            
              label="Name"          
                   // defaultValue="Hello World"
                      variant="outlined"
                      InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
             }}          
              />
              </Grid>
            <Grid item xs={6} sm={6}>
              
           <TextField
            size={width < 960 ? "small" : 'big'}
            onChange={(e) => setEmail(e.target.value)}             
            id="outlined-read-only-input"
            style={{width:'100%'}}
            label="Email"
            type="email"
            required 
          // defaultValue="info@ivatt.com"
                      variant="outlined"
                       InputLabelProps={{
        className: classes.floatingLabelFocusStyle,
           }}
             />
           </Grid>
        </Grid>
        
        <Grid item xs={12} sm={12}>
           <TextField
           onChange={(e) => setMsg(e.target.value)}             
          size={width < 960 ? "small" : 'big'}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          placeholder = "Type a message..."
          variant="outlined"
          style={{width:'98%'}}
           InputLabelProps={{
        className: classes.floatingLabelFocusStyle,
          }}
           />
          </Grid>
          
                  </div>
                  <Grid item xs={12} md={12} >
                <Button
                  type='submit'
                          endIcon={
                            <ArrowForwardOutlinedIcon fontSize="large" />
                         }
                      className={classes.rightSideBtn}
                    > 
                  Get in touch
               </Button>
            </Grid>
              </form>
            </Grid>
            
         </Grid>
            </Grid>
        </Grid>
        
     </Grid>           
   </Container>
  );
};

const useStyles = makeStyles((theme) => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& label.Mui-focused': {
      color: '#064D7B',
    },
    
    '& .MuiOutlinedInput-root': {
     
      '&:hover fieldset': {
        borderColor: '#064D7B',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#064D7B',
      },
    },
    '& .MuiInputBase-root': {
      color: '#1d5e87',
    },
  },
  peterBourough: {
    padding: "0px 0px ",
    
    [theme.breakpoints.only("sm")]: {
          padding: "0px 0px ",
           
    },
     [theme.breakpoints.only("xs")]: {
          padding: "0px 20px ",
           
        },
     
  },
  NameAndEmail: {
    [theme.breakpoints.only("sm")]: {
          padding: 0,           
        },    
  },
  imageForButton: {
    position: 'relative',
    width: '100%',
    height: '95%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  
  floatingLabelFocusStyle: {
    color: "#064D7B",
    
  },
  messageBody: {
    width: '100% !important'
  },
  headingBold: {
    fontSize: 42,
    
    padding: 0,
    fontFamily: "'PT Serif', serif",
    // lineHeight: '79px',
    //   [theme.breakpoints.only("sm")]: {
    //     fontSize: 61,
    //     lineHeight: '45px',           
    // },
    //    [theme.breakpoints.only("xs")]: {
    //     fontSize: 52,
    //     lineHeight: '34px',           
    // },
    //     ["@media (max-width: 428px) and (min-width: 0px)"]: {
    //           fontSize: 35,
    //     lineHeight: '34px', 
    //     },
       
  },
  servicePara: {
    margin: 0,
    fontSize:20,
    fontWeight: 'bold',
    
  },
  OfficeContainer: {
    position: "relative",
    padding:0,
  },
  labelOn: {
    zIndex: 1,
    top: 44,
    position: 'absolute',
    right: '10%',
    [theme.breakpoints.only("sm")]: {
           top: -25,        
    },
    [theme.breakpoints.only("xs")]: {
      top: 22,
      right: '0%',
      left:'25px',
        },
  },
  officePicContainer: {
    padding: '35px 5%',
    paddingBottom:0,
    [theme.breakpoints.only("xs")]: {
           padding: '10px 10px',          
    },
  },
  officeFirstCon: {
    height: 513,
    position: 'relative',
    [theme.breakpoints.only("sm")]: {
         height: 313,
           
    },
    [theme.breakpoints.down("sm")]: {
        display: 'none',
           
    },
    
    
  },
  largegoogle: {
    width: '100%',
     [theme.breakpoints.down("md")]: {
           width: '100%'     
    },
    // width: '100%'

    // height: '100%', width: '100%',objectFit: 'cover',
  },
  avatarLarge: {
    width: '100%',
    height: '96%',
    objectFit: 'cover',
  },
  
  officeTopImage: {
    position:'relative',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: 29,
    // position: 'absolute',
    // top: 82,
    // right: 0,
    // width: '82%',
    // height:'78%',   
  },
  officeBottomImage: {
    bottom: 0,
    position: 'absolute',
    width: '59%',
    height: '56%',
  },
  formContainer: {
    // display: 'flex',
    // alignItems: 'flex-end',
    [theme.breakpoints.only("sm")]: {
           alignItems: 'center',           
    },

    [theme.breakpoints.only("xs")]: {
           marginTop:'2rem'           
    },
    
  },
  locatedmsg: {
    color: '#064D7B',
    margin: 8,
    fontSize: 15,
    [theme.breakpoints.only("sm")]: {
      marginBottom: 0,
      fontSize:9,
        },
  },
  rightSideBtn: {
        color: '#064D7B',
        fontWeight: 'revert',
        fontSize: 20,
        fontWeight:'bold',
        background: 'white',
        '&:hover': {
       background: "white",
       color:"#064D7B" },
        ["@media (max-width: 600px)"]: {
            fontSize: '16px',
        },
       display:' flex',
       justifyContent: 'space-around',
  },
  imageButton: {
    // position: 'absolute',
   
    borderRadius: 0,
    color: 'white',
        fontWeight: 'bold',
        background: '#064D7B',
        letterSpacing: '2px',
        '&:hover': {
          background: "white",
          border: '1px solid #064D7B',
       color:"#064D7B" },
        ["@media (max-width: 361px)"]: {
             width: '246px',
            fontSize: '10px',
        },
        // width: '302px',
       display:' flex',
        padding: '16px 44px',
    justifyContent: 'space-around',
    right: 0,
    fontSize: 20,
    [theme.breakpoints.only("sm")]: {
      padding: '16px 38px',
        },
  },
  formText: {
        padding: '0px 49px',
  }
    
}));




