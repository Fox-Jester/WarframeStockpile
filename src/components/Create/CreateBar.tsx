

import PSReference from "../../Arrays/PSReference.tsx";
import ModReference from "../../Arrays/ModReference.tsx";
import ArcaneReference from "../../Arrays/AcraneReference.tsx";
import { useEffect, useRef, useState } from "react";
import SearchComponent from "../SearchComponent.tsx";
import type { CardData } from "../../Types/CardTypes.ts";




function CreateBar({type, onSelect}: {type: string, onSelect: (value: string) => void}){


  const [placeholder,setPlaceholder] = useState("")
  const typeObjectRef = useRef<string[]>([])
  const cardArray = (JSON.parse(localStorage.getItem("cardArrayData")!) as CardData[]) || []
  const cardNameArray = cardArray.map(card => card.name)



  useEffect(() => {
    switch(type){
      case "prime":
        typeObjectRef.current = Object.keys(PSReference);
        setPlaceholder("Search Primes")
        break;

      case "mod":
        typeObjectRef.current = ModReference;
        setPlaceholder("Search Mods")
        break;

      case "arcane":
        typeObjectRef.current = ArcaneReference;
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