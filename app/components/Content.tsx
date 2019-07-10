import { Flex } from 'app/components/Flex';
import React from 'react';
import { useStyle } from 'styles';

export const Content: React.FC = ({ children }) => {
  const style = useStyle();

  return (
    <Flex
      row
      justify="center"
      css={{ marginTop: '-8em', marginBottom: '10em' }}>
      <Flex
        basis={650}
        shrink
        css={{
          backgroundColor: style.theme.content.background,
          borderColor: style.theme.border.color,
          borderWidth: 2,
        }}>
        <Flex
          css={{
            borderColor: style.theme.border.accent,
            borderWidth: 1,
            margin: 3,
            minHeight: 500,
          }}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
