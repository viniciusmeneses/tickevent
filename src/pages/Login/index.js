import React, { Component } from 'react';

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

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  navigateToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    const { email, password } = this.state;

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
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              autoCompleteType="email"
            />
            <Input
              placeholder="Senha"
              onChangeText={text => this.setState({ password: text })}
              value={password}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="password"
            />

            <SubmitButton text="Acessar" />
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
