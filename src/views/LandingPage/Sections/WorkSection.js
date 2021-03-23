import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import ReactPlayer from "react-player";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <cardHidden>
              <div>
                <h3 className={classes.title}>
                  <strong>
                    Video de cierre de la semana de educación inicial
                  </strong>
                </h3>
              </div>
            </cardHidden>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center" xs={12} sm={12} md={12}>
          <GridItem justify="center" xs={12} sm={12} md={6}>
            <Card>
              <div>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=__4DFl6D6UQ"
                  className="react-player"
                  playing
                  width="100%"
                />
              </div>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
