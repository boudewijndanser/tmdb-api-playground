import React from 'react'

const PersonCard = (props) => {
    return (
        <figure className="personCard">
            <a href={`/movie/${props.id}`}>
            <img className="personImg"src= {`${props.url}${props.profile_path}`} alt= {props.name} />
            
                <figcaption className="figcaption">
                    <h5>{props.character}</h5>
                    <h6>{props.name}</h6>
                </figcaption>
                </a>
        </figure>
    )
}

export default PersonCard