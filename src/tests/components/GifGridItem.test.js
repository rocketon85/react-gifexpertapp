import {shallow} from 'enzyme';
import React from 'react';

import {GifGridItem} from '../../components/GifGridItem';

describe('GifGridItem', () => {
    
    test('should match snaptshot', () => {
        const wrapper = shallow(<GifGridItem/>);

        expect(wrapper).toMatchSnapshot();
    })
    
})
