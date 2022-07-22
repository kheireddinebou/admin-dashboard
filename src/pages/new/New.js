import React, { useState } from "react";
import "./New.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

function New({ title, inputs }) {
  const [file, setFile] = useState();
  
  return (
    <div className="new">
      <div className="top">
        <p>{title}</p>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png"
            }
            alt="add new image"
          />
        </div>
        <div className="right">
          <form className="form">
            <div className="formInput">
              <label htmlFor="fileInput">
                image: <DriveFolderUploadIcon style={{ fontSize: "50px" }} />
              </label>
              <input
                onChange={e => setFile(e.target.files[0])}
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                
              />
            </div>

            {inputs.map(input => (
              <div key={input.id} className="formInput">
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default New;
