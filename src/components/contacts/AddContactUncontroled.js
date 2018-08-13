import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddContactUncontroled extends Component {
    static defaultProps = {
        name: 'Lukashov Semen',
        email: 'luk_sem@gmail.com',
        phone: '555-555-5555'
    };

    static propTypes = {};

    constructor(props){
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }
        console.log(contact)
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <header className="card-header">Add Contact</header>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <fieldset className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                ref={this.nameInput}
                                defaultValue={name}
                                name="name"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                            />
                        </fieldset>
                        <fieldset className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                ref={this.emailInput}
                                defaultValue={email}
                                name="email"
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter E-mail..."
                            />
                        </fieldset>
                        <fieldset className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                ref={this.phoneInput}
                                defaultValue={phone}
                                name="phone"
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone..."
                            />
                        </fieldset>
                        <input type="submit" value="Add Contact" className="btn btn-block btn-light"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContactUncontroled;
