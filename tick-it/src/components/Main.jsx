import { Route, Routes } from "react-router-dom"
import Events from "./Events"
import EventDetails from "./EventDetails"
import Home from "./Home"

export default function Main () {

return (
<div>
<Routes>
  <Route path ="/" element={<Home/>}/>
  <Route path ="/venues/:id" element={<Events/>}/>
  <Route path ="/events/:id" element={<EventDetails/>}/>
</Routes>
</div>
)
}