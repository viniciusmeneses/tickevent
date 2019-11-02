import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LogoContainer, Title } from './styles';

export default function Logo({ color, horizontal }) {
  return (
    <LogoContainer horizontal={horizontal}>
      <Icon
        name="ticket"
        color={color || '#ff5757'}
        size={horizontal ? 44 : 90}
      />
      <Title horizontal={horizontal} color={color}>
        Tickevent
      </Title>
    </LogoContainer>
  );
}
