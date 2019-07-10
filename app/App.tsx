import { Flex } from 'app/components/Flex';
import { Header } from 'app/components/Header';
import { Content } from 'app/components/Content';
import { hot } from 'react-hot-loader/root';
import React from 'react';

export const App: React.FC = hot(() => (
  <Flex>
    <Header />
    <Content>content</Content>
  </Flex>
));
