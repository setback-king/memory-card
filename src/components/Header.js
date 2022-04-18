import React from 'react'
//import Flower from "../assets/flower2.png"

const Header = () => {
    return (
      <div className="header">
        <img src="assets/flower2.png" alt="" />
        <div className="title--container">
          <h1 className="title">Flower Memorization Game</h1>
          <hr />
          <p className="instructions">Click on flower cards. Each unique card clicked equals one point added to score. If same flower card is clicked on twice, game over!</p>
        </div>
        <img src="assets/flower2.png" alt="" />
      </div>
    )
}

export default Header