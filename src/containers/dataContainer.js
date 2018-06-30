import * as React from 'react'
import { searchUrl } from '../data/constants'
import MovieCard from '../components/movieCard'

class DataContainer extends React.Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: null
    }
  }

searchMovieKeyword = (dispatchData) => {
  return fetch(searchUrl)
    .then(response => response.json())
    .then(json => json)
    .then(data => dispatchData(data))
    .then(console.log('Got the data!'))
    .catch(err => alert(err)) // Make decent art function / display
}

dispatchData = (data) => {
  this.setState({
    resultPage: data.page,
    totalPages: data.total_pages,
    totalResults: data.total_results,
    results: data.results

  })
  console.log(this.state)
}

componentDidMount() {
  if (this.state.data === null) {
    this.searchMovieKeyword(this.dispatchData)
    }
  }
  
  loadDetailsOf(id) {
    console.log('You clicked movie with id: ',id);
  }
  render() {
    if (!this.state.results) return null

    const { results, totalResults } = this.state

    return (
      <div>
        <div>
          <p>Movies found:{totalResults}</p>
        </div>
      <div className="overview">
      {results && results.map(dataFromState => <MovieCard key={dataFromState.id} {...dataFromState} parentFunction={this.loadDetailsOf}/>)}
      </div>
      </div>
    )
  }
}

export default DataContainer
