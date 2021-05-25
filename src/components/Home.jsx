import React, { useEffect, useState } from "react";
import axios from "axios";
// import Header from "../Header";
import Slide from "../Slide";
import Card from "../Card";
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
const Home = () => {
  const [Post, setPost] = useState([]);
  useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = () => {
    axios.get(`/api/user/getPost`).then((response) => {
      if (response.data.success) {
        console.log(response.data.user);
        setPost(response.data.user);
      } else {
        alert("Failed to get Post");
      }
    });
  };
  return (
    <>
      <Menu />
      <br />
      <Slide />
      <motion.div
        initial={{ opacity: 0, x: -1000 }}
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
        {/* <Header /> */}

        <hr />
        <div className="container">
          <h5 className="text-capitalize " id="recent_post">
            Recent Posts
          </h5>
        </div>
        {Post &&
          Post.map((user) => (
            <Card
              text={user.text}
              tag={user.tag}
              name={user.username}
              postId={user._id}
              vote={user.likes.length}
            />
          ))}
      </motion.div>
    </>
  );
};
export default Home;
