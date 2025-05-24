
import { Container, Navbar, Nav} from "react-bootstrap"
import "../../Styles/NavigationBar.css"
import { NavLink } from "react-router"




function NavigationBar(){


    


    return(
       <Navbar expanded>
        <Container>
            <Navbar.Brand className="brand">
                WARFRAME
                <br />
                <span className="highlight">S</span>TOCK
                <span className="highlight">P</span>ILE
            </Navbar.Brand>
          <Nav className="gap-3-md nav" >
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-link selected" : "nav-link"
              }
              to="/"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-link selected" : "nav-link"
              }
              to="create"
            >
              Add to Stash
            </NavLink>
        
          </Nav>
        </Container>
       </Navbar>
    )
}

export default NavigationBar