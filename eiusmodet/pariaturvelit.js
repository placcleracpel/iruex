import React from 'react';

const MyComponent = () => {
    // Function to reset the renderer
    const _resetRenderer = () => {
        // Example: Reset state variables
        // setState({ ...initialState });

        // Example: Clear input fields
        // document.getElementById('inputField').value = '';

        console.log('Renderer reset.');
    };

    return (
        <div>
            <button onClick={_resetRenderer}>Reset Renderer</button>
        </div>
    );
};

export default MyComponent;
