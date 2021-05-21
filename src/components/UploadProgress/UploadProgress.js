import { Box, LinearProgress, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";

const UploadProgress = ({ file, setFile }) => {
  let buffer;
  const { url, progress } = useStorage(file);
  if (progress > 100) {
    buffer = 10;
  } else {
    const diff = Math.random() * 10;
    const diff2 = Math.random() * 10;
    const progressDiff = progress + diff;
    buffer = progressDiff + diff + diff2;
  }
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])
  console.log(url, progress);
  return (
    <Box display="flex" alignItems="center" className="mt-3">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="buffer"
          value={progress}
          color="secondary"
          valueBuffer={buffer}
          {...file}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          progress
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export default UploadProgress;
