import React from 'react';
import { useStyle } from 'styles';
import { Flex } from './Flex';
import { Initials } from './Initials';
import { LeftNavbar, RightNavbar } from './Navbar';

export const Header: React.FC = () => {
  const style = useStyle();

  return (
    <Flex
      grow
      shrink
      justify="center"
      css={{ backgroundColor: style.theme.header.background, height: '100vh' }}>
      <Banner />
    </Flex>
  );
};

const Banner: React.FC = () => (
  <Flex row align="center" justify="center">
    <LeftNavbar />
    <Initials />
    <RightNavbar />
  </Flex>
);
