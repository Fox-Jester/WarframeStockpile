import { ButtonGroup,  Container,  } from "react-bootstrap"
import type { CardData } from "../../Types/CardTypes"
import CardComponent from "../CardComponent"
import { useState} from "react"
import SelectorGroup from "../SelectorGroup";


interface StockpileProps{
    cardArray: CardData[],
     onDelete: Function,
     
}


function Stockpile({ onDelete, cardArray}: StockpileProps){

    const [filter, setFilter] = useState("A-Z");
   

    

    console.log(filter)

    function sortCards(array: CardData[]){
        switch(filter){
            case "A-Z":
                return array.sort((a, b) => {
                   if(a.name > b.name){
                    return 1
                   }
                   else{
                    return -1
                   }  
                })
            case "sets":
                return array.sort((a, b) => {
                      if(a.sets < b.sets){
                    return 1
                   }
                   if(a.sets > b.sets){
                    return -1
                   }
                   return 0  
                })
            case "price":
                return array.sort((a, b) => {
                     if(a.plat < b.plat){
                    return 1
                   }
                   if(a.plat > b.plat){
                    return -1
                   }
                   return 0  
                })
        }
    }

    function getCards(){
        const filteredCardArray = sortCards(cardArray)
 
        return (filteredCardArray ?? []).map((card,index) => <CardComponent stockpile={true} key={card.name + index} onDelete={onDelete} created={true} card={card}/>)
    }
    
    
    return(
        <>
        <ButtonGroup>
            <SelectorGroup selected={filter} setSelected={setFilter} array={["A-Z", "sets", "price"]}/>
        </ButtonGroup>
        <Container className="stockpile p-0">
            
            {getCards()}

            
        </Container>
        </>
    )
}

export default Stockpile