import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Button, ButtonText } from './styles';

export default function SubmitButton({ loading, text, ...props }) {
  return (
    <Button {...props}>
      {loading ? (
        <ActivityIndicator color="#fff" size={26} />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
}
