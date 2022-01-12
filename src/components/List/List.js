import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';

const List = () => (
  <div className={styles.List} data-testid="List">
      <button type="button" className="btn btn-primary">Add</button>


  </div>
);

List.propTypes = {};

List.defaultProps = {};

export default List;
