import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Grid, Tabs, Tab, Box, Typography, IconButton, Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Contact.css";
import data from "Ressources/data.json";

const styles = makeStyles((theme) => ({
	section: theme.section,
	root: {
		height: "300px",
	},
}));

function Contact(props) {
	const classes = styles();
	return (
		<div id={props.anchor} className={classes.section}>
			<Typography variant="h3" gutterBottom>
				Contact
			</Typography>
			<Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
				<Typography variant="body1" gutterBottom>
					Have a question or want to work together ?
				</Typography>
				<Grid container direction="row" justify="center" alignItems="center">
					<Button /*target="_blank" rel="noopener noreferrer"*/ href={data.mailLink} variant="outlined" color="primary" size="large">
						Send me a mail
					</Button>
					<IconButton color="primary" target="_blank" rel="noopener noreferrer" href={data.linkedIn} aria-label="linkedin">
						<LinkedInIcon fontSize="large" />
					</IconButton>
				</Grid>
			</Grid>
		</div>
	);
}

Contact.propTypes = {};

export default Contact;
