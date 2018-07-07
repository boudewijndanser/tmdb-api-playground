import React from 'react'

const movieCard = (props) => {
    return (
        <figure className="movieCard">
            <a href={`/movie/${props.id}`}>
            <img className="img"src= {`${props.url}${props.poster_path}`} alt= {props.title} />
            <div className="overlay">
                <figcaption className="figcaption">
                    <h4>{props.title}</h4>
                    <h6>Released:</h6>
                    <h5>{props.release_date}</h5>
                    <h6>Rating:</h6>
                    <h5>{props.vote_average}</h5>
                </figcaption>
                </div>
            </a>
        </figure>
    )
}

export default movieCard