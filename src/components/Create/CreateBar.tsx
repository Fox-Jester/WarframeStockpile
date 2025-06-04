




import { useEffect, useRef, useState } from "react";
import SearchComponent from "../SearchBar/SearchComponent.tsx"; 
import type { CardData } from "../../Types/CardTypes.ts";
import PrimeSetsArray from "../../Arrays/PrimeSetsArray.tsx";


interface CreateBarProps{
  type: string,
  nameArrays: {arcanes: string[], mods: string[]},
  onSelect: (value: string) => void,

}

function CreateBar({nameArrays, type, onSelect}: CreateBarProps){



  const [placeholder,setPlaceholder] = useState("")
  const typeObjectRef = useRef<string[]>([])
  const cardArray = (JSON.parse(localStorage.getItem("cardArrayData")!) as CardData[]) || []
  const cardNameArray = cardArray.map(card => card.name)



  useEffect(() => {
    switch(type){
      case "all":
        typeObjectRef.current = Object.keys(PrimeSetsArray).concat(nameArrays.mods, nameArrays.arcanes)
         setPlaceholder("Search All");
      
        break;

      case "prime":
        typeObjectRef.current = Object.keys(PrimeSetsArray);
        setPlaceholder("Search Primes")
        break;

      case "mod":
        typeObjectRef.current = nameArrays.mods;
        setPlaceholder("Search Mods")
        break;

      case "arcane":
        typeObjectRef.current = nameArrays.arcanes;
        setPlaceholder("Search Arcanes")
        break;
    }
  },[type]);


  function filterArray(array: string[]){
    return array.filter((name) => !cardNameArray.includes(name))
  }


    return(
        <SearchComponent list={filterArray(typeObjectRef.current)} placeholder={placeholder} onSelect={onSelect}/>
    )
}

export default CreateBar