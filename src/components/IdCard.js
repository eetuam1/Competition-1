import React from "react";
import PropTypes from "prop-types";
import "./IdCard.css"; 

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  // Convert height from cm to meters
  const meters = height / 100;
  // Format the height to have one decimal place and append 'm'
  const formattedHeight = meters.toFixed(2) + 'm';

  return (
    <div className="id-card">
      <div className="picture">
        <img src={picture} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="details">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {formattedHeight}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

IdCard.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(["male", "female"]).isRequired,
  height: PropTypes.number.isRequired,
  birth: PropTypes.instanceOf(Date).isRequired,
  picture: PropTypes.string.isRequired,
};

export default IdCard;
