import * as React from 'react'
import { apiKey, appendCredits, largeCoverUrl, movieDetailUrl, thumbnailUrl } from '../data/constants'
import MovieDetail from '../components/movieDetail'
class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      detailObject: null
    }
  
  }

  loadDetailsOf = (movieId) => {
    console.log('You clicked movie with id: ',movieId);
    const combinedUrl = movieDetailUrl+movieId+'?api_key='+apiKey+appendCredits
    return fetch(combinedUrl)
    .then(response => response.json())
    .then(json => json)
    .then(data => this.dispatchData2(data))
    .then(console.log('Got the data!'))
    .catch(err => alert(err)) // Make decent art function / display
  }

  dispatchData2 = (data) => {
    console.log('Data from API: ', data)
    this.setState({
      detailObject: data
      }
    )
  }

  componentDidMount() {
    if (this.state.detailObject === null) {
      this.loadDetailsOf(this.props.match.params.id)
      }
  }
 
  render() {
    if (this.state.detailObject === null) return null
    return (
      <div>
        <MovieDetail thumbUrl={thumbnailUrl} coverUrl={largeCoverUrl} detailObject={this.state.detailObject} />
      </div>
    )
  }
}

export default MovieDetailContainer