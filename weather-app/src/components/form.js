import React from 'react';

const Forms = ({ getWeather }) => ( 
    <form onSubmit={getWeather}>
        <input type='text' name='city' placeholder='city'/>
        <input type='text' name='country' placeholder='country'/>
        <button>Get Weather</button>
    </form>
);
    
 
export default Forms;