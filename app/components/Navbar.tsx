import { Flex } from 'app/components/Flex';
import React from 'react';
import { useStyle } from 'styles';

export const LeftNavbar: React.FC = () => (
  <NavbarBase>
    <Tab text="Our Story" />
    <Tab text="Wedding Party" />
    <Tab text="Itinerary" />
  </NavbarBase>
);

export const RightNavbar: React.FC = () => (
  <NavbarBase>
    <Tab text="Calendar" />
    <Tab text="Registry" />
    <Tab text="R.S.V.P." />
  </NavbarBase>
);

const NavbarBase: React.FC = ({ children }) => {
  const style = useStyle();

  return (
    <Flex
      grow
      shrink
      css={{
        borderLeft: 'none',
        borderRight: 'none',
        borderColor: style.theme.border.color,
        borderWidth: 2,
      }}>
      <Flex
        row
        grow
        shrink
        align="center"
        justify="center"
        css={{
          backgroundColor: style.theme.page.background,
          margin: 3,
        }}>
        {children}
      </Flex>
    </Flex>
  );
};

const Tab: React.FC<{ text: string }> = ({ text }) => {
  const style = useStyle();

  return (
    <Flex
      justify="center"
      css={{
        'cursor': 'pointer',
        'height': '1.7em',
        'fontWeight': style.constants.font.weight.medium,
        'padding': '0 1.5em',
        'textTransform': 'uppercase',
        ':hover': {
          color: style.theme.link.text,
        },
      }}>
      {text}
    </Flex>
  );
};
