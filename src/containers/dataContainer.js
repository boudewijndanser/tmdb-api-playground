import * as React from 'react'
import { apiKey, appendCredits, movieDetailUrl, searchUrl, thumbnailsToShow } from '../data/constants'
import MovieCard from '../components/movieCard'
let array = []

class DataContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      moviesToMap:null,
      searchId:'',
      api: {
        resultPage: '',
        totalPages: '',
        totalResults: '',
        results: []
      },
      dataContainer: {
        totalPages: 0,
        currentPage: null
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
    // temp fix until I am able to ...spread it into results/ the state
    array = array.concat(data.results)
    this.setState({
      api: { 
        resultPage: data.page,
        totalPages: data.total_pages,
        totalResults: data.total_results,
        results: array
      }
    })
    
    if (this.state.api.resultPage === this.state.api.totalPages) {
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
      // const offset = this.state.dataContainer.currentPage * thumbnailsToShow
      this.setState({
        moviesToMap: this.state.api.results.slice((this.state.dataContainer.currentPage-1)*thumbnailsToShow, this.state.dataContainer.currentPage * thumbnailsToShow)
      })
      console.log('moviesToMap: ',this.state.moviesToMap)
      console.log('Start rendering stuff allready!')

      this.setState({
        loading: false
      })
    }
  }

  dispatchData2 = (data) => {
    console.log(data)
  }


  componentDidMount() {
    if (this.state.loading === true) {
      this.searchMovieKeyword('180547','1')
      }
  }
  
  render() {
    if (this.state.moviesToMap === null) return null

    return (
      <div>
      <div className="overview">
      {this.state.loading && <p>Please hold...</p>}
      {!this.state.loading && this.state.moviesToMap && this.state.moviesToMap.map(dataFromState => <MovieCard key={dataFromState.id} {...dataFromState} parentFunction={this.loadDetailsOf}/>)}
      </div>
      </div>
    )
  }
}

export default DataContainer
