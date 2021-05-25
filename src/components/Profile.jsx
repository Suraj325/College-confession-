import React from "react";
import Menu from "./Menu";
import Profilepage from "./Profilepage";
import { motion } from "framer-motion";

const pageVariants = {
  in: { opacity: 1, x: 0 },
  out: {
    opacity: 0,

    y: "100%",
  },
};
const pageTransitions = {
  duration: 0.5,
};
const Profile = ({ history }) => {
  if (!localStorage.getItem("authToken")) {
    history.push("/login");
    alert("Please Login");
  }
  return (
    <>
      <Menu />
      <motion.div
        initial={{ opacity: 0, x: -1000 }}
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <hr />
        <Profilepage />
      </motion.div>
    </>
  );
};
export default Profile;
