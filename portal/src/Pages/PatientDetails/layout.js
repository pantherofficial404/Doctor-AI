import React from "react";
import useStyle from "./style";
import {
  Card,
  Container,
  CardContent,
  Avatar,
  Typography,
  Button
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { InputComponent } from "Components";

const Layout = () => {
  const classes = useStyle();

  return (
    <div className={classes.patientpage}>
      <Container className={classes.container} maxWidth="lg">
        <Card className={classes.root}>
          <CardContent>
            <div>
              <Avatar src="/broken-image.jpg" className={classes.avatar} />
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: "1rem" }}
              >
                Jone Doe
              </Typography>
              <InputComponent placeholder="Old Password" Icon={LockIcon}/>
              <InputComponent placeholder="New Password" Icon={LockIcon}/>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "2rem" }}
                >
                  Update
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default Layout;
