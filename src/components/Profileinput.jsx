import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Avatar from "react-avatar-edit";

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
      </div>
    );
  }
}

export default Profileinput;
