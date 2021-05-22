import React from "react";
import AddTag from "./AddTag";
const PublishTag = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-end mt-1" id="publish">
          <AddTag />
          <button className="btn btn-outline-success" id="search" type="submit">
            Publish
          </button>
        </div>
      </div>
    </>
  );
};
export default PublishTag;
