

import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./components/Home/NavigationBar.tsx"
import HomePage from "./Pages/HomePage.tsx"
import CreatePage from "./Pages/CreatePage.tsx"
import { useRef, useState } from "react"
import {  Container } from "react-bootstrap"
import PageAlert from "./components/PageAlert.tsx"
import { BrowserRouter, Route, Routes } from "react-router"


function App() {

  
 


const [alert, setAlert] = useState<{ visible: boolean; text: string }>({ visible: false, text: "" });
const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

function handleAlert(text: string) {
  setAlert({ visible: true, text });

  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  timeoutRef.current = setTimeout(() => {
    setAlert((prev) => ({ ...prev, visible: false }));
  }, 1500);
}



  return (
    <>
    <BrowserRouter>
      <NavigationBar />
      <div className="page-container">
      <PageAlert visible={alert.visible} text={alert.text}/>
      <Container className="d-flex pt-5 pe-0 ps-0 flex-column align-items-center gap-4 ">
        <Routes>
          <Route path="/" element={<HomePage pageAlert={handleAlert}/>}/>
          <Route path="create" element={ <CreatePage pageAlert={handleAlert}/>}/>
        </Routes>
     
      </Container>
      </div>
    </BrowserRouter>

     
    </>
  )
}

export default App
