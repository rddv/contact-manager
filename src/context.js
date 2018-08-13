import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts
                    .filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}

export class Provider extends Component {
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
};

export const { Consumer } = Context;