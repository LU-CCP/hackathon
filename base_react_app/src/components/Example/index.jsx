import React from 'react';
import PropTypes from 'prop-types';

import { MESSAGES } from '../../config/messages';

import ids from './identifiers';
import styles from './styles';

const { FETCH_TEXT_MSG, FETCHING_MSG } = MESSAGES;

const Example = ({ text, fetching, onFetchText }) => (
  <div style={styles.container}>
    <button
      data-testid={ids.BUTTON_SET_TEXT}
      style={styles.button}
      type='button'
      onClick={onFetchText}
    >
      {FETCH_TEXT_MSG}
    </button>
    <p style={styles.text}> {fetching ? FETCHING_MSG : text}</p>
  </div>
);

Example.propTypes = {
  text: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  onFetchText: PropTypes.func.isRequired
};

export default Example;
