import React from 'react'

const PostCard = props => {
  return (
  <li>
    <img src={props.data.user.profile_image_url} />
    {props.data.title}
    {props.data.created_at}
  </li>
  )
}

export default PostCard
