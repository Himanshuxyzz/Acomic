import React, { useState } from "react";
import "./Quote.css";

function separateString(str, cols) {
  const length = Math.ceil(str.length / cols);
  const substrings = [];

  for (let i = 0; i < str.length; i += length) {
    const substring = str.substring(i, i + length);
    substrings.push(substring);
  }

  return substrings;
}

const Quote = ({ message, cols }) => {
  const quote = separateString(message, cols);
  return (
    <div className="quote mt-2 ">
      {quote.map((_, index) => {
        console.log(index);
        return (
          <div key={index} className=" quote_wrapper">
            {quote[index].split("").map((char, index) => {
              return <span key={index}>{char}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Quote;
