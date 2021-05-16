import React from "react";
import { Button, Collapse, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import Collapscomment from "./Collapscomment";
import SendIcon from "@material-ui/icons/Send";
function Comment() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        id="footerbtn"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-chat-square-text"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <InputGroup
            className="mb-3"
            style={{
              borderRadius: "5px",
              paddingTop: "5px",
            }}
          >
            <FormControl
              placeholder="Write comment . . ."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ border: "1px solid #63078f" }}
            />
            <InputGroup.Append>
              <Button
                id="footerbtn"
                style={{
                  border: "1px  solid #63078f ",
                  color: "#63078f",
                  height: "34px",
                  width: "40px",
                }}
              >
                <SendIcon />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-caret-right"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                </svg> */}
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <Collapscomment />
        </div>
      </Collapse>
    </>
  );
}

export default Comment;
