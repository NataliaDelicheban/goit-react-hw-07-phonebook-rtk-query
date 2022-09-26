import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({onChange, value}) => {
    return (
        <label className={css.filterLable}>
            Find contacts by name
            <input
                className={css.filterInput}
                type="text"
                onChange={onChange}
                value={value}
            />
        </label>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};