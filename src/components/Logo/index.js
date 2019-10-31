import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LogoContainer, Title } from './styles';

export default function Logo() {
  return (
    <LogoContainer>
      <Icon name="ticket" color="#ff5757" size={90} />
      <Title>Tickevent</Title>
    </LogoContainer>
  );
}
