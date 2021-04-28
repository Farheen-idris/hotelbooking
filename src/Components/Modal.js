import React from "react";
import { Modal } from "antd";

const ModalComponent = (props) => {
  const {
    isModalVisible,
    setIsModalVisible,
    isloginVisible,
    setLoginVisible,
  } = props;
  return (
    <div>
      <Modal
        title="Details"
        visible={isModalVisible}
        footer={null}
        onCancel={setIsModalVisible}
      >
        <div className="row">
          <h3
            style={{ textAlign: "center", margin: "15px", fontWeight: "bold" }}
          >
            EXECUTIVE SINGLE ROOM
          </h3>
          <div style={{ padding: "1% 2%" }}>
            <b>Description :</b>
            <div>
              <span
                style={{
                  color: "rgb(137, 137, 137)",
                  fontFamily: "Lato",
                  fontSize: "15.001px",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                Complimentary Buffet Breakfast(Not Applicable for check in Date)
                Non alcoholic welcome drink on arrival&nbsp; Complimentary Wi-Fi
                in the rooms 32Inche LED TV&nbsp;Cable Connected in every room.
                One way pick up or drop from railway station or airport. Well
                stocked mini bar in every room 24hrs
              </span>
              <br />
            </div>
            <ul>
              <li>
                Complimentary Buffet Breakfast(Not Applicable for check in Date)
                <br />
              </li>
              <li>
                Non alcoholic welcome drink on arrival
                <br />
              </li>
              <li>
                Complimentary Wi-Fi in the rooms
                <br />
              </li>
              <li>
                Complimentary Buffet Breakfast(Not Applicable for check in Date)
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
              <li>
                Complimentary Buffet Breakfast(Not Applicable for check in Date)
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
              <li>
                32Inche LED TV Cable Connected in every room.
                <br />
              </li>
            </ul>
          </div>
          <h5 style={{ padding: "2%" }}>
            <b>Room Ammenities : </b>
          </h5>
          <div className="row">
            <div className="col m4" style={{ width: "33.3333333333%" }}>
              <li>24-hour front desk</li>
            </div>
            <div className="col m4" style={{ width: "33.3333333333%" }}>
              <li>24-hour front desk</li>
            </div>{" "}
            <div className="col m4" style={{ width: "33.3333333333%" }}>
              <li>24-hour front desk</li>
            </div>{" "}
          </div>
        </div>
      </Modal>
      <Modal
        visible={isloginVisible}
        onOk={setLoginVisible}
        onCancel={setLoginVisible}
        footer={null}
      >
        <h3
          style={{
            textTransform: "capitalize",
            fontWeight: "400",
            color: "#f5ab35",
          }}
        >
          Please, login into your account
        </h3>
        <h4 style={{ textAlign: "center" }}>Enter Mobile Number</h4>
        <form action="/action_page.php">
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
              <select
                style={{
                  border: "none",
                  color: "#1c1b1b",
                  borderBottom: "1px solid #9e9e9e",
                  height: "2rem",
                  width: "88.6666666667%",
                  marginLeft: "50px",
                }}
              >
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+93">+93</option>
                <option value="+94">+94</option>
                <option value="+95">+95</option>
                <option value="+96">+96</option>
                <option value="+121">+121</option>
                <option value="+123">+123</option>
                <option value="+121">+121</option>
                <option value="+343">+343</option>
                <option value="+432">+432</option>
                <option value="+212">+212</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                style={{
                  border: "none",
                  borderBottom: "1px solid #9e9e9e",
                  color: "#1c1b1b",
                  fontSize: "110%",
                  width: "66.6666666667%",
                  marginLeft: "55px",
                }}
                type="tel"
                id="phone"
                name="phone"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
              <br />
              <input
                type="submit"
                value="Login"
                style={{ fontWeight: "400", backgroundColor: "#f5ab35" }}
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default ModalComponent;
