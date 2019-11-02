import styled, { css } from 'styled-components/native';

const horizontalContainerStyle = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
  ${({ horizontal }) => horizontal && horizontalContainerStyle}
  align-items: center;
`;

const horizontalTitleStyle = css`
  margin-left: 8px;
`;

const verticalTitleStyle = css`
  margin-top: 5px;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 32px;
  color: ${({ color }) => color || '#333'};
  ${({ horizontal }) =>
    horizontal ? horizontalTitleStyle : verticalTitleStyle}
`;
