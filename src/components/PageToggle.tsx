
import {  ButtonGroup } from "react-bootstrap";
import "../Styles/PageToggle.css"

interface PageToggleProps{
    pageType: string,
    setPageType: Function
}

function PageToggle({pageType, setPageType}:PageToggleProps){

    
    function handleClick(type: string){
        setPageType(type);
    }

    return(
        <ButtonGroup className="page-toggle gap-2" >
            <button onClick={() => handleClick("search")}
             className={"page-toggle-btn search-toggle" + (pageType === "search" ? " selected": "")} >Search</button>

            <button onClick={() => handleClick("create")}
             className={"page-toggle-btn create-toggle" + (pageType === "create" ? " selected": "")} >Create</button>

        </ButtonGroup>
    )
}

export default PageToggle