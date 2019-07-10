import { Flex } from 'app/components/Flex';
import React from 'react';
import { useStyle } from 'styles';

export const Initials: React.FC = () => {
  const style = useStyle();

  return (
    <Flex
      basis={200}
      css={{
        backgroundColor: style.theme.header.background,
        borderWidth: 2,
        borderColor: style.theme.border.color,
        height: 80,
      }}>
      <Flex
        css={{
          borderWidth: 1,
          borderColor: style.theme.border.accent,
          fontFamily: style.constants.font.family.script,
          fontSize: 70,
          height: 'calc(100% - 6px)',
          margin: 3,
          position: 'relative',
        }}>
        <Flex
          css={{
            color: style.theme.title.subtle,
            position: 'absolute',
            paddingLeft: 2,
            top: -15,
            left: '47%',
          }}>
          &
        </Flex>
        <Flex
          css={{
            color: style.theme.title.text,
            position: 'absolute',
            top: -12,
            left: 10,
          }}>
          M
        </Flex>
        <Flex
          css={{
            color: style.theme.title.text,
            position: 'absolute',
            top: -12,
            right: 10,
          }}>
          S
        </Flex>
      </Flex>
    </Flex>
  );
};
