import { Route, Routes } from "react-router-dom"
import Events from "./Events"


export default function Main () {

return (
<div>
<Routes>
  <Route path ="/venues/:id" element={<Events/>}/>
</Routes>
</div>
)
}