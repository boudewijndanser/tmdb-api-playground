import React from 'react'

const movieCard = (props) => {
    return (
        <div className="movieCard">
        <a href={`/movie/${props.id}`}>
        <img className="movieCardimg"src= {`${props.url}${props.poster_path}`} alt= {props.title} />
        </a>
        </div>
    )
}

export default movieCard