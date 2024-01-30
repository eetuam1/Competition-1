import React from 'react';
import './CreditCard.css';

class CreditCard extends React.Component {
  render() {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = this.props;

    const lastFourDigits = number.slice(-4);

    return (
      <div
        className="credit-card"
        style={{
          backgroundColor: bgColor,
          color: color,
        }}
      >
        <div className="card-type">{type}</div>
        <div className="card-number">**** **** **** {lastFourDigits}</div>
        <div className="card-expiration">Expires {expirationMonth}/{expirationYear}</div>
        <div className="card-bank">{bank}</div>
        <div className="card-owner">{owner}</div>
      </div>
    );
  }
}

const CreditCardsContainer = () => (
    <div className="credit-cards-container">
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
      
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
    </div>
  );
  
  export default CreditCardsContainer;
