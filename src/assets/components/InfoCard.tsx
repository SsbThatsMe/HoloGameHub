import React from 'react'

interface Props {
    imgSource: string;
    name: string;
}

const InfoCard = ({imgSource, name}: Props) => {
  return (
    <div className="col text-center" data-bs-theme="dark">
      <div className="row">
          {imgSource && <img src={imgSource}/>}
        </div>
          
        <div className="row text-center">
          {name}
        </div>
      </div>
  )
}

export default InfoCard