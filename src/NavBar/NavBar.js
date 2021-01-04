import React from "react";
import PropTypes from "prop-types";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { AppBar, Toolbar, Typography,  useScrollTrigger, Grid, Slide, Link, Button, IconButton, makeStyles } from "@material-ui/core";
import "./NavBar.css";
import resume from "../Ressources/Resume.pdf";

const useStyles = makeStyles((theme) => ({
	navbar: {
		backgroundColor: theme.palette.background1,
	},
	link: {
		color: theme.palette.secondary,
	},
	ml: {
		marginLeft: "30px",
	},

}));

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

function NavBar(props) {
	const classes = useStyles();
	return (
		<div>
			<HideOnScroll {...props}>
				<AppBar position="fixed" className={classes.navbar}>
					<Toolbar>
						<Grid container direction="row" justify="space-between" alignItems="center">
							<Grid item xs={1}>
								<IconButton color="primary" href="/" aria-label="home">
									<HomeRoundedIcon  />
								</IconButton>
							</Grid>
							<Grid container item xs={11} direction="row" justify="flex-end" alignItems="center">
								<Typography >
									<Link href="#About" className={classes.ml}>
										{"01. About"}
									</Link>
								</Typography>
								<Typography >
									<Link href="#Experience" className={classes.ml}>
										{"02. Experience"}
									</Link>
								</Typography>
								<Typography >
									<Link href="#Projects" className={classes.ml}>
										{"03. Projects"}
									</Link>
								</Typography>
								<Typography >
									<Link href="#Contact" className={classes.ml}>
										{"04. Contact"}
									</Link>
								</Typography>
								<Button /*target="_blank" rel="noopener noreferrer"*/ className={classes.ml} href={resume} variant="outlined" color="primary" size="small" download>
									Resume
								</Button>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</div>
	);
}

NavBar.propTypes = {};

export default NavBar;

/*
						<Grid container direction="row" justify="space-between" alignItems="center">
							<Grid container direction="column" >
								<Grid container direction="row" justify="flex-start" alignItems="center">
									<IconButton color="primary" href="/" aria-label="home">
										<HomeRoundedIcon fontSize="large" />
									</IconButton>
								</Grid>
							</Grid>
							<Grid container direction="column" >
								<Grid container direction="row" justify="flex-end" alignItems="center">
									<Typography variant="link">
										<Link href="#About" className={classes.link}>
											{"01. About"}
										</Link>
									</Typography>
									<Typography variant="link">
										<Link href="#Experience" className={classes.link}>
											{"02. Experience"}
										</Link>
									</Typography>
									<Typography variant="link">
										<Link href="#Projects" className={classes.link}>
											{"03. Projects"}
										</Link>
									</Typography>
									<Typography variant="link">
										<Link href="#Contact" className={classes.link}>
											{"04. Contact"}
										</Link>
									</Typography>
									<Button  href="../Ressources/Resume.pdf" variant="outlined" color="primary" size="medium" download>
									Resume
									</Button>
								</Grid>
							</Grid>
						</Grid>
						*/
