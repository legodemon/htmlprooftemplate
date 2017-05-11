import React from 'react';
import ReactModal from 'react-modal'
import cx from 'classnames';

import * as constants from '../utils/constants.js';
import ajax from '../utils/ajax.js';

export default class SignIn extends React.Component {

    state = {
        showModal: false,
        pending: false,
        email: '',
        password: '',
        error: ''
    };

    handleOpenModal = () => (!this.state.pending) && this.setState(state => ({showModal: true}));

    handleCloseModal = () => (!this.state.pending) && this.setState(state => ({showModal: false}));

    handleInputChange = (inputName, e) => {
        const value = e.target.value;
        this.setState(state => ({[inputName]: value}));
    };

    handleClickDone = () => {

        if(!this.state.pending) {

            this.setState(state => ({pending: true}));

            const formData = new FormData();

            formData.append('_username', this.state.email);
            formData.append('_password', this.state.password);

            ajax('http://rightbinary.asaunin.dev.alpari-ru.dom/login_check', 'POST',
                response => {
                    this.setState(state => ({pending: false}));
                    console.log(response)
                },
                () => {
                    this.setState(state => ({pending: false}));
                    console.log('error')
                },
                formData
            )
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

                    <div className={`${primaryClsName}-body-input`}>
                        <label className={`${primaryClsName}-body-input-label`}>Email</label>
                        <input
                            className={cx(`${primaryClsName}-body-input-input`, {[`${primaryClsName}-body-input-disabled`]: this.state.pending})}
                            disabled={this.state.pending}
                            onChange={this.handleInputChange.bind(this, 'email') }
                            type="text" placeholder='Email'/>
                    </div>

                    <div className={`${primaryClsName}-body-input`}>
                        <label className={`${primaryClsName}-body-input-label`}>Пароль</label>
                        <input
                            className={cx(`${primaryClsName}-body-input-input`, {[`${primaryClsName}-body-input-disabled`]: this.state.pending})}
                            disabled={this.state.pending}
                            onChange={this.handleInputChange.bind(this, 'password') }
                            type="password" placeholder='******'/>
                    </div>
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