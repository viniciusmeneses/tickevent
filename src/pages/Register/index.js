import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Logo from '../../components/Logo';
import ScrollContainer from '../../components/ScrollContainer';

import { Container, FormContainer, BackButton } from './styles';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    cpf: '',
  };

  navigateToBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { email, password, name, cpf } = this.state;
    return (
      <ScrollContainer>
        <Container>
          <BackButton onPress={this.navigateToBack}>
            <Icon name="arrow-back" color="#ff5757" size={38} />
          </BackButton>

          <Logo />
          <FormContainer>
            <Input
              placeholder="Nome completo"
              onChangeText={text => this.setState({ name: text })}
              value={name}
            />

            <Input
              placeholder="CPF"
              mask="[999].[999].[999]-[99]"
              onChangeText={(_, textWithoutMask) =>
                this.setState({ cpf: textWithoutMask })
              }
              value={cpf}
              keyboardType="numeric"
            />

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

            <SubmitButton text="Cadastrar" />
          </FormContainer>
        </Container>
      </ScrollContainer>
    );
  }
}
