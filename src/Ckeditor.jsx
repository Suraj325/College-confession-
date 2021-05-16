import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export class Ckeditor extends Component {
  render() {
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
              // const data = editor.getData();
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />

          <div class="d-flex justify-content-end mt-1" id="publish">
            <button
              className="btn btn-outline-success"
              id="search"
              type="submit"
            >
              Publish
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Ckeditor;
