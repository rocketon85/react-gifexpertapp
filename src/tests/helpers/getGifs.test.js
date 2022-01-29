import { getGif } from '../../helpers/getGifs';


describe('Pruebas con getGifs Fecth', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGif('One Punch');

        expect( gifs.length ).toBe( 10 );

    })

    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGif('');

        expect( gifs.length ).toBe( 0 );

    })
    

})


