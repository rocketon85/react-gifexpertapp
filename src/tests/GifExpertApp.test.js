import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifExpertApp } from '../GifExpertApp';
// import { useFetchGifs } from '../../hooks/useFetchGifs';
// jest.mock('../../hooks/useFetchGifs');

describe('first', () => {
    test('should match snapshot', () => {
        const wrapper = shallow( <GifExpertApp  /> );

        expect(wrapper).toMatchSnapshot();
        
    });
  
    test('should must render two categories', () => {
        const cats = ['Dragon Ball', 'One Punch'];
        const wrapper = shallow( <GifExpertApp defaultCategories={cats} /> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(cats.length);
        
    });
});
