import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  ${() => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: pink;
  `}
`;

export const Wrapper = styled.div`
  ${() => `
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    border-radius: 0.4rem;
    background: white;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;
