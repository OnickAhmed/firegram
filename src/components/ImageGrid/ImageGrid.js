import { CircularProgress } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useState } from "react";
import useFireStore from "../Hooks/useFireStore";
import "./ImageGrid.css";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore("images");
  const [loader, setLoader] = useState(true);
  return (
    <>
      <div className="img-grid">
        {docs ? (
          docs.map((doc) => (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>
    </>
  );
};

export default ImageGrid;
