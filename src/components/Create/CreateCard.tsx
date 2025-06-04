



import modImg from "../../assets/images/Warframe/Mod.webp"
import arcaneImg from "../../assets/images/Warframe/Arcane.webp"

import "../../Styles/CardComponent.css"


import type { CardData} from "../../Types/CardTypes.ts"
import CardComponent from "../Card/CardComponent.tsx"
import PrimeSetsArray from "../../Arrays/PrimeSetsArray.tsx"
import SetTypesArray from "../../Arrays/SetTypesArray.tsx"


interface CreationCardProps{
  name: string,
  save?: boolean ,
  nameArrays: {arcanes: string[], mods: string[]}

}

function CreateCard({name, nameArrays, save=false}: CreationCardProps){

  const type = getType()
  
  const stockType = type === "prime" ? (PrimeSetsArray[(name as keyof typeof PrimeSetsArray)].type as keyof typeof SetTypesArray)
  : ""
  
  const partValues = SetTypesArray[stockType as keyof typeof SetTypesArray]?.map(() => ({ platinum: 0, quantity: 0})) || []
  
  
  
  
  const card: CardData =
  {
    name: name,
    type: type,
    img: getImg() ?? "",
    plat: 0,
    sets: 0,
    parts: partValues,
  }
  
  function getType(){
    if(Object.keys(PrimeSetsArray).includes(name)) {
      return "prime";
    }
    else if(nameArrays.arcanes.includes(name)){
      return "arcane"
    }
    else{
      return "mod"
    }
  }
  
  function getImg(){
    switch(type){
      case "prime":
        return PrimeSetsArray[(name as keyof typeof PrimeSetsArray)].img!;
        
        case "mod":
          return modImg
          
          case "arcane":
            return arcaneImg
            
          }
        }
        
        
        return(<CardComponent card={card} save={save}/>)
      }
      
export default CreateCard