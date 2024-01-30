import React from "react";
import PropTypes from "prop-types";
import "./Greetings.css";

const Greetings = ({ lang, children }) => {
  const greetingsMap = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  const greeting = greetingsMap[lang] || greetingsMap["en"]; // Default to English if lang is not provided or not recognized

  return (
    <div className="greetings-box">
      <p className="greetings">
        {greeting}, {children}!
      </p>
    </div>
  );
};

Greetings.propTypes = {
  lang: PropTypes.oneOf(["de", "en", "es", "fr"]).isRequired,
  children: PropTypes.string.isRequired,
};

export default Greetings;