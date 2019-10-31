import React from 'react';
import { Button, ButtonText } from './styles';

export default function SubmitButton(props) {
  return (
    <Button {...props}>
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
}
