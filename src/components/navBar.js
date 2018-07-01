import React from 'react'
import { Link } from 'react-router-dom'

const navBar = () => {
    return (
        <div className="navBar">
        <ul className="navBarContent">
          <li className="navBarLink"><Link to="/">home</Link></li>
          <li className="navBarLink"><Link to="/movies">movies</Link></li>
        </ul>
        </div>
        
    )
}

export default navBar

//