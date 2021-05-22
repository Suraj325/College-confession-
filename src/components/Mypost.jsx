import React from "react";
import Comment from "../Comment";
import { Image } from "semantic-ui-react";
const Mypost = () => {
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
      <div className="container" id="mysavepost">
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
      </div>
    </>
  );
};

export default Mypost;
