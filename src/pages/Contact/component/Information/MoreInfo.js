import React, { useState } from "react";
import {
	makeStyles,
	Typography,
	Grid,
	Button,
	TextField,
	NativeSelect,
	InputBase,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { ToastContainer, toast } from 'react-toastify';
import ClearIcon from '@mui/icons-material/Clear';
import 'react-toastify/dist/ReactToastify.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const MoreInfo = ({ contactInfo, setContactInfo, setFormSubmited }) => {
	// const [selected, setSelected] = useState(0);
	const classes = useStyles();
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
	const handleChange = (props) => (event) => {
		setContactInfo({ ...contactInfo, [props]: event.target.value });
	};
	const handleClick = (e) => {
		
		if (contactInfo.name == "Name" || contactInfo.subname === "subname") {
		e.preventDefault()
			return handleClickOpen()
		}
		setFormSubmited(true);
	};
	return (
		<Grid container direction="column" align="left">
					<ToastContainer />
			
			<form onSubmit={handleClick}> 
			<Grid item className={classes.gridItem}>
				<Typography variant="h6" color="primary" style={{lineHeight : '0.35em'}} align="left">
					Phone
				</Typography>
				<Grid container>
					<TextField
						id="outlined-basic"
						type="number"
						placeholder="999 999 999"
						required
						variant="outlined"
						onChange={handleChange("phone")}
						autoComplete={false}
					/>
				</Grid>
			</Grid>
			<Grid item className={classes.gridItem}>
				<Typography variant="h6" style={{lineHeight : '0.35em'}} color="primary" align="left">
					Email
				</Typography>
				<Grid container>
					<TextField
						id="outlined-basic"
						type="email"
						placeholder="info@info.com"
						variant="outlined"
						onChange={handleChange("email")}
						required
					/>
				</Grid>
				</Grid>
				 <Dialog
                     open={open}
					onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					
      >
         <div style={{display:'flex' , justifyContent: 'flex-end'}}> 
          <Button onClick={handleClose}><ClearIcon/></Button>
          </div>
       
        <DialogContent style={{padding: '1rem 2rem' }}>
						<DialogContentText id="alert-dialog-description" >
							All the fields are mendatory. Please fill all the field.
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
					
				<Grid item >
				<Button
					type="submit"
					// variant="contained"
					style={{background: 'white',color: '#064D7B',border: '1px solid #064D7B',padding: '7px 15px'}}
				>
					GET YOUR QUOTE
				</Button>
			</Grid>
			 </form>
		</Grid>
	);
};

const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	quoteText: {
		
	},
	input: {
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		fontSize: 16,
		padding: "18px 26px 18px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
		},
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	gridItem: {
		marginBottom: theme.spacing(3.75),
	},
}));
