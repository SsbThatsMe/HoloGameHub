import { Link } from "react-router-dom"

interface Props {
    imgSource: string
    memberName: string
}

const MemberSelector = ({imgSource, memberName}: Props) => {
  return (
    <div className="member-selector col-sm">
        <Link to={"/HoloGameHub/guessing/" + memberName}>
          <img className="member-selector-image" src={imgSource} alt={memberName}/>
        </Link>
    </div>
  )
}

export default MemberSelector