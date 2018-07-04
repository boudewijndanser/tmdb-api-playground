import React from 'react'

const movieDetail = (props) => {
    console.log('Data from movieDetail: ',props.detailObject)
    return (
        <div className="movieDetal">
        <div className="singleColumn">
        <div className="primaryContent">
        <div className="posterLeft">
            <img className="coverImg" src= {`${props.coverUrl}${props.detailObject.poster_path}`} alt= {props.title} width="300px"
    height="450px"/> 
        </div>
        <div className="contentRightWrapper">
        <div className="contentRight">
        <div className="title">
            <h1>{props.detailObject.title}</h1>
        </div>
        <div className="releaseDate">
            <h3>{props.detailObject.release_date}</h3>
        </div>
        <div className="tagline">
            <h2>{props.detailObject.tagline}</h2>
        </div>
        <div className="overviewInfo">
            <p>{props.detailObject.overview}</p>
        </div>

        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default movieDetail