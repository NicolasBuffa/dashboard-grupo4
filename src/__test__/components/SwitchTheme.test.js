import { getByRole, render, screen, act } from "@testing-library/react";
import { ThemeProvider } from "../../context/ThemeContext";
import SwitcherTheme from "../../components/SwitcherTheme/SwitcherTheme";
import userEvent from "@testing-library/user-event";
import storage from "../../utils/storage"

storage.get= jest.fn()

describe('SwitcherTheme tests: defecto clearTheme', () => {
    beforeEach( ()=>{
    storage.get.mockReturnValue('clearTheme')
        act(()=>{
            render(
            <ThemeProvider > 
                <SwitcherTheme />
            </ThemeProvider>)
        })        
    })
    
    test('debe renderizar el SwitcherTheme(checkbox)', () => {
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeInTheDocument()
    })
    
    test('debe activarse el checkbox al clickear', () => {   
        const checkbox = screen.getByRole('checkbox')     
        userEvent.click(checkbox)
        expect(checkbox).toBeChecked()
    })
    
    test('debe cambiar localStorage a darkTheme', () => {   
        const checkbox = screen.getByRole('checkbox')     
        userEvent.click(checkbox)
        const currentStorage = localStorage.getItem('theme')
        expect(currentStorage).toMatch('darkTheme')
    })
    test('debe agregar clase `darkTheme` a componentes(iconos) del switcher', () => {    
        const checkbox = screen.getByRole('checkbox')     
        userEvent.click(checkbox)
        const sunLogo= document.querySelector('.iconTheme')
        expect(sunLogo).toHaveClass('darkTheme')

    })
})

describe('SwitcherTheme tests: defecto darkTheme', () => {
    beforeEach( ()=>{
    storage.get.mockReturnValue('darkTheme')
        act(()=>{
            render(
            <ThemeProvider > 
                <SwitcherTheme />
            </ThemeProvider>)
        })        
    })
    
    test('debe cambiar a clear mode(agregar clase)', () => {    
        const checkbox = screen.getByRole('checkbox')
        userEvent.click(checkbox)
        const currentStorage = localStorage.getItem('theme')
        expect(currentStorage).toMatch('clearTheme')
    })
    

})
