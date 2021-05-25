import React from "react";
import Ckeditor from "../Ckeditor";
import Menu from "./Menu";
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
const StartWriting = () => {
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
        {/* <Header /> */}

        <hr />
        {/* <div className="container">
        <h3 className="text-capitalize text-center">
          write your confession 100% anonymously
        </h3>
      </div> */}
        <div className="container">
          <div>
            <form>
              <Ckeditor />
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default StartWriting;
