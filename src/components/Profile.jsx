import React from "react";
import Menu from "./Menu";
// import Avatarpic from "./Avatarpic";
import Profileinput from "./Profileinput";
import Loginpage from "./Loginpage";

import Profilepage from "./Profilepage";
const Profile = () => {
  return (
    <>
      <Menu />
      <hr />
      <Profileinput />
      <hr />

      <br />
      <Profilepage />
      <hr />

      <br />
      <Loginpage />
      <hr />
    </>
  );
};
export default Profile;
