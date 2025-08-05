import React from 'react'
import { useState, useEffect } from 'react'
import InfoCard from '../assets/components/InfoCard'
import { useParams } from 'react-router-dom'

const HigherLowerPlay = () => {
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
    const [highScore, setHighScore] = useState(0)
    const [newHighScore, setNewHighScore] = useState(false)
    const [resultScreenActive, setResultScreenActive] = useState(false)
    const {member} = useParams();

    let index1 = -1
    let index2 = -1
  

    const handleSelect = (correct: Boolean)  => {
        if (correct)  {
        
        setShowDates(true);
            setShowCorrect(true);
            setScore(score+1);
            
            setTimeout(() => {
            setShowDates(false);
            setShowCorrect(false);
            setDataUpdate(dataUpdate+1);
            }, 1500) 
        }
        else {
        setShowDates(true);
        setShowIncorrect(true);
        setTimeout(() => {
            if (score > highScore) {
            setHighScore(score)
            setNewHighScore(true);
            //localStorage.setItem(currentMember + 'HighScore', (score).toString());
            }
            setShowIncorrect(false);
            setShowDates(false);
            setDataUpdate(dataUpdate+1);
            }, 2000)
        }
    }

    useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("../HoloData.json")
      console.log(result)
      result.json().then(json => {
        console.log(json)
        let usedData = json[String(member)]
        const amount = usedData.length
        let index1Old = index1
        let index2Old = index2
        do {
          index1 = Math.floor(Math.random() * amount + 1) 
          index2 = Math.floor(Math.random() * amount)
          if (index2 === index1) index2 = amount
        } while (index1 == index1Old || index2 == index2Old)
        setTitle1(usedData[index1].snippet.title)
        setTitle2(usedData[index2].snippet.title)
        setImageURL1(usedData[index1].snippet.thumbnails.high.url)
        setImageURL2(usedData[index2].snippet.thumbnails.high.url)
        setVideoDate1(usedData[index1].snippet.publishTime)
        setVideoDate2(usedData[index2].snippet.publishTime)
      })
    }
    fetchData();
  }, [dataUpdate])

  return (
    <div>
        <div>
        <h1 className="text-center">Which is newer?</h1>
        <div className="info-card-holder">
          {title1 && imageURL1 && <InfoCard imgSource={imageURL1} name={title1} date={videoDate1} showDate={showDates} onClick={(correct) => { handleSelect(correct)}} correct={videoDate1 >= videoDate2}></InfoCard> }
          {title2 && imageURL2 && <InfoCard imgSource={imageURL2} name={title2} date={videoDate2} showDate={showDates} onClick={(correct) => { handleSelect(correct)}} correct={videoDate2 >= videoDate1}></InfoCard> }
          <div className='image-text-holder'>
                {showCorrect && <h1 className='correct-sign'>{"✓"}</h1>}
                {showIncorrect && <h1 className='incorrect-sign'>{"✘"}</h1>}
          </div>
        </div>
        <h3>{"Score: " + score}</h3>
        <h3>{"HighScore: " + highScore}</h3>

        </div>
            {resultScreenActive && <div className="container">
            <h3>{(newHighScore ? "New high score: " : "Your score: ") + score}</h3>
            <button onClick={() => {
                setScore(0)
                setResultScreenActive(false)
                setNewHighScore(false)
                setDataUpdate(dataUpdate == 0 ? 1 : 0)
            }}>play again</button>
            <button onClick={() => {
                setScore(0)
                //setPageState("memberSelect")
                setNewHighScore(false)
                setDataUpdate(dataUpdate == 0 ? 1 : 0)
            }}>select member</button>
      </div>}
    </div>
  )
}

export default HigherLowerPlay