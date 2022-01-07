import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handlerChange = (e) => {
        setInputValue(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (setCategories(inputValue)) { //setCategories(cats => [...cats, inputValue] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handlerChange }
            />
        </form>
    )
}

AddCategory.propTypes  = {
    setCategories: PropTypes.func.isRequired
}