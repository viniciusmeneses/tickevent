import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 6px;
  height: 120px;
  margin: 0 15px 10px 15px;
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
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  border-radius: 6;
  padding: 10px;
`;

export const EventNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: auto;
`;

export const EventName = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  margin-left: 10px;
`;

export const EventDetails = styled.Text`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 13px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
