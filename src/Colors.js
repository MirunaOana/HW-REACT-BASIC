import React, { useState } from 'react';

import './Colors.css';

function Colors() {

    const colors = ['red', 'blue', 'yellow', 'green', 'pink'];

    const [index, setIndex] = useState(0);
    
    const [color, setColor] = useState('none');
    
    function handleClick() {

        setIndex(index + 1);
        
        setColor(colors[index]);

        if ( index !== 4) {

            setIndex(index + 1);

        } else {

            setIndex(0);
        }

    }

    return (
        
        <div><span className={color} >Currently selected color: {color} </span><button onClick={ handleClick }>Change Color</button></div>
    );
} 

export default Colors;