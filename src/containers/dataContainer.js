import * as React from 'react'
import { searchUrl } from '../data/constants'
import MovieCard from '../components/movieCard'

class DataContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

searchMovieKeyword = (dispatchData) => {
  return fetch(searchUrl)
    .then(response => response.json())
    .then(json => json.results)
    .then(data => dispatchData(data))
    .then(console.log('Got the data!'))
    .catch(err => alert(err)) // Make decent art function / display
}

dispatchData = (data) => {
  this.setState({
    data
  })
  console.log(this.state)
}

componentDidMount() {
  if (this.state.data === null) {
    this.searchMovieKeyword(this.dispatchData)
    }
  }

  render() {
    if (this.state.data === null) return null

    const { data } = this.state

    return (
      <div>
        <h1>DataContainer!</h1>
      <div className="movieCards">
      {data && data.map(dataFromState => <MovieCard key={dataFromState.id} {...dataFromState}/>)}
      </div>
      </div>
    )
  }
}

export default DataContainer
