import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';

class AddContact extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone, } = this.state;

        if (this.checkForErrors('name', 'email')) {
            return;
        };
        const newContact = {
            name,
            email,
            phone,
        };
        const res = await axios
            .post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({
            type: 'ADD_CONTACT',
            payload: res.data
        });
        //clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        });
        this.props.history.push('/');
    };

    checkForErrors = (...fieldsForCheck) => {
        const errors = {};
        fieldsForCheck.forEach(field => {
            if (!this.state[field]) {
                errors[field] = `${field} is required`;
            }
        });
        if (Object.keys(errors).length) {
            this.setState({errors});
            return true;
        }
    };

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card mb-3">
                            <header className="card-header">Add Contact</header>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        name="name"
                                        label="Name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        name="email"
                                        label="Email"
                                        type="email"
                                        placeholder="Enter E-mail..."
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        name="phone"
                                        label="Phone"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input type="submit" value="Add Contact" className="btn btn-block btn-light"/>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>

        )
    }
}

export default AddContact;
