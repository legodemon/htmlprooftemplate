import React from 'react';
import ReactModal from 'react-modal'
import cx from 'classnames';

import * as constants from '../utils/constants.js';
import ajax from '../utils/ajax.js';

import Input from './components/Input.jsx';

export default class SignIn extends React.Component {

    state = {
        showModal: false,
        pending: false,
        error: ''
    };

    handleOpenModal = () => (!this.state.pending) && this.setState(state => ({showModal: true}));

    handleCloseModal = () => (!this.state.pending) && this.setState(state => ({showModal: false}));

    handleClickDone = () => {

        if (!this.state.pending) {
            this.setState(state => ({pending: true}));

            const formData = new FormData();

            formData.append('_username', this.email.getValue());
            formData.append('_password', this.password.getValue());

            ajax('http://jsonplaceholder.typicode.com/posts', 'POST', formData)
                .then(result => {
                        this.setState(state => ({pending: false}));
                        console.log(result)
                    },
                    error => {
                        this.setState(state => ({pending: false}));
                        console.log(error)
                    })

        }
    };

    render() {
        const primaryClsName = `${constants.projectName}-modal-window`;

        return <div>
            <a onClick={this.handleOpenModal} className={`${constants.projectName}-button-standard-white`} href='#'>Войти</a>

            <ReactModal overlayClassName={`${constants.projectName}-modal-overlay`} isOpen={this.state.showModal}
                        className={`${primaryClsName}`}
                        contentLabel='sign in form'>
                <div className={`${primaryClsName}-header`}>
                    <div className={`${primaryClsName}-header-title`}>Авторизация</div>
                    <div className={`${primaryClsName}-header-close`} onClick={this.handleCloseModal}/>
                </div>
                <div className={`${primaryClsName}-body`}>

                    <Input ref={instance => this.email = instance}
                           className={`${primaryClsName}-body-input`}
                           labelClassName={`${primaryClsName}-body-input-label`}
                           inputClassName={cx(`${primaryClsName}-body-input-input`, {[`${primaryClsName}-body-input-disabled`]: this.state.pending})}
                           disabled={this.state.pending}
                           label="Email"
                           type="text"
                           placeholder="Email"/>

                    <Input ref={instance => this.password = instance}
                           className={`${primaryClsName}-body-input`}
                           labelClassName={`${primaryClsName}-body-input-label`}
                           inputClassName={cx(`${primaryClsName}-body-input-input`, {[`${primaryClsName}-body-input-disabled`]: this.state.pending})}
                           disabled={this.state.pending}
                           label="Пароль"
                           type="password"
                           placeholder="******"/>
                </div>
                <div className={`${primaryClsName}-footer`}>
                    <div className={cx(`${constants.projectName}-button-standard-grey`, {
                        [`${constants.projectName}-stripes`]: this.state.pending,
                        [`${constants.projectName}-button-disabled`]: this.state.pending
                    })}
                         onClick={this.handleCloseModal}>
                        Отмена
                    </div>
                    <div className={cx(`${constants.projectName}-button-standard-orange`, {
                        [`${constants.projectName}-stripes`]: this.state.pending,
                        [`${constants.projectName}-button-disabled`]: this.state.pending
                    })}
                         onClick={this.handleClickDone}>
                        Готово
                    </div>
                </div>
            </ReactModal>
        </div>;
    }
}