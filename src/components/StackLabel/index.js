import React from 'react';

import { Container, Label } from './styles';

export default function StackLabel({ children }) {
  return (
    <Container>
      <Label>{children}</Label>
    </Container>
  );
}
