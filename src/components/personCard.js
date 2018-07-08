import React from 'react'

const PersonCard = (props) => {
    return (
        <figure className="personCard">
            <a href={`/movie/${props.id}`}>
            <img className="personImg"src= {`${props.url}${props.profile_path}`} alt= {props.name} />
            
                <figcaption className="figcaption">
                    {/* <p><h6>Character:</h6>
                    <h5>{props.character}</h5>
                    <h6>Actor:</h6>
                    <h5>{props.name}</h5></p> */}
                </figcaption>
                </a>
        </figure>
    )
}

export default PersonCard