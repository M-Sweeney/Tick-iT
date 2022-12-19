import { useState, useEffect } from "react"
import axios from 'axios'

export default function Venues () {

  const showVenues = (venue) => {

    // navigate(`${venue.name}`)
  }

  const [venues, setVenues] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('http://localhost:8000/')
  console.log(response.data[0].name)
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
      <h1>Venues!</h1>
    </div>
    <div className='grid'>
      {
      venues.map((venues)=>(
      <div onClick={() => showVenues(venues)} key={venues.name}
      className='cardNoImg'>
      <div className="previewText">
      <h2>{venues.name}</h2>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


