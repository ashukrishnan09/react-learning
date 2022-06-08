import React from 'react';

function Button({handleCLick,children}) {
    console.log('Rendering button-',children)
    return (
       <button onClick={handleCLick}>
        {children}
       </button>
    );
}

export default React.memo(Button)