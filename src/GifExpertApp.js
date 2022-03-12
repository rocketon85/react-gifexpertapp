import React, {useState} from "react";
import PropTypes from 'prop-types';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//PdVA4yBUM2y4hsugeWvkdDNCv40jOVKC

export const GifExpertApp = ({defaultCategories=[]}) => {
    const [categories, setCategories] = useState(defaultCategories);
    
    const handlerAdd = (cat) =>{
        let added = false;

        if(cat.trim().length > 2){
            setCategories([cat, ...categories]);
            added=true;
        }
        return added;
    }

    return  (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={handlerAdd}></AddCategory>

           <ol>
               {
                    categories.map( (category,idx) => (
                         <GifGrid 
                            key={category}
                            cat={category}
                        />
                    ))

               }
           </ol>
        </>
    )
}


export default GifExpertApp;