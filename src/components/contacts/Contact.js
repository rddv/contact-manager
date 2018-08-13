import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../../context'

import './Contact.css';

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

    onDeleteContact = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
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
                                <h4>{name}
                                    <i
                                        className="fas fa-sort-down"
                                        onClick={this.onShowContact}
                                        style={{cursor: 'pointer', paddingLeft: '10px'}}
                                    />
                                    <i
                                        className="fas fa-times"
                                        onClick={this.onDeleteContact.bind(this, id, dispatch)}
                                        style={{cursor: 'pointer', float: 'right', color: 'red'}}
                                    />
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
