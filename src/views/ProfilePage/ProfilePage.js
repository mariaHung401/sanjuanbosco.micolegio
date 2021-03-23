import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import SlowMotionVideoRoundedIcon from '@material-ui/icons/SlowMotionVideoRounded';

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={8} className={classes.profile}>
            <div>
              <h3 className={classes.title}>Semana Diciembre</h3>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Bienvenida"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>Bienvenida de la navidad</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=aK-gEtKTDYU"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={8} className={classes.profile}>
            <div>
              <h3 className={classes.title}>Semana 23 al 27 de Noviembre</h3>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Maternal"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=7sRbWPnPgpo&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo 'A'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=gFCgIMVVlEM&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo 'B'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=R1KlSmqdXKg&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo 'C'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://drive.google.com/file/d/1FTrdZTGuWM7MSrEtglUzhHbA_UtIZCDq/view"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo II 'A'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=1q0octwztD0&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo II 'B'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=87DSbp1lNK8&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo II 'C'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=oOBz4ZIFE0w&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo III 'A'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=Q_H-9NmoucE&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo III 'B'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=cOT8LVkh3UM&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase Grupo III 'C'"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=SdFzjxjs-Rg&feature=youtu.be"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Clase de Gimnasia Cerebral"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h6 className={classes.title}>LOS ALIMENTOS</h6>
                <br />
                <Button
                  color="danger"
                  round
                  href="https://drive.google.com/file/d/1sqPXwHSTm9KqZNIG3T2ey9G9MMvEc2yi/view"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>
{/* 

        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={8} className={classes.profile}>
            <div>
              <h3 className={classes.title}>
                Cierre de la semana de Educación Inicial
              </h3>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h5 className={classes.title}>
                  Jerusalema del CEI San Juan Bosco
                </h5>
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=__4DFl6D6UQ"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>
        </GridContainer>


        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={8} className={classes.profile}>
            <div>
              <h3 className={classes.title}>Semana de la Educación Inicial</h3>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Grupo Maternal"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h5 className={classes.title}>
                  Semana de la educación inicial
                </h5>
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=ZY208ZqsJBM"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Grupo I A"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h5 className={classes.title}>La carrera de los amigos</h5>
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=ZY208ZqsJBM"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Grupo I B"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h5 className={classes.title}>
                  Semana de la educación inicial
                </h5>
                <Button
                  color="danger"
                  round
                  href="https://drive.google.com/file/d/1VUGZvROJIABQN1eAgHk3amIDd36gQufR/view?usp=drivesdk"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Grupo I C"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h5 className={classes.title}>
                  Semana de la educación inicial
                </h5>
                <Button
                  color="danger"
                  round
                  href="https://drive.google.com/file/d/15qNJIpskiqEukch3JsMnL8JMDj_kgezo/view?usp=drivesdk"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Grupo II A"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h5 className={classes.title}>30 de octubre de 2020</h5>
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=tdg-qHbjzjY"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem>
                <InfoArea
                  title="Grupo II B"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem>
                <h5 className={classes.title}>Las muñecas rítmicas</h5>
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=qwyPbzOLCmc"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem xs={12} sm={12} md={12}>
                <InfoArea
                  title="Grupo II C"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h5 className={classes.title}>30 de octubre de 2020</h5>
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=fXtoqfvn_bQ"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem xs={12} sm={12} md={12}>
                <InfoArea
                  title="Grupo III A"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h5 className={classes.title}>
                  Semana Magica. Semana de Educación Inicial
                </h5>
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=1wBw7X63qSE"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem xs={12} sm={12} md={12}>
                <InfoArea
                  title="Grupo III B"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h5 className={classes.title}>luisanny</h5> <br />
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=IMmkPQRgdtw"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={4} md={4} className={classes.navWrapper}>
            <Card>
              <GridItem xs={12} sm={12} md={12}>
                <InfoArea
                  title="Grupo III C"
                  icon={OndemandVideoRoundedIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <h5 className={classes.title}>
                  Semana Magica Semana de Educacion Inicial
                </h5>
                <Button
                  color="danger"
                  round
                  href="https://www.youtube.com/watch?v=VQjAWoCxGBQ"
                  target="_blank"
                >
                  <SlowMotionVideoRoundedIcon />
                  Ver Video
                </Button>
              </GridItem>
            </Card>
          </GridItem> */}
        {/* </GridContainer> */}
      </div>
    </div>
  );
}
