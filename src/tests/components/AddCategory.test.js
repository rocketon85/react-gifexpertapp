import React from 'react';
import '@testing-library/jest-dom';

import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory';
;


describe('test of <AddCategory />', () => {
  
    const setCategories = jest.fn;
    const wrapper = shallow( <AddCategory setCategories={ setCategories }/>)  

    test('should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });   

    test('should change input value', () => {
        const input = wrapper.find('input');
        const val = 'Dragon Ball';
        

        input.simulate('change', {target: {value: val}});
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(val);

    });
    
    test('should not post on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault() {}});

        expect(setCategories).not.toHaveBeenCalled();
    });
    
  
});
