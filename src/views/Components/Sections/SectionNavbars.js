import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Header from "components/Header/Header.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div id="navbar" className={classes.navbar}>
        <div>
          <Header
            // brand="Info Color"
            color="success"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Link to="/landing-page" className={classes.navLink}>
                    Videos
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to="/" className={classes.navLink}>
                    Volver
                  </Link>
                </ListItem>
              </List>
            }
          />
        </div>
      </div>
    </div>
  );
}
