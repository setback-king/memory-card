import React, {useState} from 'react'



const Card = ({cardClick, flower, name}) => {

    const [hover, setHover] = useState(false)

    const borderColor = hover ? {border: "3px solid black"} : {border: "1px solid #c0c49b"}
    

    return (
        <div style={borderColor} onClick={cardClick}  className="card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={flower} alt={name} />
            <span className="flower--name">{name}</span>
        </div>
    )
}

export default Card