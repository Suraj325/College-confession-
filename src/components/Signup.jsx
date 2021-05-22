import { Divider, Container } from "@material-ui/core";
import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Menu from "./Menu";
const Signup = () => {
  return (
    <>
      <Menu />
      <Container maxWidth="sm" style={{ color: "#63078f" }}>
        <div className="app">
          <div className="i_con">
            <div className="icon_class">
              <PersonAddIcon fontSize="large" style={{ marginLeft: "40px" }} />
              <div className="text">Sign Up</div>
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
              <Form.TextArea
                label="About"
                placeholder="Tell us more about you..."
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
              <Button id="signup" variant="contained" color="primary">
                Signup
              </Button>
            </Form>
          </div>
          <Divider variant="middle" />
          <p className="text-center">
            <Link to="/login">Already have an Account</Link>
          </p>
        </div>
      </Container>
    </>
  );
};
export default Signup;
