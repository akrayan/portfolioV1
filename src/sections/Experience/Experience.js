import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, withStyles, Grid, Tabs, Tab, Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { FiberManualRecord, SettingsEthernet } from "@material-ui/icons";
import "./Experience.css";
import data from "Ressources/data.json";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
	section: theme.section,
	root: {
		padding: "50px",
	},
	content: {
		flexGrow: 1,
		display: "flex",
	},
	tabs: {
		borderRight: "1px solid",
		borderColor: theme.palette.primary.main
	},
	htabs: {
		borderRight: "1px solid ",
		borderColor: theme.palette.primary.main
	},
	card: {
		width: "100%",
		border: "3px solid",
		borderColor: theme.palette.primary.main,
		borderRadius: "5px",
	},
	panel: { height: "500px" },
	list: { listStyle: "-  " },
	item: { marginBottom: "15px"},
	navb: { maxWidth: "inherit" },
}));

const StyleTab = withStyles((theme) => ({
	root: {
		color: "#2EAAA9ff",
		"&:hover": {
			color: "#3FECE6ff",
			opacity: 1,
		},
		"&$selected": {
			color: "#38CC87ff",
			backgroundColor: "#1E6852ff",
			fontWeight: theme.typography.fontWeightMedium,
		},
		"&:focus": {
			color: "#38CC87ff",
		},
	},
	selected: {},
}))((props) => <Tab {...props} />);

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function PanelsList(props) {
	const { value } = props;
	const classes = useStyles();

	return data.experience.map((v, i) => (
		<TabPanel className={classes.panel} value={value} index={i}>
			<Typography variant="h4" gutterBottom>
				{v.title + " at " + v.company}
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				{v.date}
			</Typography>
			<ul className={classes.list}>
				{v.details.map((item) => (
					<li className={classes.item}>
						<Typography variant="body1" gutterBottom>{item}</Typography>
					</li>
				))}
			</ul>
		</TabPanel>
	));
}

function Experience(props) {
	const { width } = props;
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div id={props.anchor} className={classes.section}>
			<Typography variant="h3" gutterBottom>
				Experience
			</Typography>
			<Grid className={classes.root} container direction="row" justify="center" alignItems="stretch">
				<Grid item xs={12} md={8}>
					<div className={classes.card}>
						<Grid container direction={width == "xs" ? "column" : "row"} justify="center" alignItems="stretch">
							<Grid item xs={12} sm={3} style={{ display: "grid", alignItems: "center" }} className={classes.tabs}>
								<Tabs orientation={width == "xs" ? "horizontal" : "vertical"} centered variant="scrollable" value={value} onChange={handleChange} aria-label="Exp tabs">
									{data.experience.map((v, i) => (
										<StyleTab className={classes.navb} label={v.company} {...a11yProps(i)} />
									))}
								</Tabs>
							</Grid>
							<Grid item xs={12} sm={9}>
								<PanelsList value={value} />
							</Grid>
						</Grid>
						{/* 
						<Typography>{width == "sm" ? "TINY" : width == "xs" ? "Smaaall as fuck !" : "Oda"}</Typography>
						<CardContent>
							<div className={classes.content}>
								<Tabs orientation={width == "xs" ? "horizontal" : "vertical"} variant="scrollable" value={value} onChange={handleChange} aria-label="Exp tabs" className={classes.tabs}>
									{data.experience.map((v, i) => (
										<Tab label={v.company} {...a11yProps(i)} />
									))}
								</Tabs>
								{data.experience.map((v, i) => (
									<TabPanel className={classes.panel} value={value} index={i}>
										<Typography variant="h2" gutterBottom>
											{v.company}
										</Typography>
										<List dense>
											{v.details.map((item) => (
												<ListItem>
													<ListItemIcon>
														<FiberManualRecord fontSize="small" color="primary" />
													</ListItemIcon>
													<Typography variant="body1">{item}</Typography>
												</ListItem>
											))}
										</List>
									</TabPanel>
								))}
							</div>
						</CardContent>
						*/}
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

Experience.propTypes = {
	width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Experience);
