import React from 'react';
import ReactModal from 'react-modal'
import cx from 'classnames';

import * as constants from '../utils/constants.js';
import ajax from '../utils/ajax.js';

export default class SignIn extends React.Component {

    state = {
        showModal: false,
        pending: false,
        error: ''
    };

    handleOpenModal = () => this.setState({showModal: true});

    handleCloseModal = () => this.setState({showModal: false});

    handleClickDone = () => {

        this.setState(state => ({pending: true}));

        ajax('http://beta.json-generator.com/api/json/get/E1bgheh0M', 'GET',
            response => {
                this.setState(state => ({pending: false}));
                console.log(response)
            },
            () => {
                this.setState(state => ({pending: false}));
                console.log('error')
            }
        )
    };

    render() {
        const primaryClsName = `${constants.projectName}-modal-window`;

        return <div>
            <a onClick={this.handleOpenModal} className={`${constants.projectName}-button-standard-orange`} href='#'>
                Открыть счёт
            </a>

            <ReactModal overlayClassName={`${constants.projectName}-modal-overlay`} isOpen={this.state.showModal}
                        className={`${primaryClsName}`}
                        contentLabel='sign up form'>
                <div className={`${primaryClsName}-header`}>
                    <div className={`${primaryClsName}-header-title`}>Регистрация</div>
                    <div className={`${primaryClsName}-header-close`} onClick={this.handleCloseModal}/>
                </div>
                <div className={`${primaryClsName}-body`}>
                    <div className={`${primaryClsName}-body-input`}>
                        <label className={`${primaryClsName}-body-input-label`}>Email</label>
                        <input
                            className={cx(`${primaryClsName}-body-input-input`, {[`${primaryClsName}-body-input-disabled`]: this.state.pending})}
                            disabled={this.state.pending}
                            placeholder='Email'/>
                    </div>
                    <div className={`${primaryClsName}-body-input`}>
                        <label className={`${primaryClsName}-body-input-label`}>Телефон</label>
                        <input
                            className={cx(`${primaryClsName}-body-input-input`, {[`${primaryClsName}-body-input-disabled`]: this.state.pending})}
                            disabled={this.state.pending}
                            placeholder='Телефон'/>
                    </div>
                    <div className={`${primaryClsName}-body-desc`}>
                        Номер телефона необходим при выводе средств из Личного кабинета
                    </div>
                </div>
                <div className={`${primaryClsName}-footer`}>
                    <div className={`${constants.projectName}-button-standard-grey`} onClick={this.handleCloseModal}>
                        Отмена
                    </div>
                    <div className={`${constants.projectName}-button-standard-orange`} onClick={this.handleClickDone}>
                        Готово
                    </div>
                </div>
            </ReactModal>
        </div>;
    }
}