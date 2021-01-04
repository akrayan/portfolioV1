import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Grid, Tabs, Tab, Box, Typography, Card, CardMedia, Fade } from "@material-ui/core";
import "./About.css";
import data from "Ressources/data.json";
import profil from "Ressources/Images/profil.jpg";
//import {} from "devicon"


const styles = makeStyles(theme => ({
	section: theme.section,
	root: {
		paddingTop: "150px",
	},
	media: {
		margin: "10px",
		height: "calc(100% - 20px)",
		backgroundColor: "#26898Aff",
	},
	profilCard: {
		position: "relative",
		left: "30px",
		height: "340px",
		width: "340px",
	},
	descriptionCard: {
		paddingLeft: "45px",
		height: "600px",
		width: "800px",
	},
	skills: {
		width: "200px",
		columns: 2,
		listStyle: "-  ",
	},
	skillsColor: {
		color: "#37CBC7ff"
	}
}));

/*
ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
*/

function About(props) {
	const classes = styles();

	return (
		<div className={classes.section} id={props.anchor}>
			<Typography variant="h3" gutterBottom>
				About Me
			</Typography>
			
			<Grid container direction="row" justify="center" alignItems="center">
				<Card elevation={8} className={classes.profilCard}>
					<CardMedia className={classes.media} image={profil} title="Me" />
					{/*<img className={classes.media} src={profil} alt="Me" />*/}
				</Card>
				<Card elevation={5} className={classes.descriptionCard}>
					<CardContent>
						<Typography variant="h4" gutterBottom>
							Who am I ?
						</Typography>
						{data.aboutMe.map((v) => (
							<div>
								<Typography variant="body1" gutterBottom>
									{v}
								</Typography>
								<br />
							</div>
						))}
						<Typography variant="body2" className={classes.skillsColor}><div>Here are some technologies I often work with :</div></Typography>
						<i class="devicon-javascript-plain"></i>
						
						<Typography variant="body2" className={classes.skillsColor} gutterBottom>
							<ul className={classes.skills}>
								{data.skills.map((v) => (
									<li>{v}</li>
								))}
							</ul>
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
}

About.propTypes = {};

export default About;
