import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./palette.css";
import "./scss/palette-green.css";
import "./scss/palette-turq.css";

const theme = createMuiTheme({
	palette: {
		primary: { main : "#38CC87ff"}, //emerald
		secondary: { main: "#37CBC7ff" }, //medium-turquoise
		background: {
			paper: /*"#1E686Bff",*/"#15474Dff",//"#154740ff",//"#1E6852ff",//"#284b63ff",
			default: "#0D262Eff",
		},
		background1: "var(--gunmetal)",
		/*background2: "var(--midnight-green-eagle-green)",
		background3: "var(--skobeloff)",*/
	},
	typography: {
		h1: { color: "var(--green-crayola)", height: "auto" },
		h2: { color: "var(--medium-spring-green)", fontFamily: "monospace" },
		h3: { color: "var(--medium-spring-green)", fontFamily: "monospace" },
		h4: { color: "var(--emerald)",  },
		subtitle1: { color: "var(--fluorescent-blue)", fontFamily: "monospace", fontSize: "1.75rem" },
		link: { color: "#37CBC7ff", fontFamily: "monospace" },
		linkNb: { color: "#37CBC7ff", fontFamily: "monospace" },
		body1: { color: "var(--emerald)" },
		body2: { color: "var(--fluorescent-blue)", fontSize: "1rem" },
	},
	section: {
		marginTop: "100px",
		//backgroundColor: "var(--gunmetal)",
		//padding: "50px",
	},
});

const theme1 = createMuiTheme({
	palette: {
		primary: { main : "#3282b8ff"}, //emerald
		secondary: { main: "#0f4c75ff" }, //medium-turquoise
		background1: "#3282b8ff",
	},
	typography: {
		h1: { color: "#0f4c75ff", height: "auto" },
		h2: { color: "#3282b8ff", fontFamily: "monospace" },
		h3: { color: "#3282b8ff", fontFamily: "monospace" },
		h4: { color: "var(--emerald)",  },
		subtitle1: {  fontFamily: "monospace", fontSize: "1.75rem" },
		//body1: { color: "var(--emerald)" },
		body2: { color: "#0f4c75ff", fontSize: "1rem" },
	},
	section: {
		marginTop: "100px",
		//backgroundColor: "var(--gunmetal)",
		//padding: "50px",
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
