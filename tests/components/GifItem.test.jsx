import { getByText, render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"


describe('Pruebas con giftItem', () => { 

    const title = 'Saitama';
    const url = 'https://localhost/algo.jpg';

    test('Debe de hacer match con el snapshot', () => { 

        const { container} = render( <GiftItem title={title} url={ url} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GiftItem title={title} url={ url} />)
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test(' debe de mostrar el titulo en el componente', () => {
        render( <GiftItem title={title} url={ url} />)
        expect(screen.getByText( title)).toBeTruthy();

    })
});