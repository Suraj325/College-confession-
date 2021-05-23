import React from "react";
import image1 from "./WhatsApp Image 2021-05-23 at 20.45.54.jpeg";
import image2 from "./WhatsApp Image 2021-05-23 at 20.52.23.jpeg";
import image3 from "./WhatsApp Image 2021-05-23 at 20.58.51.jpeg";
const Slide = () => {
  return (
    <>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                id="slideimage"
                src={image1}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                id="slideimage"
                src={image2}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                id="slideimage"
                src={image3}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Slide;
