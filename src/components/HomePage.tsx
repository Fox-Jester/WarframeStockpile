import {  useEffect, useState } from "react"
import {  Button, Stack } from "react-bootstrap"
import type { CardData } from "../Types/CardTypes"
import SearchBar from "./SearchBar/SearchBar"
import CardComponent from "./Card/CardComponent";
import Stockpile from "./Stockpile"; 
import CreateBar from "./Create/CreateBar";
import SelectorGroup from "./SelectorGroup";
import CreateCard from "./Create/CreateCard";



interface HomePageProps{
    pageAlert: Function,
     type: string,
     nameArrays: {arcanes: string[], mods: string[]}
}
function HomePage({pageAlert, type, nameArrays}: HomePageProps){

    
    ///search
    const [cardName, setCardName] = useState("");
    const [cardArray, setCardArray] = useState<CardData[]>([]) 
    
    ///both
    const [searchFilter, setSearchFilter] = useState("all")


    ///create
    const [selectedName, setSelectedName] = useState("")
    const [save, setSave] = useState(false)
    
    useEffect(() => {
    setCardArray((JSON.parse(localStorage.getItem("cardArrayData")!) as CardData[]) || []);
    }, []);

    useEffect(() => {
        setCardName("");
    },[type])

    useEffect(() => {
        if(save === true){
            setSelectedName("")
            refreshCardArray()
            setSave(false)
            }
    },[save])
    
    
     function handleTypeChange(newType: string) {
        setSearchFilter(newType);
        setSelectedName("");
      }
    
      function saveCard(){
        setSave(true);
        pageAlert("Card Created")
    
      }




    ///search stash logic

    function getStockCardArray(){

        const updatedCards = cardArray.filter(card => card !== getCard())
        return searchFilter === "all" ? updatedCards : updatedCards.filter(card => card.type === searchFilter);
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
    
    function getColor(){
    if(type === "search"){
        return "blue"
    }
    else {
        return "gold"
    }
    }


    
    return(
        <>
        <Stack gap={4} style={{minHeight: "720px"}} className={"align-items-center " + (getColor())}>

            <SelectorGroup selected={searchFilter} setSelected={handleTypeChange} array={["all", "prime", "mod", "arcane"]}/>
            {type === "search" ? <SearchBar cardArray={cardArray} handleSelect={handleNameSelect} filter={searchFilter}/> :
              <CreateBar type={searchFilter} nameArrays={nameArrays} onSelect={(value:string) => setSelectedName(value)}/>}

            {selectedName && type === "create" ? <CreateCard key={selectedName} nameArrays={nameArrays} name={selectedName} save={save}/> : <></>}
            {selectedName && type === "create" ? <Button onClick={saveCard} aria-label="Save new card" className="mb-5 save-btn" size="lg">Save</Button> : null}

            { cardName && getCard() && type === "search" ? <CardComponent key={cardName}  created={true} onDelete={currentCardDelete} card={getCard()}/> : null}
        </Stack>
        <Stack  gap={4} className="align-items-center  mb-5">
                { cardArray.length === 0 ? <h2 className="text-light" >Stockpile empty, Create more Stock</h2> :
                 <Stockpile onDelete={OnCardDelete} cardArray={getStockCardArray()}/>}
        </Stack>
        </>
             

            
       
        
    )
}

export default HomePage