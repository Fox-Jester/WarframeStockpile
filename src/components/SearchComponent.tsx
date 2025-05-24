import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useSearchBar } from "./useSearchBar.tsx";
import type { CardData } from "../Types/CardTypes.ts";
import  SearchFilter from "./Home/SearchFilter.tsx";
import "../Styles/SearchComponent.css"



interface SearchComponentProps{
    list: string[],
    placeholder: string,
    onSelect: (value: string) => void,
    filter?: string,
    updateFilter?: Function

}

function SearchComponent({ list, placeholder, onSelect, filter = '', updateFilter }: SearchComponentProps) {

 
  const search = useSearchBar({ list, placeholderText: placeholder, onSelect});

  const cardArray = (JSON.parse(localStorage.getItem("cardArrayData")!) as CardData[]) || []

  function checkSets(name:string){
    const match = cardArray.find(card => card.name === name);
    if(match?.sets === 0){
      return "greyed"}
    else {
      return ""}
}



  const ListItems = search.preview.slice(0, 5).map((listName, index) => {
    if(filter){
      return <ListGroup.Item
          className={"search-item" + " " + checkSets(listName)}
          onMouseDown={() => search.handleListClick(listName)}
          key={index}>
          {listName}
          </ListGroup.Item>
    }
    else{
      return <ListGroup.Item
          className="search-item"
          onMouseDown={() => search.handleListClick(listName)}
          key={index}>
          {listName}
          </ListGroup.Item>
    }
  })



  return (
    <Form onSubmit={e => e.preventDefault()}>
      <InputGroup>
      {filter ? <SearchFilter updateFilter={updateFilter!} currentFilter={filter}/> : null}
        <Form.Control
          ref={search.inputRef}
          onKeyDown={search.handleKey}
          onBlur={search.visibleCheck}
          onFocus={() => search.setListVisible(true)}
          type="text"
          placeholder={search.placeholder}
          onChange={search.handleChange}
          value={search.value}
        />
        <Button onClick={search.handleSearchBtn}>Enter</Button>
      </InputGroup>
      <ListGroup ref={search.listRef}>
        {search.listVisible
          ? ListItems
          : null}
      </ListGroup>
    </Form>
  );
}

export default SearchComponent