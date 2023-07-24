import React, { useEffect, useState } from 'react';
import Star from './Star';
import PlayNum from './PlayNum';
import PlayAgain from './PlayAgain';
import Utils from './Utils';

const Game = () => {
  const [starsCount, setStarsCount] = useState(Utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(Utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [usedNumbers, setUsedNumbers] = useState([]);

  // timer
  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [secondsLeft, availableNums.length]);

  // check sum
  const hasWrongChoice = Utils.sum(candidateNums) > starsCount;

  // checking the status of the game
  const gameStatus =
    availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  // checking the status of a number
  const getNumberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return hasWrongChoice ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  // number click
  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    if (Utils.sum(newCandidateNums) !== starsCount) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStarsCount(Utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setUsedNumbers((prevUsedNumbers) => [...prevUsedNumbers, ...newCandidateNums]);
    }
  };

  // reset option
  const resetGame = () => {
    setStarsCount(Utils.random(1, 9));
    setAvailableNums(Utils.range(1, 9));
    setCandidateNums([]);
    setSecondsLeft(10);
    setUsedNumbers([]);
  };

  return (
    <div className="game">
      <div className="rule">
        <h3>Pick one or more numbers that sum to the number of showed stars</h3>
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={resetGame} gameStatus={gameStatus} />
          ) : (
            <Star range={Utils.range} count={starsCount} />
          )}
        </div>
        <div className="right">
          {Utils.range(1, 9).map((number) => (
            <PlayNum
              key={number}
              status={getNumberStatus(number)}
              number={number}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
      <div className="used-numbers" data-testid="used-numbers" >
        {usedNumbers.map((number) => (
          <span key={number} className="numberUsed">
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
