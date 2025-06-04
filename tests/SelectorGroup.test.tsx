
import {render, screen} from "@testing-library/react"
import SelectorGroup from "../src/components/SelectorGroup.tsx"


describe(`it returns a button group repersenting the string array passed to it, then sets the current filter with the function passed`, () => {
    it("it should render a button group with the first letter capitalized",() => {
        render(
            <SelectorGroup
                selected="example"
                setSelected={() => {}}
                array={["one", "two", "three"]}/>
            )
            
       
        const label1 = screen.getByLabelText("One");
        const label2 = screen.getByLabelText("Two");
        const label3 = screen.getByLabelText("Three");
        expect(label1).toBeInTheDocument();
           expect(label2).toBeInTheDocument();
              expect(label3).toBeInTheDocument();
        
    })
})

