/**
 * 投稿一覧を表示するコンポーネント
 */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../../constants/common'
import Contents from './Contents'

const PostList = () => {

  // 取得した投稿一覧データ
  const [postsData, setPostsData] = useState([])
  
  // マウント時に投稿データを取得する
  useEffect(() => {
    axios.get(`${BASE_URL}items`).then(response => {
      setPostsData(response.data)
    })
  }, [])

  return (
    <div className="l-main">
      <div className="p-main">
        <h2 className="c-heading__title">記事一覧</h2>
        <Contents
          data={postsData}
        />
      </div>
    </div>
  )
}

export default PostList
