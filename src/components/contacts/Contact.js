import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Consumer } from '../../context'


class Contact extends Component {
    static defaultProps = {
        name: 'Name lost',
        email: 'Email not found',
        phone: 'Phone not found'
    };

    static propTypes = {
        contact: PropTypes.object.isRequired,
    };

    state = {
        showContactInfo: false,
    }

    onShowContact = () => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    }

    onDeleteContact = async (id, dispatch) => {
        try {
            await axios
                .delete(`https://jsonplaceholder.typicode.com/users/${id}`)

            dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            })
        } catch(e) {
            dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            })
        }

    }

    render() {
        const { showContactInfo } = this.state;
        const { id, name, email, phone } = this.props.contact;
        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mb-3">
                            <h4 style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <span style={{
                                    display: 'flex'
                                }}>
                                    <span>{name}</span>
                                    <i
                                        className="fas fa-sort-down"
                                        onClick={this.onShowContact}
                                        style={{cursor: 'pointer', paddingLeft: '10px'}}
                                    />
                                </span>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Link to={`/contact/edit/${id}`} >
                                        <i
                                            className="fas fa-pencil-alt"
                                            style={{
                                                cursor: 'pointer',
                                                float: 'right',
                                                paddingRight: '10px',
                                                color: 'black',
                                                fontSize: '18px'
                                            }}
                                        />
                                    </Link>
                                    <i
                                        className="fas fa-times"
                                        onClick={this.onDeleteContact.bind(this, id, dispatch)}
                                        style={{cursor: 'pointer', float: 'right', color: 'red'}}
                                    />
                                </span>
                            </h4>
                            {showContactInfo &&
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Email: {email}
                                </li>
                                <li className="list-group-item">
                                    Phone: {phone}
                                </li>
                            </ul>}
                        </div>
                    )
                }}
            </Consumer>

            )
    }
}

export default Contact;
