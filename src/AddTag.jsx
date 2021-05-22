import React from "react";

const AddTag = () => (
  <div className="ui left icon right labeled input">
    <input type="text" placeholder="Enter college name" id="enterTag" />
    <i aria-hidden="true" className="tags icon"></i>
    <div className="ui tag label label" id="addTag">
      Add Tag
    </div>
  </div>
);

export default AddTag;
