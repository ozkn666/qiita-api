import React from 'react'
import Content from './Content'

const Cards = props => {
  const contentList = props.data.map((content, index) => {
    return (
      <Content
        key={index}
        data={content}
      />
    );
  })

  return (
    <div className="p-post-list">
      {contentList}
    </div>
  )
}

export default Cards
