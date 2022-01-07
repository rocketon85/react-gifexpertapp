import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({cat}) => {
   
    const {data:images, loading} = useFetchGifs(cat);
  

    return (
        <>
            <h3>{cat}</h3>

            {loading && <p>Loading</p>}

            <div className='card-grid animate__animated animate__bounce'>
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img} 
                        />))
                }
            
            </div>
        </>
    )
}


GifGrid.propTypes  = {
    cat: PropTypes.string.isRequired
}