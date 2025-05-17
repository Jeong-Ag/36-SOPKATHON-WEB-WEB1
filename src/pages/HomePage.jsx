import React from 'react';
import styled from '@emotion/styled';

const HomePage = () => {
  return <Wrapper>home</Wrapper>;
};

export default HomePage;

const Wrapper = styled.div`
  ${({ theme }) => theme.typography.textStyles.h4_sb_17}
  background-color: ${({ theme }) => theme.colors.gray1};
`;
