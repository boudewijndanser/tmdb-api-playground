import React from 'react'

const movieCard = (props) => {
    return (
        <div className="movieCard">
        <img className="movieCardimg"src= {`${props.url}${props.poster_path}`} alt= {props.title}/>
        </div>
    )
}

export default movieCard