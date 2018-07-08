import React from 'react'
import MoviePrimaryContent from './moviePrimaryContent'
import MovieCast from './movieCast'

const movieDetail = (props) => {
    
    return (
        <div className="movieDetail">
        <div className="singleColumn">
        <MoviePrimaryContent detailObject={props.detailObject} />
        </div>
        <div className="movieCast">
        <MovieCast cast={props.detailObject.credits.cast} />
        </div>
        </div>
    )
}

export default movieDetail
