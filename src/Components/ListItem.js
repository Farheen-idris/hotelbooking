import React from "react";
import { Card } from "antd";
import Price from "./Price";

const ListItem = (props) => {
  const [available, setAvailable] = React.useState(false);
  const { data, setIsModalVisible, currency } = props;
  return (
    <div style={{ marginLeft: 30 }}>
      {data.map((item, i) => (
        <Card
          id={i}
          style={{
            boxShadow: "0 0 4px rgb(0 0 0 / 20%)",
            borderRadius: "5px",
            width: 1120,
            // marginLeft: "70px",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px",

              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33.3333333333%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  marginTop: "10%",
                }}
              >
                <img
                  alt="room"
                  width="320px"
                  height="320px"
                  src="https://d3ki85qs1zca4t.cloudfront.net/bookingEngine/uploads/17702131351308004063Executive-Room-1-1200x796.jpg"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "66.6666666667%",
              }}
            >
              <div
                style={{
                  marginTop: "6%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "33.6666666667%",
                  }}
                >
                  <h2
                    style={{
                      cursor: "pointer",
                      color: "#000",
                      textTransform: "capitalize",
                      fontWeight: "400",
                      textAlign: "left",
                      marginBottom: "3%",
                    }}
                    onClick={() => setIsModalVisible(true)}
                  >
                    {item.roomType}
                  </h2>
                  <div>
                    <p>
                      Max Room capacity:
                      {item.capacity}
                      <i className="fa fa-male" aria-hidden="true"></i>
                      <i className="fa fa-child" />
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "5%",
                    }}
                  >
                    <ul>
                      <li>24-hour front desk</li>
                      <li>
                        <i className="fa fa-lock" />
                        24-hour security
                      </li>
                      <li>
                        <i className="fa fa-car" />
                        Parking
                      </li>
                    </ul>
                  </div>
                </div>
                <Price price={item.price} currency={currency} />
              </div>
              <button
                style={{
                  backgroundColor: item.availability ? "red" : "grey",
                  fontWeight: "400",
                  color: "white",
                  width: 120,
                  marginLeft: 530,
                  marginTop: 90,
                }}
                disabled={!item.availability}
                onClick={() => setAvailable(!available)}
              >
                {item.availability ? "Available" : "Not Available"}
              </button>
            </div>
          </div>

          <div
            className="row"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px",
            }}
          ></div>
          {item.availability && available && (
            <>
              <hr />
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
                    width: "33.3333333333%",
                  }}
                >
                  <ul>
                    <li>Room Only</li>
                  </ul>{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "33.3333333333%",
                    border: "1px",
                    borderStyle: "dashed",
                  }}
                >
                  <h1>Rooms|Guest</h1>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "65%",
                      position: "relative",
                      top: "-5px",
                      color: "#f5ab35",
                      fontWeight: "500",
                    }}
                  >
                    1 Room(s) 2 Adults, 0 Kids
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "16.6333333333%",
                  }}
                >
                  <ul>
                    <li>
                      <span>
                        <strike>
                          <i className="fa fa-inr" /> 2850
                        </strike>
                      </span>
                      <br />
                      <i className="fa fa-inr" /> 2000
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "16.6333333333%",
                  }}
                >
                  <ul>
                    <li style={{ marginLeft: "10%" }}>
                      <button
                        style={{
                          backgroundColor: "#f5ab35",
                          width: "auto",
                          margin: "0 auto",
                          backgroundPosition: "50%",
                        }}
                      >
                        Add Rooms
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
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
                    width: "33.3333333333%",
                  }}
                >
                  <ul>
                    <li>Room Only</li>
                  </ul>{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "33.3333333333%",
                    border: "1px",
                    borderStyle: "dashed",
                  }}
                >
                  <h1>Rooms|Guest</h1>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "65%",
                      position: "relative",
                      top: "-5px",
                      color: "#f5ab35",
                      fontWeight: "500",
                    }}
                  >
                    1 Room(s) 2 Adults, 0 Kids
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "16.6333333333%",
                  }}
                >
                  <ul>
                    <li>
                      <span>
                        <strike>
                          <i className="fa fa-inr" /> 2850
                        </strike>
                      </span>
                      <br />
                      <i className="fa fa-inr" /> 2000
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "16.6333333333%",
                  }}
                >
                  <ul>
                    <li style={{ marginLeft: "10%" }}>
                      <button
                        style={{
                          backgroundColor: "#f5ab35",
                          width: "auto",
                          margin: "0 auto",
                          backgroundPosition: "50%",
                        }}
                      >
                        Add Rooms
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ListItem;
