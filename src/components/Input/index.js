import React from 'react';
import { TextInput, MaskedTextInput } from './styles';

export default function Input({ mask, ...props }) {
  return mask ? (
    <MaskedTextInput {...props} mask={mask} />
  ) : (
    <TextInput {...props} />
  );
}
