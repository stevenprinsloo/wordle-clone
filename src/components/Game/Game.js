import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import GameBanner from "./GameBanner";
import GameKeyboard from "./GameKeyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(null);

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuessList([]);
    setHasWon(null);
  }

  const validatedGuesses = guessList.map((guess) => checkGuess(guess, answer));

  const onGuess = (e) => {
    e.preventDefault();
    setGuessList((prevGuessList) => [...prevGuessList, guess]);
    setGuess("");
    if (guess === answer) {
      setHasWon(true);
    }
    if (guessList.length >= 5) {
      setHasWon(false);
    }
  };

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput
        hasWon={hasWon}
        onGuess={onGuess}
        setGuess={setGuess}
        guess={guess}
      />
      <GameBanner
        setGuessList={setGuessList}
        setAnswer={setAnswer}
        guessList={guessList}
        hasWon={hasWon}
        handleRestart={handleRestart}
        setHasWon={setHasWon}
      />
      <GameKeyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
