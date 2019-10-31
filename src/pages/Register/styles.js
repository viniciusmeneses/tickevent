import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
})``;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #fbfbfb;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const FormContainer = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 15px;
`;
