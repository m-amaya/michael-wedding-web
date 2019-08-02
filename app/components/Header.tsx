import React from 'react';
import { Flex } from './Flex';
import { Initials } from './Initials';
import { LeftNavbar, RightNavbar } from './Navbar';
import { PhotoGrid } from './PhotoGrid';

export const Header: React.FC = () => (
  <Flex
    grow
    shrink
    justify="center"
    css={{ backgroundColor: 'transparent', height: '100vh' }}>
    <PhotoGrid />
    <Banner />
  </Flex>
);

const Banner: React.FC = () => (
  <Flex row align="center" justify="center">
    <LeftNavbar />
    <Initials />
    <RightNavbar />
  </Flex>
);
