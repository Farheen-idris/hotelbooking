import React from "react";

import "./Home.css";
import { Card } from "antd";

const Packages = () => {
  return (
    <div className="site-layout-content">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card
          style={{
            width: "70%",
            justifyContent: "center",
            borderRadius: "5px",
            marginLeft: "90px",
            boxShadow: "0 0 4px rgb(0 0 0 / 20%)",
          }}
        >
          <h3
            style={{
              paddingTop: "20px",
              color: "#000",
              textTransform: "capitalize",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            search result
          </h3>
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "0 auto",
              borderRadius: "50%",
              backgroundColor: "#f5ab35",
              position: "relative",
            }}
          >
            <i
              class="fa fa-search"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                color: "#fff",
                fontSize: "50px",
              }}
              aria-hidden="true"
            ></i>
          </div>
          <p style={{ fontSize: "130%", textAlign: "center" }}>
            No packages found in these dates !
          </p>
          <p style={{ fontSize: "100%", textAlign: "center" }}>
            Please try in other dates and good luck!
          </p>
        </Card>
        <Card
          style={{
            width: "30%",
            height: "auto",
            paddingLeft: "4%",
            paddingRight: "4%",
            borderRadius: "5px",
            marginLeft: "90px",
            boxShadow: "0 0 4px rgb(0 0 0 / 20%)",
          }}
        >
          <h3 style={{ fontSize: "25px", fontWeight: "bold" }}>
            Booking Summary
          </h3>
          <div style={{ width: "90%" }}>
            <img
              src="https://www.pinclipart.com/picdir/big/208-2083300_guest-booking-icon-bed-clipart.png"
              alt="booking"
              style={{
                height: "20%",
                width: "30%",
              }}
            />
          </div>
          <br />
          <p style={{ fontSize: "22px", textAlign: "center" }}>
            No Package Selected
          </p>
          <p
            style={{
              fontSize: "20px",
            }}
          >
            Click add package button to add the package
          </p>
          <br />
        </Card>
      </div>
    </div>
  );
};
export default Packages;
