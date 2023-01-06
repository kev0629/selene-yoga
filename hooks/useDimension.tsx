import {useState, useEffect} from 'react';


export function useDimension(){

    const [dimension, setDimension] = useState<number>(0);

    useEffect(() => {

        window.addEventListener('resize', resizeFunc);

        function resizeFunc(){
            setDimension(window.innerWidth)
        }
        resizeFunc();

        return () => {
            window.addEventListener('resize', resizeFunc);
        }

    }, []);

    return dimension
}  