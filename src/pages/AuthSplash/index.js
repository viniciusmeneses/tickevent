import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadUserData } from '../../store/ducks/auth';

import Logo from '../../components/Logo';
import { Container } from './styles';

class AuthSplash extends Component {
  componentDidMount() {
    const { userToken, loadUserData } = this.props;
    if (userToken) {
      loadUserData(userToken);
    }
  }

  render() {
    return (
      <Container>
        <Logo color="#fff" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  userToken: state.auth.token,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadUserData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthSplash);
