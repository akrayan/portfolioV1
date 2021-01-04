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

function Home(props) {
	return (
		<div>
			<div>
				<div className="padding-xl background-1">
					<Typography className="grand-title" variant="h1" component="h2" gutterBottom>
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
				<div className="padding-xl background-2-1">
					<Grid container direction="row" justify="center" alignItems="center">
						<Card elevation={8} className="Card1 padding-m background-1-2">
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
						<Card elevation={5} className="Card2 padding-l background-1-1">
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
					</Grid>
				</div>
			</div>
			<div>
				<div className="padding-xl background-1">
					<Typography className="grand-title" variant="h1" component="h2" gutterBottom>
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
				<div className="padding-xl background-2-1">
					<Grid container direction="row" justify="center" alignItems="center">
						<Card elevation={8} className="Card1 padding-m background-2-3">
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
						<Card elevation={5} className="Card2 padding-l MuiPaper-background-2-2">
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
					</Grid>
				</div>
			</div>
			<div>
				<div className="padding-xl background-2-1">
					<Typography className="grand-title" variant="h1" component="h2" gutterBottom>
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
						<Card elevation={8} className="Card1 padding-m background-2-2">
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
					</Grid>
				</div>
			</div>
			<div>
				<div className="padding-xl background-1">
					<Typography className="grand-title" variant="h1" component="h2" gutterBottom>
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
						<Card elevation={8} className="Card1 padding-m background-2-2">
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
					</Grid>
				</div>
			</div>
			<div>
				<div className="padding-xl background-2-1">
					<Typography className="grand-title" variant="h1" component="h2" gutterBottom>
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
				<div className="padding-xl background-2-1">
					<Grid container direction="row" justify="center" alignItems="center">
						<Card elevation={8} className="Card1 padding-m background-2-3">
							<Typography className="title" variant="h4" gutterBottom>
								h4. Heading
							</Typography>
							<Typography className="text-secondary" variant="body1" gutterBottom>
								body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
								dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
							</Typography>
						</Card>
						<Card elevation={5} className="Card2 padding-l background-2-2">
							<Typography className="title" variant="h4" gutterBottom>
								h4. Heading
							</Typography>
							<Typography className="sub-title" variant="h5" gutterBottom>
								h5. Heading
							</Typography>
							<Typography className="text-secondary" variant="body2" gutterBottom>
								body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
								dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
							</Typography>
						</Card>
					</Grid>
				</div>
			</div>
			<div>
				<div className="padding-xl background-1">
					<Typography className="grand-title" variant="h1" component="h2" gutterBottom>
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
				<div className="padding-xl background-1-1">
					<Grid container direction="row" justify="center" alignItems="center">
						<Card elevation={8} className="Card1 padding-m background-1-3">
							<Typography className="title" variant="h4" gutterBottom>
								h4. Heading
							</Typography>
							<Typography className="text-secondary" variant="body1" gutterBottom>
								body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
								dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
							</Typography>
						</Card>
						<Card elevation={5} className="Card2 padding-l background-1-2">
							<Typography className="title" variant="h4" gutterBottom>
								h4. Heading
							</Typography>
							<Typography className="sub-title" variant="h5" gutterBottom>
								h5. Heading
							</Typography>
							<Typography className="text-secondary" variant="body2" gutterBottom>
								body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
								dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
							</Typography>
						</Card>
					</Grid>
				</div>
			</div>
			<div className="background-1">
				<Typography variant="h1" component="h2" gutterBottom>
					h1. Heading
				</Typography>
				<Typography variant="h2" gutterBottom>
					h2. Heading
				</Typography>
				<Typography variant="h3" gutterBottom>
					h3. Heading
				</Typography>
				<Typography variant="h4" gutterBottom>
					h4. Heading
				</Typography>
				<Typography variant="h5" gutterBottom>
					h5. Heading
				</Typography>
				<Typography variant="h6" gutterBottom>
					h6. Heading
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
				</Typography>
				<Typography variant="body1" gutterBottom>
					body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
					dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant="body2" gutterBottom>
					body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
					dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant="button" display="block" gutterBottom>
					button text
				</Typography>
				<Typography variant="caption" display="block" gutterBottom>
					caption text
				</Typography>
				<Typography variant="overline" display="block" gutterBottom>
					overline text
				</Typography>
			</div>
			<TopPage />
			<NavBar />
			<About anchor="About" />
			<Experience id="Experience" />
			<Projects id="Projects" />
			<Contact id="Contact" />
		</div>
	);
}

Home.propTypes = {};

export default Home;
