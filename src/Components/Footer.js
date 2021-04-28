import React from "react";

const Footer = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          We Accept payment here
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          Follow us
        </div>
      </div>
      Ant Design ©2018 Created by Ant UED
    </>
  );
};
export default Footer;
