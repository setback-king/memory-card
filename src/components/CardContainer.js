import React from 'react'
import Card from "./Card"
import arrayShuffle from 'array-shuffle';



const CardContainer = ({flowerArray, clickCard}) => {

    const flowerElements = arrayShuffle(flowerArray).map(flower => {
        return (
            <Card cardClick={() => clickCard(flower.name)} flower={flower.url} name={flower.name} key={flower.id} />
        )
    })

    return (
        <div className="container">
           {flowerElements}   
        </div>
    )
}

export default CardContainer