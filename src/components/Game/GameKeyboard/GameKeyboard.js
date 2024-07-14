import React from "react";
import styles from "./styles.module.css";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
}

const GameKeyboard = ({ validatedGuesses }) => {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className={styles["keyboard"]}>
      {ROWS.map((row, index) => (
        <div className={styles["keyboard-row"]} key={index}>
          {row.map((letter) => (
            <div key={letter} className={`key ${statusByLetter[letter] || ""}`}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameKeyboard;
