import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { register } from '../../store/ducks/auth';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Logo from '../../components/Logo';
import ScrollContainer from '../../components/ScrollContainer';

import { Container, FormContainer, BackButton } from './styles';

class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    cpf: '',
  };

  registerInputProps = {
    onSubmitEditing: this.handleRegister,
    returnKeyType: 'send',
  };

  navigateToBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleRegister = () => {
    const { name, cpf, email, password } = this.state;
    const { register } = this.props;

    if (name && cpf.length === 11 && email && password) {
      Keyboard.dismiss();
      register(name, cpf, email, password);
    }
  };

  render() {
    const { isRegistering } = this.props;
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
              {...this.registerInputProps}
            />

            <Input
              placeholder="CPF"
              mask="[999].[999].[999]-[99]"
              onChangeText={(_, textWithoutMask) =>
                this.setState({ cpf: textWithoutMask })
              }
              value={cpf}
              keyboardType="numeric"
              {...this.registerInputProps}
            />

            <Input
              placeholder="E-mail"
              onChangeText={text => this.setState({ email: text })}
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              autoCompleteType="email"
              {...this.registerInputProps}
            />
            <Input
              placeholder="Senha"
              onChangeText={text => this.setState({ password: text })}
              value={password}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="password"
              {...this.registerInputProps}
            />

            <SubmitButton
              text="Cadastrar"
              onPress={this.handleRegister}
              loading={isRegistering}
            />
          </FormContainer>
        </Container>
      </ScrollContainer>
    );
  }
}

const mapStateToProps = state => ({
  isRegistering: state.auth.isRegistering,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ register }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
