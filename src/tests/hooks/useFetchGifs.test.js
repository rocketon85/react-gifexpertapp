import {renderHook} from "@testing-library/react-hooks";

import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('test useFetchGifs', () => {
    
    test('should ', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Dragon Ball')  );
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
            
    })

    test('should ', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Dragon Ball')  );

        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
            
    })
    
})
