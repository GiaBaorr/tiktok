import { useState, useEffect } from 'react';

function useDebounced(value, delay) {
    const [delayValue, setDelayValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDelayValue(value);
        }, delay);

        // cleanup
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return delayValue;
}
export default useDebounced;
