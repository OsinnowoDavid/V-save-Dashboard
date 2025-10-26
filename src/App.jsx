import { Router,Route,Routes } from "react-router-dom"
import SideBar from "./component/SideBar"
import NavBar from "./component/NavBar"
import Dashboard from "./pages/dashboard"

function App() {

  return (
    <>
    <NavBar/>
<SideBar />
<Routes>
  <Route path="/dashboard"  element={<Dashboard/>}/>
</Routes>
    </>
  )
}

export default App
