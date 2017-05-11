import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';

import SignIn from './forms/SignIn.jsx';
import SignUp from './forms/SignUp.jsx';

import baliStart from './utils/binaryplatform.js';

document.addEventListener('DOMContentLoaded', () => {

    [].forEach.call(document.querySelectorAll('.nav li'), element => {
        element.addEventListener('mouseenter', () => element.classList.add('hover'));

        element.addEventListener('mouseleave', () => element.classList.remove('hover'));
    });

    baliStart();

    const signUp = document.querySelector('#signUp'),
        signIn = document.querySelector('#signIn');

    Modal.setAppElement(signUp);
    Modal.setAppElement(signIn);

    ReactDom.render((<SignUp/>), signUp);
    ReactDom.render((<SignIn/>), signIn);

});