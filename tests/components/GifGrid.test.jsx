import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true
})

describe('Pruebas en GifGrid', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        render( <GifGrid category={category} />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category)); // Verifica que la categoría se muestre 


    })

    test('Debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category} />)
        expect(screen.getAllByRole('img').length ).toBe(2); // Verifica que se muestren dos imágenes
        
    });
});