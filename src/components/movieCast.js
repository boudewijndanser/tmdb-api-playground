import React from 'react'
import PersonCard from './personCard'
import { personThumbnailUrl } from '../data/constants'

const movieCast = (props) => {
    const castSelection = props.cast.slice(0,12)
    console.log('Data from movieCast: ',props.cast)
    console.log('Slice: ',castSelection)
    return (
        <div>
        <div className="title"><h2>Top billed cast</h2></div>
        <div className="movieCast">
            {castSelection.map(dataFromProps => <PersonCard key={dataFromProps.id} {...dataFromProps} url={personThumbnailUrl}/>)}
        </div>
        </div>
    )
}

export default movieCast
