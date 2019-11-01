import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LogoContainer, Title } from './styles';

export default function Logo({ color }) {
  return (
    <LogoContainer>
      <Icon name="ticket" color={color || '#ff5757'} size={90} />
      <Title color={color}>Tickevent</Title>
    </LogoContainer>
  );
}
