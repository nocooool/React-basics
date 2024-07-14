// the hooks are always written in js format not in jsx
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({}) //passing empty object to avoid crash 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;