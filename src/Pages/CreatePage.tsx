import { Button} from "react-bootstrap"
import SelectorGroup from "../components/SelectorGroup"
import { useEffect, useState } from "react"
import CreateCard from "../components/Create/CreateCard.tsx"
import CreateBar from "../components/Create/CreateBar.tsx"





function CreatePage({pageAlert}: {pageAlert: Function}){

   

    const [type, setType] = useState("prime");
    const [nameValue, setNameValue] = useState("")
    const [save, setSave] = useState(false)


    useEffect(() => {
        if(save === true){
            setNameValue("")
            setSave(false)
        }
    },[save])

    if(localStorage.getItem("cardArrayData")){
        console.log(JSON.parse(localStorage.getItem("cardArrayData")!));
    }

 function handleTypeChange(newType: string) {
    setType(newType);
    setNameValue("");
  }

  function saveCard(){
    setSave(true);
    pageAlert("Card Created")

  }


    return(
        <>
      
            <SelectorGroup selected={type} setSelected={handleTypeChange} array={["prime", "mod", "arcane"]}/>

            <CreateBar type={type} onSelect={(value:string) => setNameValue(value)}/>
         
            {nameValue ? <CreateCard key={nameValue} type={type} name={nameValue} save={save}/> : <></>}
            
            {nameValue ? <Button onClick={saveCard} className="mb-5" size="lg">Save</Button> : null}
        

       
        </>
         

    )
}

export default CreatePage