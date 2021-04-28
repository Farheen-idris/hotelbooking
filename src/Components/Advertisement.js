import { Card } from "antd";
import React from "react";
const Advertisement = () => {
  return (
    <Card
      style={{
        width: "30%",
        height: "50%",
        paddingLeft: "4%",
        paddingRight: "4%",
        borderRadius: "5px",
        marginLeft: "40px",
        boxShadow: "0 0 4px rgb(0 0 0 / 20%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "25px", fontWeight: "bold" }}>Advertisement</h3>
        <div style={{ width: "90%" }}>
          <img
            alt="advertise
          "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/7_Up_-_You_like_it%2C_it_likes_you%2C_1948.jpg/1200px-7_Up_-_You_like_it%2C_it_likes_you%2C_1948.jpg"
            style={{
              height: 400,
              width: 300,
            }}
          />
        </div>
        <br />
        <p style={{ fontSize: "22px", textAlign: "center" }}>
          Dummy Advertisement
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Contact ! Contact! Contact!
        </p>
        <br />
      </div>
    </Card>
  );
};
export default Advertisement;
