import { useState, useEffect, type SetStateAction } from 'react'
import './App.css'
import InfoCard from './assets/components/InfoCard';
import MemberSelector from './assets/components/MemberSelector';
//import ButtonBar from './assets/components/ButtonBar';



function App() {
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
  const [currentMember, setCurrentMember] = useState("")
  let index1 = -1
  let index2 = -1
  const [pageState, setPageState] = useState("memberSelect") //Acceptable values "memberSelect, playing, lossScreen"

  document.documentElement.setAttribute('data-bs-theme', "dark")

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("./HoloData.json")
      result.json().then(json => {
        let usedData = json[currentMember]
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

  

  const handleSelect = (correct: Boolean)  => {
    if (correct)  {
      
      setShowDates(true);
        setShowCorrect(true);
        setScore(score+1);
        if (score+1 > highScore) {
          setHighScore(score+1)
          localStorage.setItem(currentMember + 'HighScore', (score+1).toString());
        }
        setTimeout(() => {
          setShowDates(false);
          setShowCorrect(false);
          setDataUpdate(dataUpdate+1);
        }, 2000) 
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

  const handleMemberSelect = (memberName:string) => {
    console.log("Set member: " + memberName)
    setHighScore(Number(localStorage.getItem(memberName + 'HighScore')) || 0)
    setCurrentMember(memberName)
    setDataUpdate(dataUpdate + 1)
    setPageState("playing")
  }

  return (
    <>
      {pageState == "playing" && <div>
        <h1 className="text-center">Which is newer?</h1>
        <div className=" row align-items-start d-flex justify-content-center relative-position">
          {title1 && imageURL1 && <InfoCard imgSource={imageURL1} name={title1} date={videoDate1} showDate={showDates} onClick={(correct) => { handleSelect(correct)}} correct={videoDate1 >= videoDate2}></InfoCard> }
          {title2 && imageURL2 && <InfoCard imgSource={imageURL2} name={title2} date={videoDate2} showDate={showDates} onClick={(correct) => { handleSelect(correct)}} correct={videoDate2 >= videoDate1}></InfoCard> }
          <div className='image-text-holder'>
                {showCorrect && <h1 className='correct-sign'>{"✓"}</h1>}
                {showIncorrect && <h1 className='incorrect-sign'>{"✘"}</h1>}

          </div>
        </div>
        
        <h3>{"Score: " + score}</h3>
        <h3>{"HighScore: " + highScore}</h3>
      </div>}
      {pageState == "memberSelect" && <div className="container">
        <div className='row'>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_kT9PiLS8BWANuBdGG_-GHsNZxFqmF0YjMnzK55jISdca4=s176-c-k-c0x00ffffff-no-rj-mo" memberName='sora' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.ggpht.com/H8pRHxQm4-FjRl9XUFn9UQbJhVcj5PIvwDW6o7ZlBTRj2bgVP5xonQEl36H-O6NHaWmbP1zaxg=s176-c-k-c0x00ffffff-no-rj-mo" memberName='roboco' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/b8EKl_i-e2dinoparyhUJEaRhInlSWwm-dZX0oIq-x1mUvQga530G_PIdutlSNkGKEAyX9aaBQ=s176-c-k-c0x00ffffff-no-rj-mo" memberName='miko' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_kLDBK5ksSvk5-XJ6S8e0kWfjy7mVl3jyUkgDeMQ7rlCpU=s176-c-k-c0x00ffffff-no-rj-mo" memberName='suisei' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/MZ-G4UCBhmwBgdgoq6h3OLFXfnd3Io4xV8TUOyfCu7TMvHTIL5-VMgGRlA0FfCqqCq2oR6RrXos=s176-c-k-c0x00ffffff-no-rj-mo" memberName='azki' onClick={(member) => handleMemberSelect(member)}/>
        </div>
        <div className='row'>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_mGXEeXXCCPh-sl2jKYbYpLBuCsjEGDgJaL5RQziYhyugQ=s176-c-k-c0x00ffffff-no-rj-mo" memberName='fubuki' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.ggpht.com/LZBvU0s_S-xi7fHmeab_iA8ztfGimxzisUBMODGKaIEx3r3R-tIDReiX3SlmbH2showigElJ=s176-c-k-c0x00ffffff-no-rj-mo" memberName='matsuri' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.ggpht.com/ecW_DT7IKBcfKJ1qioYiyU_Iq6EB4_bCZpaG4srWPkEZRsIAiYguEvh7_nELEJqPnbjAktVj6Q=s176-c-k-c0x00ffffff-no-rj-mo" memberName='haachama' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.ggpht.com/0Nx9jWdjiUrkizCVCDZg_MasdF6b85DAsQATmAkNC2A8b3Y89vXlnSDZ_v1fM_X4w3088sJnmA=s176-c-k-c0x00ffffff-no-rj-mo" memberName='aki' onClick={(member) => handleMemberSelect(member)}/>
        </div>
        <div className='row'>
          <MemberSelector imgSource="https://yt3.ggpht.com/3CeLWGYb6cLUywTJzNt-UpITviNxeGNvtjhIqbV-AIybCqCoFw9onWtg91bjwpqvfEP9mfqIR4Q=s176-c-k-c0x00ffffff-no-rj-mo" memberName='nakiri' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.ggpht.com/gv-5tmPSiFipkP01atgnCS6WwdxzUxfermmqGw_UhuDNtRFmbdb2NALcL6rR0LxaM5JX9JhE9g=s176-c-k-c0x00ffffff-no-rj-mo" memberName='choco' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_k5mjdt1wcbaYCXKwmDpVXmSGtOc-LH3WjIyUHVC4soP28=s176-c-k-c0x00ffffff-no-rj-mo" memberName='subaru' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_kaZLtKaya9TSJr3M4lpzV95R2rWdQtGk67fwedroUfSnE=s176-c-k-c0x00ffffff-no-rj-mo" memberName='aqua' onClick={(member) => handleMemberSelect(member)}/>
          <MemberSelector imgSource="https://yt3.ggpht.com/K91NQLuy_JMQ65n-Opf0Q2FZBO3yOURnMRusO7o5DTjaJ1QVtP-ANN4lehK57X4KXpcI2MiRig=s176-c-k-c0x00ffffff-no-rj-mo" memberName='shion' onClick={(member) => handleMemberSelect(member)}/>
        </div>

        <div className='row'>
        <MemberSelector imgSource="https://yt3.googleusercontent.com/JV8VdQFA7eZk5H1cRxHyIdLKQ5wD6EBywjxLzrne2EpY9LSiVgtapvh0iQA6plVNxdIKNxK0NRU=s176-c-k-c0x00ffffff-no-rj-mo" memberName='mio' onClick={(member) => handleMemberSelect(member)}/>
        <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_nrS6tFctvjyWv1mKzKBIetHJBfpqwHOpvRFc3KU2P_5yc=s176-c-k-c0x00ffffff-no-rj-mo" memberName='korone' onClick={(member) => handleMemberSelect(member)}/>
        <MemberSelector imgSource="https://yt3.googleusercontent.com/oD8ISaA35737mg-lt5mYSfOIXmjCeHYcSFFpTQn4AVMkqiyzrMle_THvX6NdfSxbjUO6fQ6_wg=s176-c-k-c0x00ffffff-no-rj-mo" memberName='okayu' onClick={(member) => handleMemberSelect(member)}/>
        </div>
      </div>}
    </>
  )
}

export default App
