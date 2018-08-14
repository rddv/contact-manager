import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';

import { Consumer } from '../../context';

class Contacts extends Component {
    static defaultProps = {};

    static propTypes = {
        value: PropTypes.object.isRequired
    };

    renderContact = (contact) => {
        return(
            <Contact
                key={contact.id}
                contact={contact}
            />
        );
    }

    render() {
        return(
            <Consumer>
                {value => {
                    return(
                        <Fragment>
                            <h1 className="display-4 mb-4">
                                <span className="text-danger">Contact </span>List
                            </h1>
                            {value.contacts.map(this.renderContact)}
                        </Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;
