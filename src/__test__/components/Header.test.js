import Header from '../../components/Header/Header'
import { getByRole, render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('Header tests:', () => {

beforeEach(()=>{const component= render( <Header />)})

    test('Debe renderizarse el Header', () => { 
        const header =screen.getByRole( 'banner')
        expect( header).toBeInTheDocument()
    })
    test('Debe el Header incluir burger-button(SideBar)', () => { 
        const header =screen.getByRole( 'banner')
        // const button= document.querySelector('.menuButton')
        const button= screen.getByRole('button')    
        expect(header).toContainElement(button)
    })    
    test('Debe el Header permanecer siempre visible', () => { 
        const header =screen.getByRole( 'banner');
        expect(header).toMatchSnapshot();
    })
})

describe('Header Childs test:', () =>{
    const TestChild = ()=>{
        return(
            <div>
                <p>TestComponent</p>
            </div>
        )};
        
    test('Debe renderear childrens agregados', () => { 
            const component=render(
                <Header>
                <TestChild />
            </Header>)
        const header =screen.getByRole('banner');
        const testComponent= screen.getByText('TestComponent')
        expect(header).toContainElement(testComponent)
    })
    
})