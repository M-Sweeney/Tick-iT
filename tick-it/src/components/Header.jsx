import { useNavigate } from 'react-router-dom'
const Header = () => {
  let navigate = useNavigate()

  const navigateHome = () => {
    navigate('')
  }
  return (
        <div className="header">
            <h2 className="Tik-It"onClick={navigateHome}> Tick-It! </h2>
        </div>

  )
}

export default Header