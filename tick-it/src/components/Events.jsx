import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Events () {

  const showEvent = (event) => {

  }
  const [event, setEvent] = useState(null)
  

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('http://localhost:8000/venues/1')

  console.log(response.data)
  setEvent(response.data.events)

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
      event.map((events)=>(
      <div onClick={() => showEvent(events)} key={events.events}
      className='cardNoImg'>
      <div className="previewText">
      <h2>{events.name}</h2>
      <h2>{events.date}</h2>
      <h2>{events.description}</h2>
      <h2>$ {events.price}</h2>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}



