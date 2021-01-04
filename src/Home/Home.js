import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Grid, Tabs, Tab, Box, Typography, Paper, Divider } from "@material-ui/core";
import "./Home.css";
import data from "../Ressources/data.json";
import Experience from "../sections/Experience";
import About from "../sections/About";
import TopPage from "../sections/TopPage";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import NavBar from "../NavBar";
import FadeComponent from "../components/FadeComponent";
import "../scss/palette-turq.scss";

const useStyles = makeStyles((theme) => ({
	root: {
		//display: "grid",
		width: "fit-content",
	},
	body: {
		padding: "40px",
	},
	section: {
		marginTop: "50px",
		paddingTop: "1000px",
	},
	card: {
		backgroundColor: theme.palette.background2,
	},
	footer: {
		width: "-webkit-fill-available",
		borderTop: "solid 1px",
		borderTopColor: "rgba(255, 255, 255, 0.5)",
	},
}));

function Home(props) {
	const classes = useStyles();
	return (
		<div>
			<Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
				<NavBar />
				<TopPage />
				<Grid container item direction="column" justify="space-around" alignItems="stretch" xs={12} md={10} className={classes.body}>
					<About anchor="About" />
					<Experience anchor="Experience" />
					<Projects anchor="Projects" />
					<Contact anchor="Contact" />
				</Grid>
				<footer className={classes.footer}>
					<Grid container direction="row" justify="center" alignItems="center">
						<p>{"Built by Raihane Akkache"}</p>
					</Grid>
				</footer>
			</Grid>
		</div>
	);
}

Home.propTypes = {};

export default Home;

/*<div>
				<div className="padding-xl background-1">
					<Typography variant="h1" component="h2" gutterBottom>
						h1. Heading
					</Typography>
					<Typography className="title" variant="h2" gutterBottom>
						h2. Heading
					</Typography>
					<Typography className="text-primary" variant="body1" gutterBottom>
						body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
						dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
					</Typography>
				</div>
				<div className="padding-xl background-1">
					<Grid container direction="row" justify="center" alignItems="center">
						<Card elevation={5} className="Card2 padding-l background-2-1">
							<Typography className="title" variant="h4" gutterBottom>
								h4. Heading
							</Typography>
							<Typography className="sub-title" variant="h5" gutterBottom>
								h5. Heading
							</Typography>
							<Typography className="text-primary" variant="body1" gutterBottom>
								body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
								dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
							</Typography>
							<Typography className="text-secondary" variant="body1" gutterBottom>
								body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
								dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
							</Typography>
						</Card>
						<Card elevation={8} className="Card1 padding-m background-2-2" c>
							<Typography className="title" variant="h4" gutterBottom>
								h4. Heading
							</Typography>
							<Typography className="text-secondary" variant="body2" gutterBottom>
								body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
								dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
							</Typography>
							<Typography className="text-primary" variant="body2" gutterBottom>
								body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
								dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
							</Typography>
						</Card>
					</Grid>
				</div>
			</div>*/
