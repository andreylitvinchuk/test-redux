import React, { Component, PropTypes } from 'react';
import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import * as FriendsActions from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

export default class FriendListApp extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}
