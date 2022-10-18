import { getByRole, render, screen, act } from "@testing-library/react";
import { ThemeContext, ThemeProvider } from "../../context/ThemeContext";
import SwitcherTheme from "../../components/SwitcherTheme/SwitcherTheme";
import userEvent from "@testing-library/user-event";
import { spyOn } from "@jest/globals"
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
    
    test('debe cambiar a dark mode(agregar clase)', () => {   
        const checkbox = screen.getByRole('checkbox')     
        userEvent.click(checkbox)
        const currentStorage = localStorage.getItem('theme')
        expect(currentStorage).toMatch('darkTheme')
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
    test('debe guardar en el localStorage()', () => {    
        const beforeStorage = localStorage.getItem('theme')
        console.log("storage "+storage.get("theme"))
        console.log("local "+beforeStorage)
        screen.debug()

        // const checkbox = screen.getByRole('checkbox')
        // userEvent.click(checkbox)
        // const afterStorage = storage.get('theme')
        // console.log(afterStorage)
        // expect(beforeStorage).not.toMatch(afterStorage)
    })

})
