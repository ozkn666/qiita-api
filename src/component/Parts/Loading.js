/**
 * ページローダーのコンポーネント
 * propsで渡されるisActiveがtrueの時ページローダーを表示する
 */

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const Loading = props => {

  // 非表示時は空の要素を返す
  if (!props.isActive) return <></>

  return (
    <div className="c-loading">
      <FontAwesomeIcon icon={faSync} size="6x" spin />
    </div>
  )
}

export default Loading
