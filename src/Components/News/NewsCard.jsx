import React from 'react'

const NewsCard = (props) => {
  return (
   <article className='card'>
    <img src={props.img} alt={props.title}/>
    <h3>{props.title}</h3>
    <p> {props.author? props.author: "By TOM KRISHER" }</p>
    <a href={props.link}>view article</a>
    </article>
  )
}

export default NewsCard