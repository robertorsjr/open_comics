import styled from 'styled-components';

const Separator = styled.div`
  height: ${({ y }) => y || 10}px;
  width: ${({ x }) => x || 10}px;
`;

export default Separator;