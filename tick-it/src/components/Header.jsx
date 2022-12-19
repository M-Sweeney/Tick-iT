import Venues from "./Venues"
import Events from "./Events"
const Header = () => {
  return (
        <div className="header">
            <h2> Tick-It! </h2>
            <Venues />
            <Events />
        </div>

  )
}

export default Header