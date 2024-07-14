import React from "react";

import styles from "./styles.module.css";

function GuessInput({ onGuess, guess, setGuess, hasWon }) {
  return (
    <>
      <form onSubmit={onGuess}>
        <div className={styles.wrapper}>
          <input
            disabled={hasWon !== null}
            value={guess}
            pattern="[A-Z]{5}"
            aria-label="5 character word"
            onChange={(e) => setGuess(e.target.value.toUpperCase())}
            className={styles.input}
            id="guessInput"
            type="text"
            max="5"
          />
          <label htmlFor="guessInput">Enter guess:</label>
        </div>
      </form>
    </>
  );
}

export default GuessInput;
