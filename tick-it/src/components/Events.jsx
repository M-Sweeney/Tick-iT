import axios from 'axios'

export default function Events () {

  const showEvent = (event) => {

  }
  const [event, setEvent] = useState(null)
  

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('')

  setEvent(response.data.event)

  }

  getData()

}, [])


if(!event) {
  return <h2>Loading Events</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Events!</h1>
    </div>
    <div className='grid'>
      {
      event.map((event)=>(
      <div onClick={() => showEvent(event)} key={event.}
      className='card'>
      <img className="preview" src={`${event.}/preview`}  />
      <div className="previewText">
      <h2>{event.}</h2>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


