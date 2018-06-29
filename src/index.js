import * as React from 'react'
import * as ReactDOM from 'react-dom'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

// Styling
// import './css/index.css'

// Pages + Nav
import DataContainer from './containers/dataContainer'

ReactDOM.render(
 
    <div>
     <DataContainer />
    </div>,
  document.getElementById('root')
)
registerServiceWorker()
