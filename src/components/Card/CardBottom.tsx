import { Button,  Form,  InputGroup, Stack } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { BlockInvalidKey } from "../../BlockInvalidKey"; 


function CardBottom({bottomValues, setBottomValues}: {bottomValues: {plat: number, sets: number}, setBottomValues: Function}){

   

function handleInput(type: "plat" | "sets", e: React.ChangeEvent<any>) {
  const value = e.target.value;

  if (value === "" || (type === "plat" && value.length <= 4) || (type === "sets" && value.length <= 3)) {
    setBottomValues({
      ...bottomValues,
      [type]: value === "" ? 0 : Number(value),
    });
  }
}

function handleBtn(type: string){
  if(type === "plus" && bottomValues.sets !== 999){
    setBottomValues({...bottomValues, sets: (bottomValues.sets + 1)})
  }
  else if(type === "minus" && bottomValues.sets !== 0){
    setBottomValues({...bottomValues, sets: (bottomValues.sets -1)})
  }
}

    return(
        <Stack className="mt-2 align-items-center justify-content-center ">
            <InputGroup className="gap-2 mb-3" style={{ width: '160px', height: "30px" }}>
            <Form.Text className="fs-6">Platinum:</Form.Text>
            <Form.Control value={bottomValues.plat === 0 ? "" : bottomValues.plat} onKeyDown={BlockInvalidKey} onChange={e => handleInput("plat", e)} type="number" placeholder="0" />
            </InputGroup>
          

           
            <p className="m-0">Sets</p>
            <InputGroup  className="gap-2 mb-4" style={{ width: '160px', height: "30px" }} >
            
            <Button onClick={() => handleBtn("minus")}>
                <FontAwesomeIcon icon={faMinus}/>
            </Button>

            
            <Form.Control value={bottomValues.sets === 0 ? "" : bottomValues.sets} onKeyDown={BlockInvalidKey}
             onChange={e => handleInput("sets", e)} type="number" style={{textAlign: "center"}} placeholder="0" />
            

            <Button onClick={() => handleBtn("plus")}>
                <FontAwesomeIcon icon={faPlus}/>
            </Button>
            
            </InputGroup>
          
             
        </Stack>
    )
}

export default CardBottom