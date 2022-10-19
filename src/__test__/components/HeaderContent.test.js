import { getByRole, render, screen, act } from "@testing-library/react";
import ContentHeader from "../../components/Header/HeaderContent/HeaderContent";

describe('Content Header', () => { 
    let component;
    const TestChild = ()=>{
        return(
            <div>
                <p>TestComponent</p>
            </div>
        )};

    beforeEach( ()=>{
        component = render( <ContentHeader > <TestChild /> </ContentHeader> )        
    })    

    test('Debe Renderizar el contenedor', () => { 
        const testComponent= screen.getByText(/testcomponent/i);
        expect(component.container).toContainElement(testComponent)
    })
})
