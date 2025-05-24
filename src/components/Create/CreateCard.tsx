
import PSReference from "../../Arrays/PSReference.tsx"

import modImg from "../../assets/images/Warframe/Mod.webp"
import arcaneImg from "../../assets/images/Warframe/Arcane.webp"

import "../../Styles/CardComponent.css"

import TypeRef from "../../Arrays/TypeRef.tsx"
import type { CardData} from "../../Types/CardTypes.ts"
import CardComponent from "../CardComponent.tsx"


interface CreationCardProps{
  name: string,
  type: string,
  save?: boolean ,

}

function CreateCard({name, type, save=false}: CreationCardProps){

  
  
  const bottomValues = ({plat: 0, sets: 0})
  
  
  const stockType = type === "prime" ? (PSReference[(name as keyof typeof PSReference)].type as keyof typeof TypeRef)
  : ""
  
  const partValues = TypeRef[stockType as keyof typeof TypeRef]?.map(() => ({ platinum: 0, quantity: 0})) || []
  
   const card: CardData =
    {
      name: name,
      type: type,
      img: getImg() ?? "",
      plat: bottomValues.plat,
      sets: bottomValues.sets,
      parts: partValues,


    }

  
  function getImg(){
    switch(type){
      case "prime":
        return PSReference[(name as keyof typeof PSReference)].img!;
        
        case "mod":
          return modImg
          
          case "arcane":
            return arcaneImg
            
          }
  }
       
        
        return(<CardComponent card={card} save={save}/>)
}

export default CreateCard