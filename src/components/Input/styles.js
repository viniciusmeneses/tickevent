import styled, { css } from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';

export const inputStyle = ({ fullWidth }) => css`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: #333;
  flex-direction: row;
  width: ${fullWidth ? '100%' : '250px'};
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 15px;
  font-family: 'Roboto';
`;

const inputAttrs = {
  placeholderTextColor: '#ccc',
};

export const TextInput = styled.TextInput.attrs(inputAttrs)`
  ${props => inputStyle(props)}
`;

export const MaskedTextInput = styled(TextInputMask).attrs(inputAttrs)`
  ${props => inputStyle(props)}
`;
