import React from "react";

const Price = (props) => {
  const { price, currency } = props;
  const actualprice = price.actualprice;
  const discount = price.discount;
  const discountamt = (discount / 100) * actualprice;
  const salesprice = actualprice - discountamt;
  const savingPrice = actualprice - salesprice;
  const dollarRate = 75;
  const euroRate = 80;
  const poundRate = 50;
  return (
    <div
      className="col s12 m4"
      style={{
        backgroundColor: "rgb(245, 245, 245)",
        padding: "2%",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        width: "66.6666666667%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span>
          <p style={{ color: "#4caf50", fontWeight: "400" }}>
            <span>You Save</span>
            <i
              className={
                currency === "INR"
                  ? "fa fa-inr"
                  : currency === "USD"
                  ? "fa fa-usd"
                  : currency === "EUR"
                  ? "fa fa-eur"
                  : "fa fa-gbp"
              }
            />
            {currency === "INR"
              ? savingPrice
              : currency === "USD"
              ? savingPrice * dollarRate
              : currency === "EUR"
              ? savingPrice * euroRate
              : savingPrice * poundRate}
            <span
              style={{
                display: "inline-block",
                width: "auto",
                height: "16px",
                backgroundColor: "#eb2026",
                borderRadius: "1px 2px 2px 1px",
                borderLeft: "1px solid #eb2026",
                marginLeft: "10px",
                position: "relative",
                color: "#fff",
                fontWeight: "300",
                fontFamily: "Source Sans Pro,sans-serif",
                fontSize: "55%",
                lineHeight: "16px",
                padding: "0 4px",
                top: "-3px",
              }}
            >
              {discount} %
            </span>
          </p>
          <span>
            <p>
              <strike>
                <i
                  className={
                    currency === "INR"
                      ? "fa fa-inr"
                      : currency === "USD"
                      ? "fa fa-usd"
                      : currency === "EUR"
                      ? "fa fa-eur"
                      : "fa fa-gbp"
                  }
                />

                {currency === "INR"
                  ? actualprice
                  : currency === "USD"
                  ? actualprice * dollarRate
                  : currency === "EUR"
                  ? actualprice * euroRate
                  : actualprice * poundRate}
              </strike>
            </p>
          </span>
          <p
            style={{
              color: "#000",
              fontWeight: "400",
              fontSize: "120%",
            }}
          >
            <span>From</span>
            <i
              className={
                currency === "INR"
                  ? "fa fa-inr"
                  : currency === "USD"
                  ? "fa fa-usd"
                  : currency === "EUR"
                  ? "fa fa-eur"
                  : "fa fa-gbp"
              }
            />

            {currency === "INR"
              ? salesprice
              : currency === "USD"
              ? salesprice * dollarRate
              : currency === "EUR"
              ? salesprice * euroRate
              : salesprice * poundRate}
          </p>
          <p style={{ color: "#000" }}>per room per night</p>
        </span>
      </div>
    </div>
  );
};
export default Price;
