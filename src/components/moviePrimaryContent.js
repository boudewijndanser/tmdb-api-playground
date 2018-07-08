import React from 'react'
import { largeCoverUrl } from '../data/constants'

const moviePrimaryContent = (props) => {
    const year = props.detailObject.release_date.substring(0,4)
    return (
        <div className="primaryContent">
        <div className="posterLeft">
            <img className="coverImg" src= {`${largeCoverUrl}${props.detailObject.poster_path}`} alt= {props.detailObject.title} width="300px" height="450px"/> 
        </div>
        <div className="contentRightWrapper">
        <div className="title">
            <h1>{props.detailObject.title}</h1>
            </div>
            <div className="tagline">
            <h2>{props.detailObject.tagline}</h2>
        </div>
        <span className="releaseDate">
            <h3>{year}</h3>
        </span>
        
        <div className="overviewInfo">
            <p>{props.detailObject.overview}</p>
        </div>
        <div className="directorWriter">

        </div>
        </div>
        </div>
    )
}

export default moviePrimaryContent
