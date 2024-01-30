// CreditCard.js
import React from "react";
import "./CreditCard.css";

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bgColor,
  color,
  bank,
  owner,
}) => {
  const formatNumber = (number) => {
    return "●●●● ●●●● ●●●● " + number.slice(-4);
  };

  const getCardLogo = () => {
    if (type.toLowerCase() === "visa") {
      return "https://upload.wikimedia.org/wikipedia/commons/5/5a/Visa_2014.svg";
    } else if (type.toLowerCase() === "master card") {
      return "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg";
    } else {
      return null;
    }
  };

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={getCardLogo()} alt={type} className="card-logo" />
      <div className="card-number">{formatNumber(number)}</div>
      <div className="card-expiration-bank-holder">
        <div className="card-expiration-bank">
          <div className="card-expiration">
            Expires {expirationMonth}/{expirationYear % 100}
          </div>
          <div className="card-bank">{bank}</div>
        </div>
        <div className="card-owner">{owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
