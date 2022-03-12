import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test of GifGrid', () => {
    const category = "Dragon Ball";

  test('should match with snapshot', () => {
    useFetchGifs.mockReturnValue({
        data:[],
        loading: true
    });

    const wrapper = shallow( <GifGrid cat={ category } /> );

    expect( wrapper ).toMatchSnapshot();
    
  });
  
  test('should render with data', () => {
      const imgs = [{
          id: 1,
          title: 'test',
          url: 'http://'
      }]

    useFetchGifs.mockReturnValue({
        data:imgs,
        loading: false
    });

    const wrapper = shallow( <GifGrid cat={ category } /> );

    expect( wrapper ).toMatchSnapshot();

    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(imgs.length);

  });
  
});
