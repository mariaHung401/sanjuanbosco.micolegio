import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import logo from "assets/img/colegio/logo.png";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "success",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/colegio/fondo-mariquit.png")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem justify="center" xs={12} sm={12} md={12}>
              <div className={classes.brand}>
                <h6>Centro de Educación</h6>
                <h2>
                  <strong>C.E.I San Juan Bosco</strong>
                </h2>
              </div>
              <div className={classes.brand}>
                <img src={logo} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <ProfilePage />
      </div>
      <Footer />
    </div>
  );
}
