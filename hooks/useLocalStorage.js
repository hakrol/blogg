import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(initialValue);

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item
                ? setStoredValue(JSON.parse(item))
                : setStoredValue(initialValue);
        } catch (error) {
            return setStoredValue(initialValue);
        }
    }, []);

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            console.log(storedValue);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}
