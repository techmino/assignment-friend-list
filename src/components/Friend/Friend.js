import React, { useReducer } from 'react';
fetch ('https://jsonplaceholder.typicode.com/photos')
.then (res => res.json())
.then(data => console.log(data));




const Friend = () => {
 


   

    
    return (
        <div>
            <h1>This is my Friend</h1>
        </div>
    );
};

export default Friend;