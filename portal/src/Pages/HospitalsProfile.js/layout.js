import React from "react";
import useStyles from "./style";
import Header from "Components/Header";
import {
  Container,
  CardContent,
  Card,
  Typography,
  Button,
  Grid
} from "@material-ui/core";

import HospitaBanner from "./assets/HospitalBanner.jpg";

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.Hospitaldetails}>
      <Header title="Hospital-Profile" />
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.hospitalInfo}>
          <Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={4}>
                <Card>
                  <CardContent>
                    <div className={classes.hospitalsection}>
                      <img
                        src={HospitaBanner}
                        alt="HospitalBanner"
                        className={classes.hospitalImage}
                      />
                      <button variant="contained" className={classes.rating}>
                        4
                      </button>
                      <span>⭐️⭐️⭐️⭐️</span>
                      <div className={classes.addresses}>
                        <div className={classes.hopistalname}>
                          New Life Hospital
                        </div>
                        <div className={classes.hospitalNumber}>
                          <span>
                            <i class="fas fa-phone"></i>
                          </span>{" "}
                          +91069620809,+9712971197
                        </div>
                        <div className={classes.hopistalAddress}>
                          <i class="fas fa-address-book"></i> Sector 23,Near{" "}
                          GH_6 cirlcle,BPCCS,382355
                        </div>
                        <div className={classes.hospitalurl}>
                          <i class="fas fa-globe"></i> www.newlife.in
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} lg={8}>
                <Card>
                  <CardContent>
                    <div className={classes.hospitalmoreinfo}>
                      <Typography
                        variant="h5"
                        className={classes.hospitaldescription}>
                        Description:
                      </Typography>
                      <div>
                        <p className={classes.hospitaldescriptionParagraph}>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Dolorem saepe facilis veniam asperiores et at
                          esse architecto magni neque autem, eos numquam nulla
                          quasi hic, beatae minima illum fugit officiis
                          repudiandae voluptas obcaecati placeat totam dolorum.
                          Porro libero ab in cumque eius accusamus, eum esse
                          suscipit doloribus, harum qui excepturi?
                        </p>
                      </div>
                      <div className={classes.category}>
                        <Typography
                          variant="h5"
                          className={classes.hospitaldescription}>
                          Category:
                        </Typography>
                        <div className={classes.categorysection}>
                          <p>
                            <i
                              class="fas fa-check-circle"
                              style={{
                                marginRight: "0.3rem",
                                color: "#7563FF"
                              }}></i>
                            General Hospital
                          </p>
                          <p>
                            <i
                              class="fas fa-check-circle"
                              style={{
                                marginRight: "0.3rem",
                                color: "#7563FF"
                              }}>
                              {" "}
                            </i>
                            Eye Hospital
                          </p>
                          <p>
                            <i
                              class="fas fa-check-circle"
                              style={{
                                marginRight: "0.3rem",
                                color: "#7563FF"
                              }}>
                              {" "}
                            </i>
                            Children Hospital
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={classes.hospitaldoctor}>
                      <Typography
                        variant="h5"
                        className={classes.hospitaldescription}>
                        Doctors:
                      </Typography>
                      <div className={classes.doctors}>
                        <Card className={classes.doctorcard}>
                          <CardContent>
                            <div style={{ textAlign: "center" }}>
                              <i
                                class="fas fa-user-md"
                                style={{
                                  fontSize: "2rem",
                                  color: "#7563FF"
                                }}></i>
                              <Typography
                                variant="h5"
                                style={{
                                  fontFamily: "Poppins,Roboto",
                                  fontSize: "1rem"
                                }}
                                classes={classes.doctorname}>
                                Dr.Bankar Pinjani
                              </Typography>
                              <Typography className={classes.doctorDegree}>
                                M.D In Sergery
                              </Typography>
                            </div>
                          </CardContent>
                        </Card>
                        {/* secondCard */}
                        <Card className={classes.doctorcard}>
                          <CardContent>
                            <div style={{ textAlign: "center" }}>
                              <i
                                class="fas fa-user-md"
                                style={{
                                  fontSize: "2rem",
                                  color: "#7563FF"
                                }}></i>
                              <Typography
                                variant="h5"
                                style={{
                                  fontFamily: "Poppins,Roboto",
                                  fontSize: "1rem"
                                }}
                                classes={classes.doctorname}>
                                Dr.Sanju Javad
                              </Typography>
                              <Typography className={classes.doctorDegree}>
                                M.B.B.S
                              </Typography>
                            </div>
                          </CardContent>
                        </Card>
                        {/* third */}
                        <Card className={classes.doctorcard}>
                          <CardContent>
                            <div style={{ textAlign: "center" }}>
                              <i
                                class="fas fa-user-md"
                                style={{
                                  fontSize: "2rem",
                                  color: "#7563FF"
                                }}></i>
                              <Typography
                                variant="h5"
                                style={{
                                  fontFamily: "Poppins,Roboto",
                                  fontSize: "1rem"
                                }}
                                classes={classes.doctorname}>
                                Dr.Ashish Bhoye
                              </Typography>
                              <Typography className={classes.doctorDegree}>
                                Physiotherapist,
                                <br></br>
                                Ahmedabad
                              </Typography>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
