import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Avatar from "react-avatar-edit";
import { Button } from "bootstrap";

class Profileinput extends Component {
  constructor(props) {
    super(props);
    const src = "https://picsum.photos/200";
    this.state = {
      preview: null,
      src,
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="container">
        <h5 className="justify-content-center">
          Create your Anonymous character :
        </h5>
        <br />
        <div id="avatarprev" className="justify-content-center">
          <h6 className="text-center " style={{ margin: "1px 10px" }}>
            Upload your Avatar.
          </h6>

          <Avatar
            id="Avatarimage"
            width={150}
            height={135}
            onCrop={this.onCrop}
            onClose={this.onClose}
            src={this.state.src}
          />
          <img
            src={this.state.preview}
            alt="Preview"
            style={{
              height: "100px",
              width: "100px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
          />
        </div>
        <br />

        <Form>
          <Form.Group widths="equal" id="enterinput">
            <Form.Input
              fluid
              label="Anonymous username"
              placeholder="Enter your username"
            />

            <Form.Input
              fluid
              label="Password"
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>

          <Form.Group widths="equal" id="enterinput">
            <Form.TextArea
              label="About"
              placeholder="Tell us more about you..."
            />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />

          <Form.Button id="search">Submit</Form.Button>
        </Form>
        <div className="container d-flex justify-content-cente">
          <p>Already have account ?</p>
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
            <i class="icon-edit"></i> Login
          </a>
        </div>
      </div>
    );
  }
}

export default Profileinput;
