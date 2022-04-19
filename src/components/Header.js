import React from "react";
import Score from './Score';

const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="text">
        <span>Rock, Paper, Scissors</span>
      </div>
      <Score text='Score' className='score-box__score' score={score}/>
    </div>
  );
};

export default Header;
