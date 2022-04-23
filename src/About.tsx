import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>{gameName}</i> is a remake of the word game{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>.
      </p>
      <p>
        It's a lot like wordle, except you only get {maxGuesses} tries, <br /> 
        and there's only 5 possible letters, but also it doesn't have to be a real word.
        <br />
        The letters are P, E, N, I, & S. 🍆
        <br />
        After each guess, you get feedback.
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Absent, letter: "w" },
          { clue: Clue.Absent, letter: "o" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Elsewhere, letter: "d" },
        ]}
      />
      <p>
        <b>W</b> and <b>O</b> aren't in the target word at all. 🙅‍♀
      </p>
      <p>
        <b className={"green-bg"}>R</b> is correct! 🍆 The third letter is{" "}
        <b className={"green-bg"}>R</b> 💦
        .<br />
      </p>
      <p>
        <b className={"yellow-bg"}>D</b> occurs <em>elsewhere</em> in the target
        word. 🍑
        <br />
        <strong>(But NOT more than once. 🤔🍆💦)</strong>
      </p>
      <hr />
      <p>
        Let's move the <b>D</b> in our next guess:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "a" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Absent, letter: "k" },
        ]}
        annotation={"So close!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "d" },
          { clue: Clue.Correct, letter: "a" },
          { clue: Clue.Correct, letter: "r" },
          { clue: Clue.Correct, letter: "t" },
        ]}
        annotation={"Got it!"}
      />
      <p>
		The code for this website was built from modifying this {" "}
        <a href="https://github.com/lynn/hello-wordl/issues">repo</a>.
      </p>
      <p>


      </p>
    </div>
  );
}
