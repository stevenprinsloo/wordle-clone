/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = "✓";

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: "correct",
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = "incorrect";
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = "misplaced";
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

export function checkLetter(letter, guessList, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  console.log({ letter, guessList });

  if (!letter) {
    return null;
  }

  const guessChar = letter.toUpperCase();
  let guessedLetters = [];

  guessList.map((guess) => {
    const computedGuessLetters = checkGuess(guess.label, answer);

    console.log({ computedGuessLetters });

    computedGuessLetters.forEach((letterObject) => {
      if (
        guessedLetters.some((item) => item.letter === letterObject.letter) ===
        false
      ) {
        guessedLetters = [
          ...guessedLetters,
          {
            letter: letterObject.letter,
            status: letterObject.status,
          },
        ];
      } else {
        guessedLetters = guessedLetters.map((item) => {
          if (item.letter === letterObject.letter) {
            return {
              ...item,
              status: letterObject.status,
            };
          }

          return item;
        });
      }
    });
  });

  const letterObject = guessedLetters.find((item) => item.letter === guessChar);

  if (letterObject) {
    return letterObject;
  }

  return {
    letter: guessChar,
    status: null,
  };
}
