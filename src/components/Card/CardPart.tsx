import { Button, Container, Form, FormControl, Image, InputGroup, Row, Stack } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

import { BlockInvalidKey } from "../../BlockInvalidKey" 


interface CardPartProps{
    piece: {perSet: number, img: string | undefined},
    value: {platinum: number, quantity: number},
    setValue: Function,
    

}
function CardPart({piece, value, setValue}: CardPartProps){

    const image = piece.img === "BP" ? <div className="bp-container"><h4 className="border rounded-circle border-primary p-3 text-primary fs-3">BP</h4></div> :
     <Image loading="lazy" className="part-img" src={piece.img} alt="Image of set part" roundedCircle/>


function handleInput(type: "platinum" | "quantity", e: React.ChangeEvent<any>) {
    const inputValue = e.target.value;

    if (inputValue === "" || (type === "platinum" && inputValue.length <= 4) || (type === "quantity" && inputValue.length <= 3)) {
    setValue([type], value[type] = inputValue === "" ? 0 : Number(inputValue),
    );
  }
}

function handleBtn(type: string){
  if(type === "plus" && value.quantity !== 999){
    setValue("quantity", (value.quantity + 1))
  }
  else if(type === "minus" && value.quantity > 0 ){
    setValue("quantity", (value.quantity - 1))
  }
}

    return(
        <Container className="part-stack">
            <Row>

        <Stack className=" justify-content-center align-items-center"  direction="horizontal">
            {image}
                
                <Stack className="align-items-center justify-content-center" >

                <Form.Text className=" fs-7">Platinum</Form.Text>
                <Form.Control onChange={e => handleInput("platinum", e)} onKeyDown={BlockInvalidKey} placeholder="0"
                 value={value.platinum ? value.platinum : ""} className="pe-1 ps-1 part-plat-input" type="number"/>
                </Stack>
             

        </Stack>
            </Row>
            <Form.Text className="fs-6" >Quantity</Form.Text>
            <Row>
                
        <Stack className="part-stack justify-content-center align-items-center"  direction="horizontal">
            <InputGroup className="part-set-group">
            <Button onClick={() => handleBtn("minus")} className="me-2"><FontAwesomeIcon icon={faMinus}/></Button>
            <FormControl onChange={e => handleInput("quantity", e)} onKeyDown={BlockInvalidKey} style={{ textAlign: "center"}}
             value={value.quantity ? value.quantity : ""} className="pe-1 ps-1" type="number" placeholder="0"/>
            <Button onClick={() => handleBtn("plus")} className="ms-2"><FontAwesomeIcon icon={faPlus}/></Button>
            
            </InputGroup>

        </Stack>
            </Row>
            <hr/>
        </Container>
    )
}

export default CardPart