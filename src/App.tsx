const App = () => {
  return (
    <div className="wrapper">
      <div className="card flex flex-col justify-between items-center rounded-md">
        <div className="card-header">
          <h1>Flip The Coin!</h1>
        </div>
        <div className="card-body flex flex-col items-center">
          <div className="coin-wrapper">
            <div className="coin-container" onClick={() => alert('flip')}>
              <div className="coin coin-heads">HEADS</div>
              <div className="coin coin-tails">TAILS</div>
            </div>
          </div>
        </div>
        <div className="card-footer flex flex-col items-center">
          <div className="guess">
            <h2 className="guess-title">Can you predict the outcome?</h2>
            <h2 className="guess-score">0</h2>
            <div className="guess-options flex flex-row justify-between">
              <div className="guess-options-option selected">Heads</div>
              <div className="guess-options-option not-selected">Tails</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
