import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';

import SignIn from './forms/signin.jsx';
import baliStart from './utils/binaryplatform.js';

document.addEventListener('DOMContentLoaded', () => {

    const appEl = document.querySelector('#signInBtn');

    Modal.setAppElement(appEl);

    [].forEach.call(document.querySelectorAll('.nav li'), element => {
        element.addEventListener('mouseenter', () => element.classList.add('hover'));

        element.addEventListener('mouseleave', () => element.classList.remove('hover'));
    });

    baliStart();

    ReactDom.render((<SignIn/>), appEl);

});