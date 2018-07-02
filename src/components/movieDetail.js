import React from 'react'

const movieDetail = (props) => {
    console.log('Data from movieDetail: ',props.detailObject)
    return (
        <div className="movieDetail">
        <div className="baseInfo">
        <div className=""><h1>{props.detailObject.title}</h1></div>
        <div className=""><h2>{props.detailObject.tagline}</h2></div>
        <div className=""><h3>{props.detailObject.release_date}</h3></div>
        <div className=""><h4>{props.detailObject.runtime}</h4></div>
        <div className=""><p>{props.detailObject.overview}</p></div>
        <div className=""><p>{props.detailObject.vote_average}</p></div>
        </div>
        <img className="coverImg" src= {`${props.coverUrl}${props.detailObject.poster_path}`} alt= {props.title} />
        </div>
    )
}

export default movieDetail
