import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';

class Contacts extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        contacts: [
            {
                id: 1,
                name: 'John Razumniy',
                email: 'jrazumniy@gmail.com',
                phone: '+38-(093)-777-77-77'
            },
            {
                id: 2,
                name: 'Arina Razumniya',
                email: 'arazumniy@gmail.com',
                phone: '+38-(093)-555-55-55'
            },
            {
                id: 3,
                name: 'Henry Peteson',
                email: 'hen_pet@gmail.com',
                phone: '+38-(093)-444-45-55'
            }
        ]
    }

    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({contacts: newContacts});
    }

    renderContact = (contact) => {
        return(
            <Contact
                key={contact.id}
                contact={contact}
                handleDeleteContact={this.deleteContact.bind(this, contact.id)}
            />
        );
    }

    render() {
        const { contacts } = this.state;
        return (
            <Fragment>
                {contacts.map(this.renderContact)}
            </Fragment>
        );
    }
}

export default Contacts;
