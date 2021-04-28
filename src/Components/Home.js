import React, { useState } from "react";
import { Layout } from "antd";
import sheetal from "../images/sheetal.jpg";
import Room1 from "../images/room.jpg";
import Room2 from "../images/room.jpg";
import Room3 from "../images/room.jpg";
import { DatePicker, Space } from "antd";
import moment from "moment";
import "./Home.css";
import Navbar from "./Navbar";
import ListItem from "./ListItem";
import ModalComponent from "./Modal";
import FooterPanel from "./FooterPanel";
import FooterPage from "./Footer";
import PackagePage from "./Packages";
import Advertisement from "./Advertisement";

const { RangePicker } = DatePicker;

const { Content, Footer } = Layout;

const data = [
  {
    id: 1,
    image: "room.jpg",
    roomType: "EXECUTIVE  ROOM",
    capacity: "1",
    availability: true,
    price: {
      actualprice: 4000,
      discount: 20,
    },
  },
  {
    id: 2,
    image: { Room1 },
    roomType: "EXECUTIVE SINGLE ROOM",
    capacity: 2,
    availability: false,
    price: {
      actualprice: 2000,
      discount: 5,
    },
  },
  {
    id: 3,
    image: { Room2 },
    roomType: "EXECUTIVE DOUBLE ROOM",
    capacity: 3,
    availability: true,
    price: {
      actualprice: 3000,
      discount: 10,
    },
  },
  {
    id: 4,
    image: { Room3 },
    roomType: "EXECUTIVE SINGLE ROOM",
    capacity: 1,
    availability: false,
    price: {
      actualprice: 5000,
      discount: 30,
    },
  },
];

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}
const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [price, setPrice] = useState("INR");
  const [display, setDisplay] = useState("about");

  const [isloginVisible, setLoginVisible] = useState(false);
  const [packages, setPackages] = useState("Packages");

  const handleDisplay = (data) => {
    setDisplay(data);
  };

  const loginModal = () => {
    setLoginVisible(true);
  };
  const handlePackages = (value) => {
    setPackages(value);
  };

  return (
    <Layout>
      <div className="logo" />
      <Navbar
        display={display}
        setDisplay={handleDisplay}
        price={price}
        setPrice={setPrice}
        loginModal={loginModal}
        packages={packages}
        setPackages={handlePackages}
      />
      <div
        style={{
          flexDirection: "row",
        }}
      >
        <Content style={{ padding: "0px", marginTop: "1px" }}>
          <Space direction="vertical" size={1}>
            <div
              style={{
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  top: 200,
                  left: 400,
                  padding: 20,
                  width: 800,
                }}
              >
                <RangePicker
                  style={{ width: 600 }}
                  ranges={{
                    Today: [moment(), moment()],
                    "This Month": [
                      moment().startOf("month"),
                      moment().endOf("month"),
                    ],
                  }}
                  onChange={onChange}
                />
                <button className="btn-check">Check Availability</button>
              </div>
              <div style={{ zIndex: 10, margin: 30 }}>
                <img
                  alt="sheetal"
                  width="1650px"
                  height="500px"
                  src={sheetal}
                />
              </div>
            </div>
          </Space>
          {packages === "Packages" ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ListItem
                data={data}
                setIsModalVisible={setIsModalVisible}
                currency={price}
              />
              <Advertisement />
            </div>
          ) : (
            <PackagePage />
          )}
        </Content>
      </div>
      {/* About */}
      <FooterPanel display={display} setDisplay={handleDisplay} />
      {/* FooterPage  */}
      <Footer style={{ textAlign: "center", color: "black" }}>
        <FooterPage />
      </Footer>
      <ModalComponent
        isModalVisible={isModalVisible}
        setIsModalVisible={() => setIsModalVisible(false)}
        isloginVisible={isloginVisible}
        setLoginVisible={() => setLoginVisible(false)}
      />
    </Layout>
  );
};
export default Home;
