import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends Component {
    static defaultProps = {
        name: 'Name lost',
        email: 'Email not found',
        phone: 'Phone not found'
    };

    static propTypes = {
        contact: PropTypes.object.isRequired,
        handleDeleteContact: PropTypes.func.isRequired,
    };

    state = {
        showContactInfo: false,
    }

    onShowContact = () => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    }

    onDeleteContact = () => {
        this.props.handleDeleteContact();
    }

    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>{name}
                    <i
                        className="fas fa-sort-down"
                        onClick={this.onShowContact}
                        style={{cursor: 'pointer', paddingLeft: '10px'}}
                    />
                    <i
                        className="fas fa-times"
                        onClick={this.onDeleteContact}
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
        );
    }
}

export default Contact;
