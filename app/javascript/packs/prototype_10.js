import React from 'react';
import ReactDOM from 'react-dom';
import Polysynth from '../prototypes/prototype_10/Polysynth';


document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('prototype_10')

    ReactDOM.render(
        <Polysynth />,
        container)
})