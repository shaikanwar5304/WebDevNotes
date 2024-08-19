import React from 'react'
import "./News.css"
function News(props) {
  return (
    <div className='card'>
        <img src={props.news.urlToImage} alt=""  />
        <h1>{props.news.title}</h1>
        <p>{props.news.description}</p>
        <button 
        onClick={()=>{
            window.open(props.news.url)
        }}
        >read more</button>
    </div>
  )
}

export default News