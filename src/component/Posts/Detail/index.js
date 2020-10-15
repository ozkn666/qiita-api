/**
 * 投稿の詳細情報を表示するコンポーネント
 */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../../constants/common'
import ReactMarkdown from 'react-markdown/with-html'
import formatDate from '../../../modules/FormatDate'
import Loading from '../../Parts/Loading'

const PostDetail = (props) => {
  
  // URLから投稿記事のidを取得
  const postId = props.match.params.id

  // 投稿詳細データ
  const [postData, setPostData] = useState({})
  
  // ページローダーの状態
  const [isLoading, setIsLoading] = useState(true)

  // マウント時に投稿データを取得する
  useEffect(()=> {
    axios.get(`${BASE_URL}items/${postId}`).then(response => {
      setPostData(response.data)
      // データを取得し終わったらページローダーを非表示にする
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Loading isActive={isLoading} />
      <div className="l-main">
        <div className="p-main">
          <div className="p-post">
            <div className="p-post__meta">{formatDate(postData.updated_at)}に更新</div>
            <div className="p-post__content">
              <h2 className="c-heading__post-title">{postData.title}</h2>
              <div className="p-post__body">
                <ReactMarkdown 
                  source={postData.body}
                  escapeHtml={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail
