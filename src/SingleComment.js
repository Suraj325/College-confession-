import React, { useState } from "react";
import { Comment } from "antd";
import SendIcon from "@material-ui/icons/Send";
import Axios from "axios";
function SingleComment(props) {
  console.log(props);

  const [CommentValue, setCommentValue] = useState("");
  const [OpenReply, setOpenReply] = useState(false);
  const openReply = () => {
    setOpenReply(!OpenReply);
  };

  const handleChange = (e) => {
    setCommentValue(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    const variables = {
      writer: localStorage.getItem("_id"),
      postId: props.postId,
      responseTo: props.comment._id,
      content: CommentValue,
    };

    Axios.post(`/api/comment/saveComment`, variables, config)
      .then((response) => {
        if (response.data.success) {
          setCommentValue("");
          setOpenReply(!OpenReply);
          props.refreshFunction(response.data.result);
        } else {
          alert("Failed to save Comment");
        }
      })
      .catch((error) => alert("Failed to save Comment"));
  };

  const actions = [
    <span
      onClick={openReply}
      key="comment-basic-reply-to"
      style={{ cursor: "pointer" }}
    >
      Reply to
    </span>,
  ];
  console.log(props.comment.writer.username);

  return (
    <div>
      <Comment
        actions={actions}
        author={
          <h4
            style={{
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "#63078f",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#63078f"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>{" "}
            <small></small>
            {props.comment.writer && props.comment.writer.username}
          </h4>
        }
        content={<p style={{ marginLeft: "24px" }}>{props.comment.content}</p>}
      ></Comment>

      {OpenReply && (
        <form className="d-flex px-1 py-1 mt-4" onSubmit={onSubmit}>
          <input
            className="form-control me-2"
            type="search"
            aria-label="Search"
            onChange={handleChange}
            value={CommentValue}
            placeholder="write some comments"
          />
          <button
            class="btn btn-outline-primary "
            type="submit"
            id="search"
            style={{ marginLeft: "0px" }}
            onClick={onSubmit}
          >
            <SendIcon />
          </button>
        </form>
      )}
    </div>
  );
}

export default SingleComment;
