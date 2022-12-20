import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Venues () {

  let navigate = useNavigate()

  const showVenues = (venue) => {
    navigate(`/venues/${venue.id}`)
    window.location.reload()
  }

  const [venues, setVenues] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('http://localhost:8000/')
  setVenues(response.data)

  }

  getData()

}, [])


if(!venues) {
  return <h2>Loading Venues</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1 className="venues">Venues!</h1>
    </div>
    <div className='grid'>
      {
      venues.map((venues)=>(
      <div onClick={() => showVenues(venues)} key={venues.name}
      className='card'>
      <div className="previewText">
      <img className="Img" src={`${venues.photo_url}`}  />
      <h2>{venues.name}</h2>
      <h3>{venues.location}</h3>
      <h3>{venues.capacity}</h3>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


