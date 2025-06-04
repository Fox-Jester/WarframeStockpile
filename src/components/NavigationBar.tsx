
import { Container, Navbar} from "react-bootstrap"
import "../Styles/NavigationBar.css"
import PageToggle from "./PageToggle" 



interface NavigationBarProps{
  pageType: string,
  setPageType: Function
}

function NavigationBar({pageType, setPageType}: NavigationBarProps){


    
    function getColor(){
      if(pageType === "search"){
        return "blue"
      }
      else {
        return "gold"
      }
    }

    return(
       <Navbar className="page-navbar" expanded>
        <Container>
            <Navbar.Brand className={"brand " + (getColor())}>
                WARFRAME
                <br />
                <span className="highlight">S</span>TOCK
                <span className="highlight">P</span>ILE
            </Navbar.Brand>
          
          <PageToggle pageType={pageType} setPageType={setPageType}/>
        
       
        </Container>
       </Navbar>
    )
}

export default NavigationBar