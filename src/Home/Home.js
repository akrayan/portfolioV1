import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import "./Home.css"

function Home(props) {
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        justify="stretch"
      >
        <div className="Home-Container1">
          <h1>Hi my name is Raihane</h1>
        </div>
      </Grid>
    </div>
  );
}

Home.propTypes = {};

export default Home;
