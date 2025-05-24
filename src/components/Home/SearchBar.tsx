



import type { CardData } from "../../Types/CardTypes.ts"
import SearchComponent from "../SearchComponent.tsx"

interface SearchBarProps{
    cardArray: CardData[],
     handleSelect: (value: string) => void,
     filter: string,
     updateFilter: Function
}

function SearchBar({cardArray, handleSelect, filter, updateFilter}: SearchBarProps){


    const filteredArray = filter === "all" ? cardArray : cardArray.filter(card => card.type === filter)

    const nameArray = filteredArray.map((card) => card.name)

    return(
       <SearchComponent list={nameArray} placeholder={"Search Stockpile"} onSelect={handleSelect} filter={filter} updateFilter={updateFilter}/>
    )
}

export default SearchBar