import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PublishTag from "./PublishTag";
import ReactHtmlParser from "react-html-parser";
const Ckeditor = (props) => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="App">
        <div className="container">
          {errors && <h4>{errors}</h4>}
          {loading && <h5>{success}</h5>}
        </div>
        <br />
        <div className="container" id="write_anonymous">
          <h3 className="text-center text-capitalize">
            write your confession 100% anonymously
          </h3>
        </div>
        <div className="mt-1"></div>
        <CKEditor
          editor={ClassicEditor}
          placeholder="Start writing ..."
          data={message}
          onReady={(editor) => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "250px",
                editor.editing.view.document.getRoot()
              );
            });
          }}
          onChange={(e, editor) => {
            let data = editor.getData();
            setMessage(data);
          }}
          // onBlur={(e, editor) => {}}
          // onFocus={(e, editor) => {}}
        />
        <PublishTag
          text={ReactHtmlParser(message)}
          onChange={(value) => {
            setLoading(value);
          }}
          onSet={(value) => setSuccess(value)}
          onError={(value) => setError(value)}
        />
        {/* <div>{ReactHtmlParser(message)}</div> */}
      </div>
    </>
  );
};

export default Ckeditor;
