import React from "react"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="p-footer">
        <Link to="/">
          <h2 className="c-heading__main">Qiita API</h2>
        </Link>
        <p className="c-copy-right">© 2020 Kenta Ozawa</p>
      </div>
    </footer>
  )
}

export default Footer
