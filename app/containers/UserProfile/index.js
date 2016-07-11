/*
 *
 * UserProfile
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import QsList from 'components/QsSelect';
import selectUserProfile from './selectors';
import styles from './styles.css';
import {Grid, Row, Col} from 'react-bootstrap';

require("bootstrap-loader");

export class UserProfile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Row>
          <Col md={6}>
            <h1>This is a new time </h1>
          </Col>
          <Col md={6}>
            <h2>This ia a second line</h2>
          </Col>
        </Row>
      <Row>
        <Col md={12}>
          <QsList />
        </Col>
      </Row>
        </div>
    );
  }
}

const mapStateToProps = selectUserProfile();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
