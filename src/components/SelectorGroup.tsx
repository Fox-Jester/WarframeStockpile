import { useRef} from "react"
import { ButtonGroup, ToggleButton } from "react-bootstrap"
import "../Styles/SelectorGroup.css"

interface SelectorGroupProps{
    selected: string,
     setSelected: Function,
      array: string[],
        

}

function SelectorGroup({selected, setSelected, array}: SelectorGroupProps){


    
    const categoryRef = useRef(array);
    
    function PascalCase(str: string){
         return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const buttonArray = categoryRef.current.map((category, index) =>{
        return <ToggleButton onClick={() => setSelected(category)} className="fs-5" 
                checked={selected === category} type="radio" id={category + "-toggle"} variant="outline-primary" 
                key={category + index} value={category} >{PascalCase(category)}</ToggleButton>
    })

  

    return(
         <ButtonGroup aria-label="Type Selector" >
                
               {buttonArray}
                </ButtonGroup>
    )
}

export default SelectorGroup