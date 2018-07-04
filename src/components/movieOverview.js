import React from 'react'
import MovieCard from './movieCard'

const MovieOverview = (props) => {
    return (
        <div className="overview">
        {props.moviesToMap.map(dataFromProps => <MovieCard key={dataFromProps.id} {...dataFromProps} url={props.url}/>)}
        </div>
    )
}

export default MovieOverview