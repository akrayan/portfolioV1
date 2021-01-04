import React from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import "./TopPage.css";
import data from "Ressources/data.json";
import Background from "Ressources/Images/background.jpg";

const styles = makeStyles({
	root: {
		backgroundImage: `url(${Background})`,
		backgroundSize: "cover",
		backgroundPosition: "right",
		boxShadow: "inset 10000px 0 0 0 #000A",
		//backgroundColor: "#FFF5",
		//alignSelf: "center",
		//justifySelf: "center",
		//width: "80%",
		//maxWidth: "1600px",
		//paddingTop: "100px",
		height: "1000px",
	},
	back: {
		backgroundColor: "#000A",
		height: "100%",
		width: "100%",
	},
	resume: {
		maxWidth: "600px",
		//fontFamily: "monospace"
	},
	contactButton: {
		marginTop: "30px",
	},
});

function TopPage(props) {
	const classes = styles();
	return (
		<Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
			<Grid container item direction="column" justify="space-around" alignItems="flex-start" xs={12} md={10}>
				<Typography variant="h1">Raihane AKKACHE</Typography>
				<Typography variant="h2" component="h2">
					{data.jobTitle}
				</Typography>
				<Typography variant="body1" className={classes.resume}>
					{data.shortResume}
				</Typography>
				<Button target="_blank" rel="noopener noreferrer" href={data.mailLink} className={classes.contactButton} variant="outlined" color="primary">
					Contact Me
				</Button>
			</Grid>
		</Grid>
	);
}

TopPage.propTypes = {};

export default TopPage;

/*
		<div className={classes.root}>
			<div className={classes.back}>
			<Typography variant="h1" >
				Raihane AKKACHE
			</Typography>
			<Typography variant="h2" component="h2">
				{data.jobTitle}
			</Typography>
			<Typography variant="body1" className={classes.resume}>
				{data.shortResume}
			</Typography>
	
			<Button target="_blank" rel="noopener noreferrer" href={data.mailLink} variant="outlined" color="primary">Contact Me</Button>
			</div>

		</div>*/
