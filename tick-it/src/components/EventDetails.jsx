import axios from 'axios'
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'

export default function EventDetails () {

  let { id } = useParams()

  const [event, setEvent] = useState(null)


useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`http://localhost:8000/events/${id}`)

  console.log(response.data.name)
  console.log(response.data)
  setEvent(response.data)
  console.log(event.name)

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
      <img src={event.photo_url} />
      <div className=''>
      <h2>{event.date}</h2>
      <h2>{event.description}</h2>
      <h2>$ {event.price}</h2>
      <button className='purchaseButton'>Purchase Tickets</button>
      </div>
      
    </div>
  )
}}

