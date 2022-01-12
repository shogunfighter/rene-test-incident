import React from 'react';
import PropTypes from 'prop-types';
import styles from './Incident.module.scss';

import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

const Incident = () => (
    <div className={styles.Incident} data-testid="Incident">
        <p>Incident Component</p>
        <br/>
        <Button variant="primary">Add Incident</Button>{' '}
        <br/>


        <Pagination>
            <Pagination.First/>
            <Pagination.Prev/>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis/>

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis/>
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next/>
            <Pagination.Last/>
        </Pagination>
    </div>
);

Incident.propTypes = {};

Incident.defaultProps = {};

export default Incident;
