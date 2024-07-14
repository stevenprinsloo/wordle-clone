import React from "react";
import styles from "./styles.module.css";

function GameBanner({ hasWon, guessList, handleRestart }) {
  return (
    <>
      {hasWon !== null && (
        <>
          {hasWon ? (
            <div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>{guessList.length} guesses</strong>.
              </p>
              <button
                className={styles.restartButton}
                onClick={() => handleRestart()}
              >
                Restart
              </button>
            </div>
          ) : (
            <>
              <div class="sad banner">
                <p>
                  Sorry, the correct answer is <strong>LEARN</strong>.
                </p>
                <button
                  className={styles.restartButton}
                  onClick={() => handleRestart()}
                >
                  Restart
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default GameBanner;
