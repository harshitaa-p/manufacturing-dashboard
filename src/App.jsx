import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import { useEffect } from "react";

function App() {

   useEffect(() => {
      document.title = "MAQBIT - Dashboard"; 
    }, []);

  return (
<div className="flex h-screen overflow-hidden text-gray-200 bg-white">
  <div className="fixed inset-0 z-0 " >
    <div className="absolute inset-0 bg-white"/>
  </div>
  <Sidebar/>
  <Routes>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  </Routes>
 
</div>   
    
  )
}

export default App
