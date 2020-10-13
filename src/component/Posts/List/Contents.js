import React from 'react'
import Content from './Content'

const Cards = props => {
  const contentList = props.data.map((content, index) => {
    return (
      <div key={index}>
        <Content 
          data={content}
        />
      </div>
    );
  })

  return (
    <div>
      {contentList}
    </div>
  )
}

export default Cards
