import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PublishTag from "./PublishTag";
import ReactHtmlParser from "react-html-parser";

const Ckeditor = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="App">
        <div className="container" id="write_anonymous">
          <h3 className="text-center text-capitalize">
            write your confession 100% anonymously
          </h3>
        </div>
        <div className="mt-1"></div>
        <CKEditor
          editor={ClassicEditor}
          placeholder="Start writing ..."
          data="  "
          onReady={(editor) => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "250px",
                editor.editing.view.document.getRoot()
              );
            });
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setValue(data);
            console.log(ReactHtmlParser(value));
          }}
          // onBlur={(event, editor) => {}}
          // onFocus={(event, editor) => {}}
        />
        <PublishTag />
      </div>
    </>
  );
};

export default Ckeditor;
