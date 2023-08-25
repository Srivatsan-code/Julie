import React from 'react'
import { useEffect,useState } from 'react'
const News = () => {
  const [news,setNews]=useState([]);
  
  useEffect(()=>{
     fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f37b8c87e24c4483a0ac5847d180da75")
     .then((data)=>data.json())
     .then((response)=>setNews(response.articles))
  },[])
            
  console.log(news)
  return (
    <div className='newsContainer'>
       {
news.map((data)=>(
  <card className="card">
   <img src={data.urlToImage} alt="News Thumbnail"/>
  <div className='cardTop'>
  <h6>{(new Date(data.publishedAt)).toDateString()}</h6>
  <h6>{data.source.name}</h6>
  </div>
   <h4>{data.title}</h4>
  
</card>
))
                   
       }
       
       
    </div>
  )
}









export default News
