import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          Pagina Principal
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          color="transparent"
          href="http://aprende.micole.red/login"
          target="_blank"
        >
          Ir a Aprende Micolegio
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menú"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={FormatAlignJustifyIcon}
          dropdownList={[
            <Link to="/" className={classes.navLink}>
              Actividades
            </Link>,
            <Link to="/Videos" className={classes.navLink}>
              Videos
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
