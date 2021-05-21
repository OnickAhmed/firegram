import { motion } from "framer-motion";
import React from "react";
import "./ImgModal.css";

const ImgModal = ({ selectedImg, setSelectedImg }) => {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleBackdropClick}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt="Enlarged Pic"
      />
    </motion.div>
  );
};

export default ImgModal;
