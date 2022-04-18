import React from 'react'

const Score = ({score, savedScore}) => {
    return (
        <div className="score">
            <span>Score: {score} </span>
            <span>Best Score: {savedScore}</span>
        </div>
    )
}

export default Score