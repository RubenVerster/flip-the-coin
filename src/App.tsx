import { useState } from 'react';

const App = () => {
  const [score, setScore] = useState<number>(0);
  const [selectedGuess, setSelectedGuess] = useState<string>('spin-heads');
  const [guessMessage, setGuessMessage] = useState<string>(
    'Can you predict the outcome?\
  '
  );
  const [correctGuess, setCorrectGuess] = useState<boolean | null>(null);
  const [flipping, setFlipping] = useState<boolean>(false);

  const setMessageColor = () => {
    if (correctGuess === null) return 'text-black';
    if (correctGuess === true) return 'text-green-700';
    if (correctGuess === false) return 'text-red-700';
  };

  const changeGuess = (side: string) => {
    if (flipping) return;
    if (side === 'spin-heads') {
      setSelectedGuess('spin-heads');
      console.log(selectedGuess);
    } else if (side === 'spin-tails') {
      setSelectedGuess('spin-tails');
      console.log(selectedGuess);
    }
  };

  const coinFlip = () => {
    if (flipping) return;
    setFlipping(true);
    let coin = document.getElementById('coin');
    setCorrectGuess(null);
    setGuessMessage('👀');

    let side = Math.floor(Math.random() * 2);

    let sideStr: string;
    if (side === 1) {
      sideStr = 'spin-tails';
      coin!.className = 'coin-container spin-tails';
    } else {
      sideStr = 'spin-heads';
      coin!.className = 'coin-container spin-heads';
    }
    console.log(side, sideStr);

    setTimeout(() => {
      if (selectedGuess === sideStr) {
        setCorrectGuess(true);
        setGuessMessage('Correct! ^_^');
        setScore(score + 1);
      } else {
        setCorrectGuess(false);
        setGuessMessage('Wrong! ಥ_ಥ');
        setScore(0);
      }
    }, 3000);
    setTimeout(() => {
      setFlipping(false);
      setGuessMessage('Go again :P');
      setSelectedGuess('spin-heads');
      return (coin!.className = 'coin-container');
    }, 5555);
  };
  return (
    <div className="wrapper">
      <div className="card flex flex-col justify-between items-center rounded-md">
        <div className="card-header">
          <h1>Flip The Coin!</h1>
        </div>
        <div className="card-body flex flex-col items-center">
          <div className={`coin-wrapper ${flipping && 'move-coin'}`}>
            <div id="coin" className="coin-container">
              <div className="coin heads">HEADS</div>
              <div className="coin tails">TAILS</div>
            </div>
          </div>
        </div>
        <div className="card-footer flex flex-col items-center">
          <div className="guess flex flex-col justify-center">
            <h2 className={`guess-title ${setMessageColor()}`}>
              {guessMessage}
            </h2>
            <h2 className="guess-score">{score}</h2>

            <div className="guess-options flex flex-row justify-between mx-auto">
              <div
                onClick={() => changeGuess('spin-heads')}
                className={`guess-options-option ${
                  selectedGuess === 'spin-heads' ? 'selected' : 'not-selected'
                }`}
              >
                Heads
              </div>
              <div
                onClick={() => changeGuess('spin-tails')}
                className={`guess-options-option ${
                  selectedGuess === 'spin-tails' ? 'selected' : 'not-selected'
                }`}
              >
                Tails
              </div>
            </div>
            <button
              disabled={flipping}
              className="guess-flip mx-auto"
              onClick={() => coinFlip()}
            >
              Flip!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
