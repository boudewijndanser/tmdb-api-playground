import React from 'react'
import { thumbnailUrl } from '../data/constants'

class MovieCard extends React.Component {
    
    render() {
        const { title, poster_path } = this.props
        const imgUrl = thumbnailUrl + poster_path
        return(
            <div className="movieCard">
            {/* <div className="movieCardInfo"><p>Hi there!</p></div> */}
            <img className="movieCardimg"src= {imgUrl} alt= {title}/>
            </div>
        )
    }

}

export default MovieCard