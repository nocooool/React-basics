import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
//to optimize we used the useloader hook as it optimise it more 

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary', {
    //         headers: {
    //           "Authorization": `Bearer ${process.env.VITE_ACCESS_TOKEN}`
    //         }})
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //             setError(error);
    //         });
    // }, []);

    // if (error) {
    //     return <div className='text-center m-4 bg-red-700 text-white p-4 text-3xl'>Error: {error.message}</div>;
    // }

    // if (!data) {
    //     return <div className='text-center m-4 bg-blue-700 text-white p-4 text-3xl'>Loading...</div>;
    // }

    return (
        <div className='content-center text-center m-4 bg-orange-700 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt='Github Profile' width={300} />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary', {
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
        }})
        return response.json()
}
