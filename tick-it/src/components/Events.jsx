import axios from 'axios'
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Events () {

  let { id } = useParams()

  let navigate = useNavigate()

  const showEvent = (id) => {

    navigate(`/events/${id}`)
  }

  const [event, setEvent] = useState(null)
  const [venueName, setVenueName] = useState('') 

  

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`http://localhost:8000/venues/${id}`)

  setVenueName(response.data.name)
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
      <h1>Events at {venueName}!</h1>
    </div>
    <div className='grid'>
      {
      event.map((events)=>(
      <div onClick={() => showEvent(events.id)}  className='cardNoImg'>
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

