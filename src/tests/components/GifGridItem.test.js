import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('pruebas GrifGridItem', () => {

    test('debe mostrar el componente correctamente ', () => {
        const wrapper = shallow(<GifGridItem />);

        expect(wrapper).toMatchSnapshot();
    })
    
})
