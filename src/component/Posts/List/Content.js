import React from 'react'
import {Link} from 'react-router-dom'

const PostCard = props => {
  return (
    <div className="c-card__post">
      <div className="c-card__post__image">
        <img src={props.data.user.profile_image_url} alt={props.data.title}/>
      </div>
      <div className="c-card__post__content">
        <Link to={"posts/" + props.data.id}>
          <h3 className="c-heading__title">{props.data.title}</h3>
        </Link>
        <div className="c-card__post__meta">
          {props.data.created_at}
        </div>
      </div>
    </div>
  )
}

export default PostCard
