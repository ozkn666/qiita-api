/**
 * 投稿一覧を表示するコンポーネント
 */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../../constants/common'
import Contents from './Contents'
import Loading from '../../Parts/Loading'

const PostList = () => {

  // 取得した投稿一覧データ
  const [postsData, setPostsData] = useState([])

  // ページローダーの状態
  const [isLoading, setIsLoading] = useState(true)
  
  // マウント時に投稿データを取得する
  useEffect(() => {
    axios.get(`${BASE_URL}items`).then(response => {
      setPostsData(response.data)
      // データを取得し終わったらページローダーを非表示にする
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Loading isActive={isLoading} />
      <div className="l-main">
        <div className="p-main">
          <h2 className="c-heading__title">記事一覧</h2>
          <Contents
            data={postsData}
          />
        </div>
      </div>
    </>
  )
}

export default PostList
