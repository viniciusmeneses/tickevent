import styled from 'styled-components/native';

export const Line = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
  margin: 15px ${({ marginRight }) => (marginRight ? '15px' : 0)} 15px
    ${({ marginLeft }) => (marginLeft ? '15px' : 0)};
`;
