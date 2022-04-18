import React, {useState, useEffect} from 'react'
import Score from "../utilities/Score"
import CardContainer from "./CardContainer"
import Flowers from "../data/flower-data.json"
import arrayShuffle from 'array-shuffle';



const Game = () => {

    const [score, setScore] = useState(0)

    // mock api call for stored data 
    const [flowers, setFlowers] = useState([])

    // holds flowers clicked on
    const [clickedFlowers, setClickedFlowers] = useState([])

    const [bestScore, setBestScore] = useState(0)
   

    function updateScore(){
        setScore(prevValue => prevValue + 1)
     
      }

    useEffect(() => {
        setFlowers(Flowers)
    }, [])

    useEffect(() => {
        if(score > bestScore)
        localStorage.setItem('bestScore', JSON.stringify(score));
        setBestScore(localStorage.getItem('bestScore'))
      }, [score]);



    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('bestScore'));
    if (items) {
     setBestScore(items);
    }
    else setBestScore(0)

  }, []);

    useEffect(() => {
        arrayShuffle(Flowers)
    }, [clickedFlowers])

    function newGame(){
        setClickedFlowers([])
        setScore(-1) 
       
    }

    function clickCard(name){
        clickedFlowers.includes(name) ?    

        newGame()

        :
        setClickedFlowers(prevState => [...prevState, name])
        updateScore()
    
      
    }

    function saveBestScore() {
        if (score > localStorage.getItem("bestScore")) {
            localStorage.setItem("bestScore", score)
        }
    }


    return (
        <div className="main">
            
            <CardContainer flowerArray={flowers} clickCard={clickCard} />  
            <Score score={score} savedScore={bestScore}/>
           
        </div>
    )
}

export default Game