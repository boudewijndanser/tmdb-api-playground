import React from 'react'
import MoviePrimaryContent from './moviePrimaryContent'
import MovieCast from './movieCast'
import SideBar from './sideBar'
import { backgroundPosterUrl } from '../data/constants'

const movieDetail = (props) => {
    
    return (
        <div className="movieDetail">
                <div className="singleColumn">
                    <div className="contentInner">
                    <img className="backgroundImg"src= {`${backgroundPosterUrl}${props.detailObject.backdrop_path}`} alt= {props.detailObject.title} /> 
                    <MoviePrimaryContent detailObject={props.detailObject} />
                    <div className="backgroundColor"></div>
                </div>
            </div>
            <div className="castAndFacts">
                <div className="movieCastWrapper">
                    <MovieCast cast={props.detailObject.credits.cast} />
                </div>
                <div className="sideBarWrapper">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default movieDetail
