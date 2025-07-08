import { useState, useEffect } from 'react'
import './App.css'
import InfoCard from './assets/components/InfoCard';
//import ButtonBar from './assets/components/ButtonBar';


function App() {
  //const apiKey = "AIzaSyAzXDLjUNNGtVsw-JMjeZY46q-PL_-ZXbc";
  const amount = 50;
  //const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=" + amount+ "&channelId=UChAnqc_AY5_I3Px5dig3X1Q&order=date&key=" + apiKey;
  const [dataUpdate, setDataUpdate] = useState(0)
  const [showCorrect, setShowCorrect] = useState(false)
  const [showIncorrect, setShowIncorrect] = useState(false)
  const [showDates, setShowDates] = useState(false)
  const [title1, setTitle1] = useState("")
  const [imageURL1, setImageURL1] = useState("")
  const [title2, setTitle2] = useState("")
  const [imageURL2, setImageURL2] = useState("")
  const [score, setScore] = useState(0)
  //const [videoViews1, setVideoViews1] = useState(0)
  //const [videoViews2, setVideoViews2] = useState(0)
  const [videoDate1, setVideoDate1] = useState("")
  const [videoDate2, setVideoDate2] = useState("")
  let index1 = Math.floor(Math.random() * amount + 1)
  let index2 = Math.floor(Math.random() * amount)
  if (index2 === index1) index2 = amount
  //let videoURL = "https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=" + "qc8HqfQ7fUo" + "&id=" + "d5jzZXoqknY" + "&key=" + apiKey

  document.documentElement.setAttribute('data-bs-theme', "dark")

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("./korone.json")
      result.json().then(json => {
        setTitle1(json.items[index1].snippet.title)
        setTitle2(json.items[index2].snippet.title)
        setImageURL1(json.items[index1].snippet.thumbnails.high.url)
        setImageURL2(json.items[index2].snippet.thumbnails.high.url)
        setVideoDate1(json.items[index1].snippet.publishTime)
        setVideoDate2(json.items[index2].snippet.publishTime)
        //videoURL = "https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=" + json.items[index1].id.videoId + "&id=" + json.items[index2].id.videoId + "&key=" + apiKey
      }).then(() => fetchVideoData())
    }
    const fetchVideoData = async () => {
        /*const result = await fetch(videoURL)
        result.json().then(json => {
          setVideoViews1(json.items[0].statistics.viewCount)
          setVideoViews2(json.items[1].statistics.viewCount)
        })*/
    }
      
    fetchData();
  }, [dataUpdate])

  

  const handleSelect = (correct: Boolean)  => {
    if (correct)  {
      let index1Old = index1
      let index2Old = index2
      do {
        index1 = Math.floor(Math.random() * amount + 1)
        index2 = Math.floor(Math.random() * amount)
        if (index2 === index1) index2 = amount
        setShowDates(true);
        setShowCorrect(true);
        setScore(score+1);
        setTimeout(() => {
          setShowDates(false);
          setShowCorrect(false);
          setDataUpdate(dataUpdate+1);
        }, 2000)
      } while (index1 == index1Old || index2 == index2Old)
    }
    else {
      setShowDates(true);
      setShowIncorrect(true);
      setTimeout(() => {
          setShowIncorrect(false);
          setShowDates(false);
          setDataUpdate(dataUpdate+1);
        }, 2000)
      setScore(0)
    }
  }

  return (
    <>
      <h1 className="text-center">Which is newer?</h1>
      <div className=" row align-items-start d-flex justify-content-center relative-position">
        {title1 && imageURL1 && <InfoCard imgSource={imageURL1} name={title1} date={videoDate1} showDate={showDates} onClick={(correct) => {handleSelect(correct)}} correct={videoDate1 >= videoDate2}></InfoCard> }
        {title2 && imageURL2 && <InfoCard imgSource={imageURL2} name={title2} date={videoDate2} showDate={showDates} onClick={(correct) => {handleSelect(correct)}} correct={videoDate2 >= videoDate1}></InfoCard> }
        <div className='image-text-holder'>
              {showCorrect && <h1 className='correct-sign'>{"✓"}</h1>}
              {showIncorrect && <h1 className='incorrect-sign'>{"✘"}</h1>}

        </div>
      </div>
      
      <h3>{"Score: " + score}</h3> 
    </>
  )
}

export default App
