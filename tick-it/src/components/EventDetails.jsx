import axios from 'axios'
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'

export default function EventDetails () {

  let { id } = useParams()

  const [event, setEvent] = useState(null)
  const [eventLink, setEventLink] = useState('')

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`http://localhost:8000/events/${id}`)

  setEvent(response.data)
  setEventLink(response.data.link)

  }

  getData()

}, [])


if(!event) {
  return <h2>Loading Events</h2>
}else{
  return(
    <div className='detailsContainer'>
    <div className="detailsTitle">
      <h1>{event.name}!</h1>
    </div>
      <img className='ImgDetail'src={event.photo_url} />
      <div className=''>
      <h2>{event.date}</h2>
      <h2>{event.description}</h2>
      <h2>$ {event.price}</h2>
      <a href={eventLink} target='_blank'>
      <button>Purchase Tickets</button>
    </a>
      </div>
      
    </div>
  )
}}

