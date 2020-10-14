/**
 * 投稿の詳細情報を表示するコンポーネント
 */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../../constants/common'
import ReactMarkdown from 'react-markdown/with-html'

const PostDetail = (props) => {
  
  // URLから投稿記事のidを取得
  const postId = props.match.params.id

  const [postData, setPostData] = useState({})

  // マウント時に投稿データを取得する
  useEffect(()=> {
    axios.get(`${BASE_URL}items/${postId}`).then(response => {
      setPostData(response.data)
    })
  }, [])

  return (
    <div className="l-main">
      <div className="p-main">
        <div className="p-post">
          <div className="p-post__meta">{postData.updated_at}に更新</div>
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
  )
}

export default PostDetail
