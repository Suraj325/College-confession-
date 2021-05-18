import React from "react";
import Comment from "./Comment";
import { Image } from "semantic-ui-react";
const Card = () => {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");

    if (dots.style.display === "none") {
      return (
        (dots.style.display = "inline"),
        (btnText.innerHTML = " more"),
        (moreText.style.display = "none")
      );
    } else {
      return (
        (dots.style.display = "none"),
        (btnText.innerHTML = " less"),
        (moreText.style.display = "inline")
      );
    }
  }

  return (
    <>
      <div className="container" id="savepost">
        <div className="card">
          <div className="card-body" id="card-style">
            {/* <div id="title_bookmark">
              <h5 className="card-title" id="cardtitle">
                Title
              </h5>
            </div> */}
            <div class="timeline-header">
              {/* <span class="userimage">
                <img s src="https://picsum.photos/40" alt="" />
              </span>
              <span class="username">
                <a href="#">John Doe</a>
                <small> </small>
              </span>
              <span
                class="pull-right text-muted"
                style={{
                  color: "white",
                  fontSize: "12px",
                  paddingLeft: "5px",
                }}
              >
                2 days ago
              </span> */}
              <div>
                <Image
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  avatar
                />
                <span class="username">
                  <a href="#">John Doe</a>
                  <small> </small>
                </span>
                <span
                  class="pull-right "
                  style={{
                    color: "rgb(214, 220, 226)",
                    fontSize: "12px",
                    paddingLeft: "5px",
                  }}
                >
                  2 days ago
                </span>
              </div>
            </div>

            <p id="cardpara" className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
              <span id="dots">...</span>
              <span id="more" style={{ display: "none" }}>
                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
                nec congue eget, auctor vitae massa. Fusce luctus vestibulum
                augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper
                ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                sed ornare turpis. Donec vitae dui eget tellus gravida
                venenatis. Integer fringilla congue eros non fermentum. Sed
                dapibus pulvinar nibh tempor porta. erisque enim ligula
                venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
              </span>
            </p>
            {/* <button className="btn" id="showmore" type="submit">
              more
            </button> */}
            <div id="moreLabel">
              <div>
                <button className="btn" onClick={myFunction} id="showmore">
                  more
                </button>
              </div>

              <div id="featured">
                <a
                  class="ui tag label"
                  style={{
                    color: "#63078f",
                    textDecoration: "none",
                  }}
                  href="/"
                >
                  IIT BHU
                </a>
              </div>
            </div>
          </div>
          <div className="card-header">
            <div
            // className="d-grid gap-2 d-md-flex justify-content-md-end"
            >
              <div id="cardfooter">
                <button type="button" id="footerbtn" className="btn btn-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>

                <button type="button" id="footerbtn" className="btn btn-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                  </svg>
                </button>
              </div>
              <Comment />
            </div>
          </div>
        </div>
        <div id="bookmark">
          <button type="button" className="btn btn-light" id="bkbutton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="rgb(89, 14, 119)"
              class="bi bi-bookmark-star"
              viewBox="0 0 16 16"
            >
              <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            </svg>
          </button>
          <button type="button" className="btn btn-light" id="bkbutton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="rgb(89, 14, 119)"
              class="bi bi-flag"
              viewBox="0 0 16 16"
            >
              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
