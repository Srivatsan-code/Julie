import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
const Video = ({name}) => {
  const [vname,setvname]=useState("")
  useEffect(()=>{
      setvname(name)
  },[name])
  const url = `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${vname}`;
  console.log(vname)
  const [result,setResult]=useState([]);
  var videoId=[]
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc90540daamsh8507e7265ba9d32p12e34ajsncc333b7ef834',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}; 
useEffect(()=>{
  fetch(url, options)
  .then((data)=>data.json())
  .then((response)=>{
    setResult(response.items)
  })
},[vname]) 
result.map((data)=>(
videoId.push(data.id.videoId)
))
console.log(videoId)
  return (
    <div className='reactplayer'> 
       <ReactPlayer className="video" url={`https://www.youtube.com/watch?v=${videoId[0]}`} 
       playing={true}
       controls/> 
    </div>
  )
}

export default Video
