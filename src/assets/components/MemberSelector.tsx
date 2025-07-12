interface Props {
    imgSource: string
    memberName: string
    onClick: (member: string) => void
}

const MemberSelector = ({imgSource, memberName, onClick}: Props) => {
  return (
    <div className="member-selector col-sm">
        <img className="member-selector-image" src={imgSource} alt={memberName} onClick={() => onClick(memberName)}/>
    </div>
  )
}

export default MemberSelector