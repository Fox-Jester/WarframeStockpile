import { Form } from "react-bootstrap";




function SearchFilter({updateFilter, currentFilter}: {updateFilter: Function, currentFilter: string}){






    return(
        <Form.Select  aria-label="All"
            className={"filter-select" + " " + (currentFilter === "all" || currentFilter === "mod" ? "less-padding" : "")}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="prime">Primes</option>
            <option value="mod">Mods</option>
            <option value="arcane">Arcanes</option>
        </Form.Select>
    )
}

export default SearchFilter