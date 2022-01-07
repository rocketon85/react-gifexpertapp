import { useState, useEffect } from 'react';

import { getGif } from '../helpers/getGifs';

export const useFetchGifs = (cat) => {

    const [gifs, setGifs] = useState({
        data:[],
        loading: true
    });

    useEffect( () =>{
        getGif(cat).then(gifs => setGifs({
            data:gifs,
            loading:false
        } ));
    }, [cat])

    return gifs;
}

