import React, { useState } from "react";
import { motion, spring } from "framer-motion";
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

const Quote = ({ message, cols}) => {
  const quote = separateString(message, cols);
  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.55, delayChildren: 0.20 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="quote mt-2 ">
      {quote.map((_, index) => {
        console.log(index);
        return (
          <motion.div
            key={index}
            className="quote_wrapper"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {quote[index].split("").map((char, index) => {
              return (
                <motion.span variants={child} key={index}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Quote;
