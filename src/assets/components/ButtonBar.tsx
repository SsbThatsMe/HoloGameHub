
interface Props {
    value1: string
    value2: string
    winFunction: (win: boolean) => void
}

const ButtonBar = ({value1, value2, winFunction}: Props) => {
  const handleClick = (greater: boolean, value1: string, value2: string, winFunction: (win: boolean) => void) => {
    if ((greater && value2 >= value1) || (!greater && value2 <= value1)) {
        winFunction(true)
    }
    else winFunction(false)
  }

  return (
    <div>
        <button className="btn btn-primary" onClick={() => handleClick(false, value1, value2, winFunction)}>Older</button>
        <button className="btn btn-primary" onClick={() => handleClick(true,  value1, value2, winFunction)}>Newer</button>
    </div>
  )
}
 
export default ButtonBar