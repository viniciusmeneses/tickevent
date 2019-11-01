import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login } from '../../store/ducks/auth';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Logo from '../../components/Logo';
import ScrollContainer from '../../components/ScrollContainer';

import {
  Container,
  FormContainer,
  RegisterPageButton,
  RegisterPageButtonText,
  LogoContainer,
} from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  loginInputProps = {
    autoCapitalize: 'none',
    autoCorrect: false,
    returnKeyType: 'send',
    onSubmitEditing: this.handleLogin,
  };

  navigateToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const { login } = this.props;

    if (email && password) {
      login(email, password);
    }
  };

  render() {
    const { email, password } = this.state;
    const { isLogging } = this.props;

    return (
      <ScrollContainer>
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <FormContainer>
            <Input
              placeholder="E-mail"
              onChangeText={text => this.setState({ email: text })}
              value={email}
              keyboardType="email-address"
              autoCompleteType="email"
              {...this.loginInputProps}
            />
            <Input
              placeholder="Senha"
              onChangeText={text => this.setState({ password: text })}
              value={password}
              secureTextEntry
              autoCompleteType="password"
              {...this.loginInputProps}
            />

            <SubmitButton
              text="Acessar"
              onPress={this.handleLogin}
              loading={isLogging}
            />
          </FormContainer>

          <RegisterPageButton onPress={this.navigateToRegister}>
            <RegisterPageButtonText>
              Criar uma nova conta
            </RegisterPageButtonText>
          </RegisterPageButton>
        </Container>
      </ScrollContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLogging: state.auth.isLogging,
});

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
