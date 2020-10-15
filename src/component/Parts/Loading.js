import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";


const Loading = props => {
  console.log(props)
  return (
    <div className="c-loading">
      <FontAwesomeIcon icon={faSync} size="6x" spin />
    </div>
  )
}

export default Loading
