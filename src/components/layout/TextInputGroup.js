import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

function TextInputGroup(
    {
        label,
        name,
        value,
        placeholder,
        type,
        onChange,
        error
    }) {
    return (
        <fieldset className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                type={type}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
            />
            {
                error &&
                    <div className="invalid-feedback">{error}</div>
            }
        </fieldset>
    );
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};
TextInputGroup.defaultProps = {
    type: "text"
};

export default TextInputGroup;
