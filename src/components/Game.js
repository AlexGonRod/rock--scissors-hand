import React, { useEffect, useState } from "react";
import Icon from './Icon'

const Game = ({ score, myChoice, setScore, computerChoice, counter, setCounter }) => {
  const [playerWin, setPlayerWin] = useState("");


  const Result = () => {
    if (myChoice === 'rock' && computerChoice === 'scissors') {
      setPlayerWin('Win')
      setScore(score + 1)
    } else if (myChoice === 'rock' && computerChoice === 'paper') {
      setPlayerWin('Lose')
      setScore(score - 1)
    } else if (myChoice === 'scissors' && computerChoice === 'paper') {
      setPlayerWin('Win')
      setScore(score + 1)
    } else if (myChoice === 'scissors' && computerChoice === 'rock') {
      setPlayerWin('Lose')
      setScore(score - 1)
    } else if (myChoice === 'paper' && computerChoice === 'rock') {
      setPlayerWin('Win')
      setScore(score + 1)
    } else if (myChoice === 'paper' && computerChoice === 'scissors') {
      setPlayerWin('Lose')
      setScore(score - 1)
    } else {
      setPlayerWin('Draw')
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
          setCounter(counter - 1)
        }, 1000)
        : Result()

    return () => {
      clearInterval(timer)
    }
  }, [counter])

  

  return (
			<div className="game">
				<div className="game__you">
					<span className="text">You</span>
					<Icon
						dataId={`${myChoice}`}
						className={`icon icon-game-${myChoice}`}
						onClick={() => {}}
					/>
				</div>
				{counter === 0 && (
					<>
						<div className="game__play">
							<span className="text">
								You {playerWin}
							</span>
						</div>
						<div className="game__house">
							<span className="text">Bot</span>
							<Icon
								dataId={`${computerChoice}`}
								className={`icon icon-house-${computerChoice}`}
								onClick={() => {}}
							/>
						</div>
					</>
				)}
			</div>
	)
};

export default Game;
