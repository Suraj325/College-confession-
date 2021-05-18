import React from "react";

import { Card, Image, Button } from "semantic-ui-react";

const Profilepage = () => {
  return (
    <>
      <div className="d-flex container justify-content-end">
        <a
          class="btn"
          href="#"
          style={{
            color: "#63078f",
            backgroundColor: "white",
            marginRight: "5px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <i class="icon-edit"></i> Edit{" "}
        </a>

        <a
          class="btn"
          href="#"
          style={{ color: "#63078f", backgroundColor: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          <i class="icon-edit"></i> Logout
        </a>
      </div>
      <div className="container">
        <h5>My profile</h5>
        <div
          class="card"
          style={{ backgroundColor: "#63078f", color: "white" }}
        >
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
                class="rounded-circle"
                width="150"
                style={{ border: "0.1px solid white", padding: "4px" }}
              />
              <div class="mt-3">
                <h4>John Doe</h4>
                {/* <p class="text-secondary mb-1">Full Stack Developer</p>
                <p class="text-muted font-size-sm">
                  Bay Area, San Francisco, CA
                </p> */}
                <Card
                  class="text-secondary mb-1"
                  header="About"
                  //   meta="About"
                  description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profilepage;
