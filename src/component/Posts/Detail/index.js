import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../../constants/common'
import ReactMarkdown from 'react-markdown/with-html'

const PostDetail = (props) => {
  
  // URLから投稿記事のidを取得
  const postId = props.match.params.id

  const [postData, setPostData] = useState({})

  useEffect(()=> {
    axios.get(`${BASE_URL}items/${postId}`).then(response => {
      setPostData(response.data)
    })
  }, [])

  return (
    <div>
      <h2>{postData.title}</h2>
      <ReactMarkdown 
        source={postData.body}
        escapeHtml={false}
      />
    </div>
  )
}

export default PostDetail
