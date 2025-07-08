
interface Props {
    imgSource: string;
    name: string;
    date: string
    showDate: boolean
    onClick: (correct: boolean) => void
    correct: boolean
    
}

const InfoCard = ({imgSource, name, date, showDate, onClick, correct}: Props) => {
  return (
    <div className="col text-center d-flex justify-content-center info-card" data-bs-theme="dark" onClick={() => onClick(correct)}>
      <div className="row justify-content-center info-card-inner">
          {imgSource && <img className={showDate ? 'infoCardImg transparent-img' : 'infoCardImg'} src={imgSource}/>}
          <div className='image-text-holder'>
            {showDate && <h2  className='image-text'>{date.substring(0, 10)}</h2>}
            {showDate && <h5 className='image-text'>{date.substring(11, 19)}</h5>}

          </div>
          <p className="text-center">{name.length <= 45 ? name : name.substring(0, 45) + "..."}</p>
        </div>
      </div>
  )
}

export default InfoCard