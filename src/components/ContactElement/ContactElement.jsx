import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactElement.module.css';

export const ContactElement = ({ name, number, onClick }) => {
    return (
        <li className={css.contactElement}>
            <p className={css.contactText}>
                {name}: {number}
            </p>
            <button className={css.button} type='button' onClick={onClick}>
                Delete
            </button>
        </li>
    );
};

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
