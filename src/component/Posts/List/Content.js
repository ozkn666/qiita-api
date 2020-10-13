import React from 'react'
import {Link} from 'react-router-dom'

const PostCard = props => {
  return (
  <li>
    <img src={props.data.user.profile_image_url} alt={props.data.title}/>
    {props.data.title}
    {props.data.created_at}
    <Link to={"posts/" + props.data.id}>to Detail</Link>
  </li>
  )
}

export default PostCard
