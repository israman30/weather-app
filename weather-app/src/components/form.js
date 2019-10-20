import React from 'react';

const Forms = props => ( 
    <form onSubmit={props.getWeather}>
        <input type='text' name='city' placeholder='city'/>
        <input type='text' name='country' placeholder='country'/>
        <button>get weather</button>
    </form>
);
    
 
export default Forms;