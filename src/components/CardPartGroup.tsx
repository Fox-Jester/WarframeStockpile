

import TypeRef from "../Arrays/TypeRef.tsx"
import CardPart from "./CardPart.tsx"
import { Accordion} from "react-bootstrap"


import type { PartValuesGroup } from "../Types/CardTypes.ts";


interface CreateCardPartsProps{
    stockType: keyof typeof TypeRef,
    partValues: PartValuesGroup[],
    setPartValues: Function
}

function CardPartGroup({stockType, partValues, setPartValues}: CreateCardPartsProps){


function setValue(type: keyof PartValuesGroup, newValue:number, index:number){
    setPartValues((prev: PartValuesGroup[]) =>
        prev.map((item: PartValuesGroup, i: number) =>
            i === index ? { ...item, [type]: newValue } : item
        )
    )
}



const partArray = TypeRef[stockType].map((piece, index) => {
    return <CardPart value={partValues[index] || { platinum: 0, quantity: 0 }}
     setValue={(type: keyof PartValuesGroup, newValue: number) => 
        setValue(type, newValue, index)} piece={piece}  key={index}/>
})
    


return (
   
    <Accordion >
        <Accordion.Item eventKey="0">
        <Accordion.Header >Parts<i className="card-chevron bi bi-chevron-right"/></Accordion.Header>
        <Accordion.Body className="d-flex flex-column align-items-center p-0">
        {partArray}

        </Accordion.Body>

        </Accordion.Item>
    </Accordion>

      
   
)


}

export default CardPartGroup