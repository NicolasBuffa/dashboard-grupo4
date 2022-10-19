import SideBar from '../../../components/SideBar/SideBar';
import { getByRole, render, screen } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../../context/ThemeContext';
import userEvent from '@testing-library/user-event';


beforeEach(() => {
    render(
        <MemoryRouter>
            <ThemeProvider>
                <SideBar />
            </ThemeProvider>
        </MemoryRouter>
    )
});
const ButtonBurgerOpen = 'menuButton MenuButtonMobileDesactivate';
const ButtonBurgerClose = 'menuButton MenuButtonMobileActive';
const SideBarClose = 'SideBar SideBarDesactivate';
const SideBarOpen = 'SideBar SideBarActive';
const ButtonCloseSidebarClose = 'menuButtonCloseUp';
const ButtonCloseSidebarOpen = 'menuButtonClose';
const productRute = '/products';
const homeRute = '/home';
const storeRute = '/store';
const profieRoute = '/profile';
test('test fuera describe, render de sidebar', () => {

})
describe('TEST SIDEBAR HOCK', () => {

    it('renderiza el componente?', () => {
        screen.debug();
    });
    /* istanbul ignore file */

    it('cliquear Burguer button cambia la clase a componentes de sidebar', () => {
        let sidebar = screen.getByRole('navigation');
        let openSideBarOld = sidebar.firstChild;
        let sidebarOld = openSideBarOld.nextSibling;
        expect(SideBarClose).toBe(sidebarOld.className);
        userEvent.click(openSideBarOld);
        let sidebarNext = openSideBarOld.nextSibling;
        expect(SideBarOpen).toEqual(sidebarNext.className);
    })

    it('cliquear Burguer button cambia la clase a componentes de sidebar', () => {
        let sidebar = screen.getByRole('navigation');
        let openSideBarOld = sidebar.firstChild;
        userEvent.click(openSideBarOld);
        expect(sidebar).toBeInTheDocument();
        let closeSideBarOld = sidebar.lastChild;
        let sidebarOld = closeSideBarOld.previousSibling;
        expect(SideBarOpen).toEqual(sidebarOld.className);
        userEvent.click(closeSideBarOld);
        let sidebarNext = closeSideBarOld.previousSibling;
        expect(SideBarClose).toEqual(sidebarNext.className);
    })

    it('boton burger cambia de clase al clickearlo', () => {
        let sidebar = screen.getByRole('navigation');
        let openSideBarOld = sidebar.firstChild;
        expect(ButtonBurgerOpen).toBe(openSideBarOld.className);
        userEvent.click(openSideBarOld);
        expect(ButtonBurgerClose).toBe(openSideBarOld.className);
    })

    it('boton cerrar sidebar cambia sus clases al cliquearlo', () => {
        let sidebar = screen.getByRole('navigation');
        let openSideBarOld = sidebar.firstChild;
        let closeSideBarOld = sidebar.lastChild;
        expect(ButtonCloseSidebarClose).toBe(closeSideBarOld.className);
        userEvent.click(openSideBarOld);
        let closeSideBarNew = sidebar.lastChild;
        expect(ButtonCloseSidebarOpen).toBe(closeSideBarNew.className);
        userEvent.click(closeSideBarNew);
        let closeSideBarOldNew = sidebar.lastChild;

        expect(ButtonCloseSidebarClose).toBe(closeSideBarOldNew.className);
    })
    it('se renderizan los 3 links  de article', () => {
        let anchors = screen.getByRole('article');
        expect(anchors.children.length).toBe(3);
    })
    it('se renderizan los Links de Products', () => {
        let productos = screen.getByText(/productos/i);
        expect(productos).toBeInTheDocument();
    });
    it('se renderizan los Links de Home', () => {
        let home = screen.getByText(/inicio/i);
        expect(home).toBeInTheDocument();
    });
    it('se renderiza el logo', () => {
        let logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });
    it('se renderiza perfil Button ', () => {
        let profileButton = screen.getByRole('link', { name: 'Olivia' });
        expect(profileButton).toBeInTheDocument();
    });
    //Side Bar Anchors y rutas se;aladas 
    it('link Inicio tiene su determinado HREF', () => {
        let home = screen.getByText(/inicio/i);
        expect(home.getAttribute('href')).toBe(homeRute);

    });
    it('link Tiendas tiene su determinado href', () => {
        let tiendas = screen.getByText(/tiendas/i);
        expect(tiendas.getAttribute('href')).toBe(storeRute);
    });
    it('link Productos tiene su determinado href', () => {
        let productos = screen.getByText(/productos/i);
        expect(productos.getAttribute('href')).toBe(productRute);
    });
    it('el logo es un link a /home', () => {
        let logo = screen.getByAltText('logo').parentElement;
        logo.getAttribute('href');
        expect(logo.getAttribute('href')).toEqual(homeRute);
    })
    it('Profile Button es un link que lleva a /profile',()=>{
        let profileButton = screen.getByRole('link', {name:'Olivia'});
        expect(profileButton.getAttribute('href')).toEqual(profieRoute);
    })
})















// Test Side Bar Components




