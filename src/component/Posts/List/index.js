import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../../constants/common'

const PostList = () => {

  // 取得した投稿一覧データ
  const [postsData, setPostsData] = useState()
  
  // マウント時に投稿データを取得する
  useEffect(() => {
    axios.get(`${BASE_URL}items`).then(response => {
      setPostsData(response.data)
    })
  }, [])

  return (
    <div>
      <h2>記事一覧</h2>
      <p>{`${BASE_URL}items`}</p>
    </div>
  )
}

export default PostList
