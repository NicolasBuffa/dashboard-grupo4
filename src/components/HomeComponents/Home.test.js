import { findAllByRole, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import productJSON from "../../../products.json";
import { ThemeProvider } from '../../context/ThemeContext';
import { getProductsAPI } from "../../utils/methods";
import HomeComponent from "./HomeComponent";



jest.mock("../../utils/methods")

describe("ERROR", () => {
    let component
    beforeEach(async () => {

        getProductsAPI.mockResolvedValue({
            json: () => {
               return new Promise((resolve, reject) => {
                    resolve(productJSON)

                })
            }
        })
        await act(async () => {
            component = await render(<MemoryRouter><ThemeProvider> <HomeComponent /> </ThemeProvider></MemoryRouter>);


        })
        
    })
    test("Debe rendeerizar lo articles", ()=>{
        const article= screen.getAllByRole('article')
        expect(article.length).toBe(2)
    })
    test("Debe renderizar 2 divs por article", ()=>{
        const article= screen.getAllByRole('article')
        article.forEach((element)=>{
            const divs= element.children
            // console.log(element.firstChild)
            expect(divs.length).toBe(2)
        })
    })

    test("Debe renderizar bien los contenidos de los divs",()=>{
        const article = screen.getAllByRole('article')
        article.forEach((element)=>{
            const firstDiv= element.firstChild
            const lastDiv= element.lastChild
            const hijosFirst= firstDiv.children
            const hijosLast= lastDiv.children
            expect(hijosFirst.length).toBe(3)
            expect(hijosLast.length).toBe(2)

        })


    })

    test("El article de productos debe tener la misma cantidad que productosJson", ()=>{
        const article= screen.getAllByRole('article')
        const firstArticle = article[0]
        const divInfo= firstArticle.firstChild
        const firstChild = divInfo.firstChild
        const numberChild = parseFloat(firstChild.nextSibling.textContent)
        const numberApi= Object.values(productJSON).length
        // console.log(numberChild)
        // console.log(numberApi)
        expect(numberChild).toBe(numberApi)

    })
   
    test("El article de tiendas debe tener 10", ()=>{
        const article =screen.getAllByRole('article')
        const lastArticle = article[1]
        const divInfo = lastArticle.firstChild
        const firstChild = divInfo.firstChild
        const numberChild = parseFloat(firstChild.nextSibling.textContent)
        const numberApi= 10
        // console.log(numberChild)
        // console.log(numberApi)
        expect(numberChild).toBe(numberApi)
    })

  test("Debe estar bien el link ver listado del article producto",()=>{
    const verListado= screen.getAllByText(/ver listado/i)
    expect(verListado[0].getAttribute('href')).toBe('/products')
  })


  test("Debe estar bien el link Agregar Producto del article producto",()=>{
    const agregarProducto = screen.getByRole('link', {name: 'Agregar Producto'})
    expect(agregarProducto.getAttribute('href')).toBe('/products/new')

  })

  test("Debe estar bien el link Ver Listado del article tiendas",()=>{
    const verListado= screen.getAllByText(/ver listado/i)
    
    expect(verListado[1].getAttribute('href')).toBe('/store')

  })

  test("Debe estar bien el link Agregar Tienda del article tiendas",()=>{
    const agregarTienda = screen.getByRole('link', {name: 'Agregar Tienda'})

    expect(agregarTienda.getAttribute('href')).toBe('/store/new')

  })
})

