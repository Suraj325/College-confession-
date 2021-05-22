import React from "react";
import { Form } from "semantic-ui-react";

const Loginpage = () => {
  return (
    <div className="container">
      <br />
      <h5>Login</h5>
      <Form>
        <Form.Group widths="equal" id="enterinput">
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
        </Form.Group>

        <Form.Button id="search">Login</Form.Button>
      </Form>
      <div
        id="signup"
        className="container d-flex justify-content-cente"
        //   style={{ backgroundColor: "red" }}
      >
        <p>Don`t have account/Forgot password ?</p>
        <a
          href="#"
          style={{
            color: "#63078f",
            marginLeft: "5px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          <i class="icon-edit"></i> Create account
        </a>
      </div>
    </div>
  );
};

export default Loginpage;
