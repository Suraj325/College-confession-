import { Divider, Container } from "@material-ui/core";
import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import PersonIcon from "@material-ui/icons/Person";
import Menu from "./Menu";
const Login = () => {
  return (
    <>
      <Menu />
      <Container maxWidth="sm" style={{ color: "#63078f" }}>
        <div className="app">
          <div className="i_con">
            <div className="icon_class">
              <PersonIcon fontSize="large" style={{ marginLeft: "30px" }} />
              <div className="text">Log In</div>
            </div>
          </div>
          <div className="row m-2">
            <Form id="enter">
              <Form.Input
                fluid
                label="Username"
                placeholder="Enter your username"
              />

              <Form.Input
                fluid
                label="Password"
                type="password"
                placeholder="Enter password"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    name="checkedI"
                  />
                }
                label="Remember me"
              />
              <Button id="login" variant="contained" color="primary">
                Login
              </Button>
            </Form>
          </div>
          <Divider variant="middle" />
          <p className="text-center">
            <Link to="/signup" className="text-black-50">
              Don't have an Account
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};
export default Login;
