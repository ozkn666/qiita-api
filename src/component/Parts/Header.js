import React from "react"
import {Link} from 'react-router-dom'
import Logout from './Logout'

const Header = () => {
  return (
    <header className="l-header">
      <div className="p-header">
        <Link to="/">
          <h1 className="c-heading__main">Qiita API</h1>
        </Link>
        <Logout/>
      </div>
    </header>
  )
}

export default Header
