import { useState, useEffect } from 'react'
import './App.css'
import InfoCard from './assets/components/InfoCard';


function App() {
  const apiKey = "AIzaSyAzXDLjUNNGtVsw-JMjeZY46q-PL_-ZXbc";
  const amount = 50;
  const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=" + amount+ "&channelId=UChAnqc_AY5_I3Px5dig3X1Q&order=date&key=" + apiKey;
  let jsonData 
  const [title1, setTitle1] = useState("")
  const [imageURL1, setImageURL1] = useState("")
  const [title2, setTitle2] = useState("")
  const [imageURL2, setImageURL2] = useState("")
  const index1 = Math.floor(Math.random() * amount + 1);
  let index2 = Math.floor(Math.random() * amount);
  if (index2 === index1) index2 = amount


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json)
        jsonData = json;
        setTitle1(json.items[index1].snippet.title)
        setImageURL1(json.items[index1].snippet.thumbnails.high.url)
        setTitle2(json.items[index2].snippet.title)
        setImageURL2(json.items[index2].snippet.thumbnails.high.url)
      }

      )
      
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="container row align-items-start">
        {title1 && imageURL1 && <InfoCard imgSource={imageURL1} name={title1}></InfoCard> }
        {title2 && imageURL2 && <InfoCard imgSource={imageURL2} name={title2}></InfoCard> }
      </div>
    </>
  )
}

export default App
