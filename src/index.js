import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

// Styling
import './styling/css/index.css'

// Nav
import NavBar from './components/navBar'
import SearchBar from './components/searchBar'
import footer from './components/footer'
import notFound from './components/notFound'

// Containers
import HomeContainer from './containers/homeContainer'
import MovieContainer from './containers/movieContainer'
import MovieDetailContainer from './containers/movieDetailContainer'
import MovieSearchResultContainer from './containers/movieSearchResultContainer'


ReactDOM.render(
  <BrowserRouter>
    <div className="wrapper">
      <div className="nav">
        <NavBar/>
      </div>
      <div className="search">
      <SearchBar />
      </div>
      <div className ="content">
        <Switch>
          <Route exact path="/" component={ HomeContainer } />
          <Route path="/movies" component={ MovieContainer } />
          <Route exact path="/movie/:id" component={ MovieDetailContainer } />
          <Route path="/search/:id" component={ MovieSearchResultContainer } />
          <Route component={ notFound } />
        </Switch>
      </div>
      <div className="footer">
        <footer/>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()

