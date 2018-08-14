import React, {Component} from 'react';
import axios from 'axios';

import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';

class EditContact extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const { name, email, phone } = res.data;
        this.setState({name, email, phone});
    }

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
        const { id } = this.props.match.params;
        dispatch({
            type: 'SPINNER_ON'
        })
        const res = await axios
            .put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact)
        dispatch({
            type: 'UPDATE_CONTACT',
            payload: res.data
        });
        dispatch({
            type: 'SPINNER_OFF'
        })
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
                            <header className="card-header">Edit Contact</header>
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
                                    <input type="submit" value="Update Contact" className="btn btn-block btn-light"/>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditContact;
