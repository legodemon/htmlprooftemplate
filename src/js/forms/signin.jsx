import React from 'react';
import ReactModal from 'react-modal'

import * as constants from '../utils/constants.js';

export default class SignIn extends React.Component {

    state = {
        showModal: false
    };
    
    handleOpenModal = () => this.setState({showModal: true});

    handleCloseModal = () => this.setState({showModal: false});

    render() {
        const primaryClsName = `${constants.projectName}-modal-window`;
        
        return <div>
            <a onClick={this.handleOpenModal} className={`${constants.projectName}-button-standard-white`} href='#'>Войти</a>

            <ReactModal overlayClassName={`${constants.projectName}-modal-overlay`} isOpen={this.state.showModal}
                        className={`${primaryClsName}`}
                        contentLabel='sign in form'>
                <div className={`${primaryClsName}-header`}>
                    <div className={`${primaryClsName}-header-title`}>Регистрация</div>
                    <div className={`${primaryClsName}-header-close`} onClick={this.handleCloseModal}/>
                </div>
                <div className={`${primaryClsName}-body`}>
                    <div className={`${primaryClsName}-body-email`}>
                        <label className={`${primaryClsName}-body-email-label`}>Email</label>
                        <input className={`${primaryClsName}-body-email-input`}/>
                    </div>
                    <div className={`${primaryClsName}-body-phone`}>
                        <label className={`${primaryClsName}-body-phone-label`}>Телефон</label>
                        <input className={`${primaryClsName}-body-phone-input`}/>
                    </div>
                    <div className={`${primaryClsName}-body-desc`}>
                        Номер телефона необходим при выводе средств из Личного кабинета
                    </div>
                </div>
                <div className={`${primaryClsName}-footer`}>
                    <div className={`${constants.projectName}-button-standard-grey`} onClick={this.handleCloseModal}>Отмена</div>
                    <div className={`${constants.projectName}-button-standard-orange`}>Готово</div>
                </div>
            </ReactModal>
        </div>;
    }
}