import React from 'react';

import { Container, Label } from './styles';

export default function TabBarLabel({ focused, tintColor, children }) {
  return (
    <Container>
      <Label active={focused} color={tintColor}>
        {children}
      </Label>
    </Container>
  );
}
