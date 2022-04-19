import React from 'react';

const Score = ({text, className, score}) => {
    return (
        <div className="score-box">
            <span>{text}</span>
            <div className={className}>{score}</div>
        </div>
    )
}

export default Score
