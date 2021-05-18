import React from "react";
// import Header from "../Header";
import Slide from "../Slide";
import Card from "../Card";
import Menu from "./Menu";
const Collegetag = () => {
  return (
    <>
      {/* <Header /> */}
      <Menu />

      <br />
      <Slide />
      <hr />
      <div className="container">
        <h5 className=" " id="recent_post">
          Recent Posts of xyz college :
        </h5>
      </div>
      <Card />
      <br />
      <Card />
      <br />
      <Card />
      <br />
    </>
  );
};
export default Collegetag;
