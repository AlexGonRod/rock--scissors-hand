import React, {useState} from "react";
import Header from './Header';
import Nav from './Nav';
import Game from './Game';
import Icon from './Icon';
const choices = ['rock', 'paper', 'scissors'];

const Play = ({ score, setScore, user }) => {
  const [myChoice, setMyChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  const [counter, setCounter] = useState(2)

  const newHousePick = () => {
		setComputerChoice(choices[Math.floor(Math.random() * 3)])
	}
  
const handlerSetChoice = (e) => {
    setCounter(1)
    setMyChoice(e.target.dataset.id);
    newHousePick();
}

  return (
		<>
		  <Nav user={user }/>
			<Header score={score} />
			<div className="play">
				<div className="items">
					{choices.map((item, index) => (
						<Icon
							key={index}
							dataId={`${item}`}
							onClick={handlerSetChoice}
							className={`icon icon-play-${item}`}
						/>
					))}
				</div>
				{myChoice && (
					<Game
						myChoice={myChoice}
						score={score}
						setScore={setScore}
						computerChoice={computerChoice}
						counter={counter}
						setCounter={setCounter}
					/>
				)}
			</div>
		</>
	)
}

export default Play;
