import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Tabs, Tab, Box, Button, Typography, Paper, Divider, Card, CardActionArea, CardActions, CardMedia, CardContent, Chip, IconButton, SvgIcon } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ReactComponent as WinLogo } from "Ressources/icons/win.svg";
import "./Projects.css";
import data from "Ressources/data.json";
import axios from "axios";
import GetAppIcon from "@material-ui/icons/GetApp";

const MaxLength = 150;

const useStyles = makeStyles((theme) => ({
	section: theme.section,
	card: {
		//display: "grid",
		//backgroundColor: theme.palette.background2,
		width: "300px",

		"&:hover": {
			transform: "translateY(-5px)",
		},
	},
	cardFooter: {
		alignSelf: "flex-end",
	},
	description: {
		/*height: "50px",
		color: "white",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",*/
		height: "150px",
		borderTop: "#CCC5 solid 1px",
		borderBottom: "#CCC5 solid 1px",
	},
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(12, 1fr)",
		gridGap: theme.spacing(3),
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		whiteSpace: "nowrap",
		marginBottom: theme.spacing(1),
	},
	divider: {
		margin: theme.spacing(2, 0),
	},
	media: {
		height: "400px",
		backgroundSize: "contain",
		backgroundPosition: "bottom",
		/*boxShadow: "inset 10000px 0 0 0 #3FECE6AA",
		"&:hover" : {
			boxShadow: "inset 10000px 0 0 0 #0000",
		}*/
	},
}));

function WinIcon(props) {
	return (
		<SvgIcon {...props}>
			<WinLogo />
		</SvgIcon>
	);
}

function RecentList(props) {
	const classes = useStyles();
	return props.list.map((v) => {
		console.log("r list value", v)
		return (
		<Grid item>
			<Card elevation={5}>
				<CardMedia className={classes.media} style={{ backgroundColor: v.backgroundColor }} image={require("Ressources/Images/" + v.image)} title="project" />
				<CardContent>
					<Typography style={{ textTransform: "capitalize", marginBottom: "20px" }} variant="subtitle1">
						{v.title}
					</Typography>
					<Typography variant="body1" paragraph={true}>
						{v.description.split("\n").map((s) => (
							<div>
								{s}
								<br />
							</div>
						))}
					</Typography>
					{v.downloadable ? (
						<Button variant="outlined" color="secondary" startIcon={<WinIcon />} href={v.link} download>
							Download
						</Button>
					) : (
						<Button variant="outlined" color="secondary" target="_blank" rel="noopener noreferrer" href={v.link} >
							Play
						</Button>
					)}
				</CardContent>
			</Card>
		</Grid>
	)});
}

function List(props) {
	const classes = useStyles();
	return props.list.map((v) => (
		<Grid item>
			<Card className={classes.card} elevation={5}>
				<Grid>
					<CardContent>
						<Typography style={{ textTransform: "capitalize" }} variant="subtitle1">
							{v.name}
						</Typography>
					</CardContent>
					<CardActionArea className={classes.description} target="_blank" rel="noopener noreferrer" href={v.html_url}>
						<CardContent>
							<Typography variant="body1" paragraph={true}>
								{v.description}
							</Typography>
						</CardContent>
					</CardActionArea>
					<Grid container direction="row" justify="space-between" alignItems="center">
						<Chip size="small" label={v.language} color="secondary" style={{ marginLeft: "10px" }} />
						<IconButton color="primary" target="_blank" rel="noopener noreferrer" href={v.html_url}>
							<ExitToAppIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Card>
			{/*<Card className={classes.card}>
				<div>
					<Typography style={{ textTransform: "capitalize" }} gutterBottom variant="h6" component="h6">
						{v.name}, {v.created_at}, {v.language}
					</Typography>
				</div>
				<Divider style={{ margin: 0 }} />
				<CardActionArea>
					<Typography variant="body1" noWrap={true} paragraph={true}>
						{v.description}
					</Typography>
				</CardActionArea>
				<Divider style={{ margin: 0 }} />
				<div className={classes.cardFooter}>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</div>
	</Card>*/}
		</Grid>
	));
}

function Projects(props) {
	const [projects, setProjects] = useState([]);
	console.log("projs", projects);

	useEffect(() => {
		axios
			.get("https://api.github.com/users/akrayan/repos")
			.then((response) => {
				console.log(
					"res",
					response.data.map((v) => v.name)
				);
				response.data.forEach((element) => {
					console.log("cre at", element.created_at);
					element.created_at = new Date(element.created_at);
					element.date = element.created_at;
					element.description = element.description.length > MaxLength ? element.description.substring(0, MaxLength) + "..." : element.description;
				});
				response.data = response.data.sort((a, b) => a.created_at - b.created_at);
				console.log("edited", response.data);
				setProjects(
					response.data.map((v) => {
						v.created_at = new Date(v.created_at);
						return v;
					})
				);
			})
			.catch((error) => console.log("err", error));
		console.log("hello !");
	}, []);

	const classes = useStyles();
	return (
		<div id={props.anchor} className={classes.section}>
			<Typography variant="h3" gutterBottom style={{ marginBottom: "60px" }}>
				Projects
			</Typography>

			<Grid container direction="column" justify="space-around" spacing={4} alignItems="center">
				<Grid item container direction="row" spacing={3} xs={12} md={8}>
					<Typography variant="h5" gutterBottom>
						These are the last personal projects I worked on
					</Typography>
				</Grid>
				<Grid item container direction="row" justify="center" alignItems="center" spacing={3} xs={12} md={8}>
					<Grid item container direction="column" justify="center" alignItems="stretch" spacing={3}>
						<RecentList list={data.projects} />
					</Grid>
				</Grid>
				<Grid item container direction="row" spacing={3} xs={12} md={8}>
					<Typography variant="h5" style={{marginTop: "30px"}} gutterBottom>
						Here are some other projects I've done in my free time, hosted on my Github
					</Typography>
				</Grid>
				<Grid item container direction="row" justify="center" alignItems="center" spacing={3} xs={12} md={8}>
					<List list={projects} />
				</Grid>
			</Grid>
		</div>
	);
}

Projects.propTypes = {};

export default Projects;
