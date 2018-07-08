import React from 'react'
import PersonCard from './personCard'
import { personThumbnailUrl } from '../data/constants'

const movieCast = (props) => {
    console.log('Data from movieCast: ',props.detailObject)
    return (
        <div className="movieCast">
            {props.cast.map(dataFromProps => <PersonCard key={dataFromProps.id} {...dataFromProps} url={personThumbnailUrl}/>)}
        </div>
    )
}

export default movieCast
