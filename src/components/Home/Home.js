import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    Home Component
      <br />
      Hello some contents
      <br />
      Some more contents
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
