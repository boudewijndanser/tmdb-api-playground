import React from 'react'
import { thumbnailUrl } from '../data/constants'

class MovieCard extends React.Component {
    
    render() {
        const { title, poster_path } = this.props
        const imgUrl = thumbnailUrl + poster_path
        return(
            <div className="movieCard">
            <img src= {imgUrl} alt= {title} width="200" />
            </div>
        )
    }

}

export default MovieCard