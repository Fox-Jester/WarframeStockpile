import { Accordion, Card, CloseButton} from "react-bootstrap";
import CreateCardBottom from "./CardBottom";
import CreateCardParts from "./CardPartGroup";
import type { CardData, PartValuesGroup } from "../Types/CardTypes";
import PSReference from "../Arrays/PSReference";
import  TypeRef from "../Arrays/TypeRef";
import { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"



interface CardComponentProps{
    card: CardData,
    created?: boolean,
    save?: boolean,
    onDelete?: Function,
    stockpile?: boolean
}

function CardComponent({card, created=false , save=false, onDelete, stockpile=false}: CardComponentProps){
  

    const [bottomValues, setBottomValues] = useState({ plat: card.plat, sets: card.sets })
    
    
    const stockType = card.type === "prime" ? (PSReference[(card.name as keyof typeof PSReference)].type as keyof typeof TypeRef)
        : ""
    
        
    const [partValues, setPartValues] = useState<PartValuesGroup[]>(() => 
            card.parts.map((part) => ({ platinum: part.platinum, quantity: part.quantity})) || []
    )

    const prevSetsRef = useRef(bottomValues.sets);

    useEffect(() => {
        if(created){
          
            saveData()
        }
    },[bottomValues, partValues])

    
  useEffect(() => {
    if(save){
      saveData()
    }
  },[save])


    useEffect(() => {

  if(card.type === "prime"){

    const setArray = TypeRef[stockType as keyof typeof TypeRef].map((item) => {
      return item.perSet
    })
  
    if (bottomValues.sets > prevSetsRef.current) {
      setPartValues(prev => prev.map((part, index) => ({ ...part,
          quantity: (part.quantity / setArray[index]) < bottomValues.sets ? (bottomValues.sets * setArray[index]) : part.quantity
        }))
      );
    }
    else if(bottomValues.sets < prevSetsRef.current){
        setPartValues(prev => prev.map((part, index) => ({ ...part,
          quantity: (part.quantity - setArray[index]) 
        }))
      );
    }
    
    prevSetsRef.current = bottomValues.sets;
  }

}, [bottomValues.sets]);


  function saveData(){
    const newCard = {
      name: card.name,
      type: card.type,
      img: card.img ?? "",
      plat: bottomValues.plat,
      sets: bottomValues.sets,
      parts: partValues,
    }
    if(localStorage.getItem("cardArrayData")){
        
        const cardArray = JSON.parse(localStorage.getItem("cardArrayData")!) as CardData[];
        const filteredArray = cardArray.filter((prevCard) => prevCard.name !== newCard.name);
        filteredArray.push(newCard);
        localStorage.setItem("cardArrayData", JSON.stringify(filteredArray))

    }
     else{
      localStorage.setItem("cardArrayData", JSON.stringify([newCard]))
    }
    }

    function deleteCard(){
        if(confirm("Delete Card?")){

          const cardArray = JSON.parse(localStorage.getItem("cardArrayData")!) as CardData[];
          const filteredArray = cardArray.filter((prevCard) => prevCard.name !== card.name);
          localStorage.setItem("cardArrayData", JSON.stringify(filteredArray));
          if (onDelete) onDelete();
        }
    }


    const normalCard = (
         <Card className="stock bg-light mb-2 card-animate">
          <Card.Header className="d-flex align-items-center justify-content-center" >
          <Card.Title className="fs-4" >{card.name}</Card.Title>

          {created ? <CloseButton onClick={deleteCard}/> : null}
          </Card.Header>
          {card.name ? <Card.Img loading="lazy" src={card.img}/>: <></>}  
        <Card.Body>

        {card.type === "prime" ? <CreateCardParts partValues={partValues} setPartValues={setPartValues} stockType={(stockType as keyof typeof TypeRef)}/> : <></>}

             </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
        <CreateCardBottom bottomValues={bottomValues} setBottomValues={setBottomValues}/>
        
        </Card.Footer>
        </Card>) 
    
    const stockCard = (
     
      <Accordion>
      <Card className="stock bg-light mb-2 ">
          <Accordion.Header className="d-flex align-items-center justify-content-center" >
          <Card.Title className="fs-4" >{card.name}<i className="card-chevron card-chevron-header bi bi-chevron-right"/></Card.Title>

          </Accordion.Header>
          {created ? <CloseButton  className="delete-btn" onClick={deleteCard}/> : null}
          <Accordion.Body>

          {card.name ? <Card.Img src={card.img}/>: <></>}  
        <Card.Body>

        {card.type === "prime" ? <CreateCardParts partValues={partValues} setPartValues={setPartValues} stockType={(stockType as keyof typeof TypeRef)}/> : <></>}

             </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
        <CreateCardBottom bottomValues={bottomValues} setBottomValues={setBottomValues}/>
        
        </Card.Footer>
          </Accordion.Body>
        </Card>
      </Accordion>
      
    )

    return(
      stockpile ? stockCard : normalCard
    )
}

export default CardComponent