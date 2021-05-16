import React from "react";
import { Input } from "semantic-ui-react";

const AddTag = () => (
  //   <Input
  //     id="addTag"
  //     icon="tags"
  //     iconPosition="left"
  //     label={{ tag: true, content: "Add Tag" }}
  //     labelPosition="right"
  //     placeholder="Enter tags"
  //   />
  <div className="ui left icon right labeled input">
    <input type="text" placeholder="Enter college name" id="enterTag" />
    <i aria-hidden="true" className="tags icon"></i>
    <div className="ui tag label label" id="addTag">
      Add Tag
    </div>
  </div>
);

export default AddTag;
