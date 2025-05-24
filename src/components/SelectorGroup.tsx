import { useRef} from "react"
import { ButtonGroup, ToggleButton } from "react-bootstrap"


function SelectorGroup({selected, setSelected, array}: {selected: string, setSelected: Function, array: string[]}){


    const typeRef = useRef(array);
    
    function PascalCase(str: string){
         return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const buttonArray = typeRef.current.map((type, index) =>{
        return <ToggleButton onClick={() => setSelected(type)} className="fs-5" 
                checked={selected === type} type="radio" id={type + "-toggle"} variant="outline-primary" 
                key={type + index} value={type} >{PascalCase(type)}</ToggleButton>
    })

   

    return(
         <ButtonGroup aria-label="Type Selector" >
                
               {buttonArray}
                </ButtonGroup>
    )
}

export default SelectorGroup