import React, { useState } from "react";
import { Form } from "react-bootstrap";
import UploadProgress from "../UploadProgress/UploadProgress";
import "./UploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const fileType = ["image/png", "image/jpg", "image/jpeg"];
  const uploadHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && fileType.includes(selectedFile.type)) {
      setError("");
      setFile(selectedFile);
    } else {
      setFile("");
      setError("*** Please select an image file (png, jpg, jpeg)");
    }
  };
  return (
    <Form>
      <label className="uploadButton mt-0">
              +
              <input
                type="file"
                style={{ display: "none" }}
                name="image"
                accept="image/*"
                onChange={uploadHandler}
              />
            </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <UploadProgress file={file} setFile={setFile} /> }
      </div>
    </Form>
  );
};

export default UploadForm;
