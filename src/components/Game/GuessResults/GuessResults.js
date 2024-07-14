import React from "react";

import { range } from "../../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";
import Guess from "../Guess";

function GuessResults({ validatedGuesses }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess value={validatedGuesses[num]} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
