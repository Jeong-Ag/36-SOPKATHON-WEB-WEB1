import React from 'react';
import styled from '@emotion/styled';
import { getTextStyle } from '../../shared/styles/typography';

const home = () => {
  return <Wrapper>home</Wrapper>;
};

export default home;

const Wrapper = styled.div`
  ${({ theme }) => getTextStyle('h1_sb_24')({ theme })}
  background-color: ${({ theme }) => theme.colors.gray1};
`;
