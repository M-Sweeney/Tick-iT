import axios from 'axios'

export default function Venues () {

  const showVenue = (venue) => {

  }
  const [venues, setVenues] = useState(null)
  

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('')

  setVenues(response.data.venues)

  }

  getData()

}, [])


if(!venues) {
  return <h2>Loading Venues</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Venues!</h1>
    </div>
    <div className='grid'>
      {
      venues.map((venue)=>(
      <div onClick={() => showVenue(venue)} key={venue.}
      className='card'>
      <img className="preview" src={`${venue.}/preview`}  />
      <div className="previewText">
      <h2>{venue.}</h2>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


