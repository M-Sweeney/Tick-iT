import axios from 'axios'
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'

export default function EventDetails () {

  let { id } = useParams()

  const [event, setEvent] = useState(null)
  // const [venueName, setVenueName] = useState('') 


useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`http://localhost:8000/events/${id}`)

  // setVenueName(response.data.name)
  console.log(response.data.name)
  setEvent(response.data)
  console.log(event.name)

  }

  getData()

}, [])


if(!event) {
  return <h2>Loading Events</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      {/* <h1>Events at {venueName}!</h1> */}
    </div>
    <div className='grid'>
      
      <div className='cardNoImg'>
      <div className="previewText">
      <h2>{event.name}</h2>
      <h2>{event.date}</h2>
      <h2>{event.description}</h2>
      <h2>$ {event.price}</h2>
      </div>
      </div>
      
    </div>
    </div>
  )
}}

