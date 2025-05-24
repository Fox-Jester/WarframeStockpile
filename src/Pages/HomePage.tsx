import {  useState } from "react"
import {  Stack } from "react-bootstrap"
import type { CardData } from "../Types/CardTypes"
import SearchBar from "../components/Home/SearchBar"
import CardComponent from "../components/CardComponent";
import Stockpile from "../components/Home/Stockpile";



function HomePage({pageAlert}: {pageAlert: Function}){

    const [cardName, setCardName] = useState("");

    const [cardFilter, setCardFilter] = useState("all")
    
    const [cardArray, setCardArray] = useState((JSON.parse(localStorage.getItem("cardArrayData")!) as CardData[]) || [])
    
   


    function getStockCardArray(){

        const updatedCards = cardArray.filter(card => card !== getCard())
        return cardFilter === "all" ? updatedCards : updatedCards.filter(card => card.type === cardFilter);
    }
  
    function getCard(){
        return cardArray.find(card => card.name === cardName) as CardData
    }

    function refreshCardArray(){
  
        setCardArray((JSON.parse(localStorage.getItem("cardArrayData")!) as CardData[]) || [])
    }

    function currentCardDelete(){
        setCardName("")
        OnCardDelete()
    }

    function OnCardDelete(){
      
        pageAlert("Card Deleted")
        refreshCardArray()
    }

    function handleNameSelect(name: string){
        refreshCardArray()
        setCardName(name)
    }



    console.log(cardArray)
    
    return(
        <Stack gap={4} className="align-items-center ">
            <SearchBar cardArray={cardArray} handleSelect={handleNameSelect} filter={cardFilter} updateFilter={setCardFilter}/>
            { cardName && getCard() ? <CardComponent key={cardName}  created={true} onDelete={currentCardDelete} card={getCard()}/> : null}
            { cardArray.length === 0 ? <h2 className="text-light">Stockpile empty, Add to Stash!</h2> :
             <Stockpile onDelete={OnCardDelete} cardArray={getStockCardArray()}/>}
             

        </Stack>
            
       
        
    )
}

export default HomePage