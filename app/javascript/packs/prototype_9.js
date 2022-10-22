import React from 'react';
import ReactDOM from 'react-dom';
import Polysynth from '../prototypes/prototype_9/Polysynth';


document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('prototype_9')

    ReactDOM.render(
        <Polysynth />,
        container.appendChild(document.createElement('div'))
      )
})