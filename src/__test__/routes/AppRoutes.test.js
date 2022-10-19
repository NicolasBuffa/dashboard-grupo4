import { render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { ThemeProvider } from "../../context/ThemeContext";
import AppRoutes from "../../routes/AppRoutes";



describe('Render App Routes', () => {
    const products = '/products';
    const productsNew = '/products/new';
    const productsView1 = '/products/1';
    const tiendas = '/store';
    it('iniciar en /home renderiza componente home con su h2', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <AppRoutes />
                </ThemeProvider>
            </MemoryRouter>);
        let homeComponents = screen.queryByText(/hola olivia/i)
        expect(homeComponents).toBeInTheDocument();

    });
    it('ir a /products renderiza productsList component', async () => {
        render(
            <MemoryRouter initialEntries={[products]}>
                <AppRoutes />
            </MemoryRouter>
        );
        let productsListComponents = await screen.findByText('Product List');
        expect(productsListComponents).toBeInTheDocument()
 
    })
    it('ir a /products/new renderiza productsNew component', async () => {
        render(
            <MemoryRouter initialEntries={[productsNew]}>
                <AppRoutes />
            </MemoryRouter>
        )
        let formNewProduct = await screen.findByText(/informacion/i)
        expect(formNewProduct).toBeInTheDocument()
    })
    it('ir a /products/id renderiza productsView component', async () => {
        render(
            <MemoryRouter initialEntries={[productsView1]}>
                <AppRoutes />
            </MemoryRouter>
        )
        let productsView1Components = await screen.findByText("1");
        expect(productsView1Components).toBeInTheDocument()
    })
    it('ir a /store renderiza notImplemented component', () => {
        render(
            <MemoryRouter initialEntries={[tiendas]}>
                <AppRoutes />
            </MemoryRouter>
        )
        let notImplemented = screen.queryByText(/Pagina en construccion/i);
        expect(notImplemented).toBeInTheDocument();
    })
    it('ir a /profile renderiza 404 component', () => {
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <AppRoutes />
            </MemoryRouter>
        )
        let cuatrocientosCuatro = screen.queryByText(/404/i);
        expect(cuatrocientosCuatro).toBeInTheDocument();
    })
});