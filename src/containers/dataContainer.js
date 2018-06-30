import * as React from 'react'
import { apiKey, appendCredits, movieDetailUrl, searchUrl, thumbnailsToShow } from '../data/constants'
import MovieCard from '../components/movieCard'

class DataContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchId:'',
      api: {
        resultPage: '',
        totalPages: '',
        totalResults: '',
        results: []
      },
      dataContainer: {
        searchId: null,
        totalPages: 0,
        currentPage: null
      },
      status: {
        loading: true
      }
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

  searchMovieKeyword = (searchId, page) => {
    const fetchUrl = searchUrl+'?api_key='+apiKey+'&sort_by=popularity.desc&include_adult=true&include_video=true&with_keywords='+searchId+'&page='+page
    this.setState({
      searchId
    })
    return fetch(fetchUrl)
      .then(response => response.json())
      .then(json => json)
      .then(data => this.dispatchData(data))
      .catch(err => alert(err)) // Make decent art function / display
}

  dispatchData = (data) => {
    // Setting all the data received from TMDB API in the state for later reference
    console.log('Hello...')
    this.setState({
      api: { 
        resultPage: data.page,
        totalPages: data.total_pages,
        totalResults: data.total_results,
        results: this.state.api.results, ...data.results
        //this.state.api.results, ...data.results
      }
    })
    
    if (this.state.dataContainer.totalPages === 0) {
      // If there is nothing, setup the basics based on the API numbers
      this.setState({
        dataContainer: {
          totalPages: Math.ceil(data.total_results / thumbnailsToShow),
          currentPage: 1
        }
      })
    } 
    console.log(this.state)
    this.shouldMoreDataBeFetched()
  }

  shouldMoreDataBeFetched = () => {
    if(this.state.api.resultPage < this.state.api.totalPages){
      console.log('Need to fetch more...')
      this.searchMovieKeyword(this.state.searchId,this.state.api.resultPage + 1)

    }
    else {
      console.log('Start rendering stuff allready!')
    }
  }

  dispatchData2 = (data) => {
    console.log(data)
  }


  componentDidMount() {
    if (this.state.status.loading === true) {
      this.searchMovieKeyword('180547','1')
      }
  }
  
  render() {
    if (!this.state.api) return null

    const { results } = this.state.api
    const { loading } = this.state.status

    return (
      <div>
      <div className="overview">
      {loading && <p>Please hold...</p>}
      {!loading && results && results.map(dataFromState => <MovieCard key={dataFromState.id} {...dataFromState} parentFunction={this.loadDetailsOf}/>)}
      </div>
      </div>
    )
  }
}

export default DataContainer
