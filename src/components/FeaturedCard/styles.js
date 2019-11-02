import styled from 'styled-components/native';

export const Container = styled.View`
  width: 210px;
  margin-right: 10px;
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 6,
  },
})`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
  border-radius: 6;
  padding: 10px;
`;

export const EventName = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-bottom: auto;
`;

export const EventDetails = styled.Text`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`;
