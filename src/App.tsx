

import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./components/NavigationBar.tsx" 
import HomePage from "./components/HomePage.tsx"

import { useEffect, useRef, useState } from "react"
import {  Container } from "react-bootstrap"
import PageAlert from "./components/PageAlert.tsx"

import { fetchModsAndArcanes } from "./Api/fetchModsAndArcanes.tsx"


function App() {

  
  
  const [nameArrays, setNameArrays] = useState<{arcanes: string[], mods: string[]}>({arcanes: [], mods: []})
  const [alert, setAlert] = useState<{ visible: boolean; text: string }>({ visible: false, text: "" });
  const [pageType, setPageType] = useState("search")

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  
  
  useEffect(() => {
    loadModsAndArcanes()
  },[])


  
async function loadModsAndArcanes() {
  const modsAndArcanes = await fetchModsAndArcanes();
  setNameArrays({
    arcanes: (modsAndArcanes.arcaneNames as string[]).map(String),
    mods: (modsAndArcanes.modNames as string[]).map(String)
  })
}

function handleAlert(text: string) {
  setAlert({ visible: true, text });

  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  timeoutRef.current = setTimeout(() => {
    setAlert((prev) => ({ ...prev, visible: false }));
  }, 1500);
}



  return (
    <>
 
      <NavigationBar pageType={pageType} setPageType={setPageType}/>
      <div className="page-container">
      <PageAlert visible={alert.visible} text={alert.text}/>
      <Container className="d-flex pt-4 pe-0 ps-0 flex-column align-items-center gap-4 ">
        
      <HomePage pageAlert={handleAlert} type={pageType} nameArrays={nameArrays}/>
        
      </Container>
      </div>


     
    </>
  )
}

export default App
