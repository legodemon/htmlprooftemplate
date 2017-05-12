import React from 'react';

export default class Input extends React.Component {

    state = {
        value: ''
    };

    handleInputChange = e => {
        const value = e.target.value;
        this.setState(state => ({value: value}));
    };

    getValue = () => this.state.value;

    render() {
        return <div className={this.props.className}>
            <label className={this.props.labelClassName}>{this.props.label}</label>
            <input
                className={this.props.inputClassName}
                disabled={this.props.disabled}
                onChange={this.handleInputChange}
                type={this.props.type}
                placeholder={this.props.placeholder}/>
        </div>
    }

}