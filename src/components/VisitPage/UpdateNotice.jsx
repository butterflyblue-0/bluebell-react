import React from "react";
import "./UpdateNotice.css";

const UpdateNotice = () => {
  return (
    <div className="update-notice">
      <div className="update-title">
        <span className="italic">Updates</span>
        <span className="bold">from the Little Creamery</span>
      </div>
      <div className="update-text">
        Our facility will be closed on Monday, May 26, in observance of Memorial Day.
      </div>
    </div>
  );
};

export default UpdateNotice;
