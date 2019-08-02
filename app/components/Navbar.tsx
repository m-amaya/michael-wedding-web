import { Flex } from 'app/components/Flex';
import { observer } from 'mobx-react-lite';
import { isNil } from 'ramda';
import React from 'react';
import { StoreContext } from 'store';
import { useStyle } from 'styles';

export const LeftNavbar: React.FC = observer(() => {
  const {
    view: { current, showOurStoryView, showItineraryView },
  } = React.useContext(StoreContext);

  const viewExists = !isNil(current);

  return (
    <NavbarBase>
      <Tab
        text="Our Story"
        isSelected={viewExists && current === 'our-story'}
        onClick={showOurStoryView}
      />
      <Tab
        text="Itinerary"
        isSelected={viewExists && current == 'itinerary'}
        onClick={showItineraryView}
      />
    </NavbarBase>
  );
});

export const RightNavbar: React.FC = observer(() => {
  const {
    view: { current, showRegistryView, showRsvpView },
  } = React.useContext(StoreContext);

  const viewExists = !isNil(current);

  return (
    <NavbarBase>
      <Tab
        text="Registry"
        isSelected={viewExists && current === 'registry'}
        onClick={showRegistryView}
      />
      <Tab
        text="R.S.V.P."
        isSelected={viewExists && current === 'rsvp'}
        onClick={showRsvpView}
      />
    </NavbarBase>
  );
});

const NavbarBase: React.FC = ({ children }) => {
  const style = useStyle();

  return (
    <Flex
      grow
      shrink
      css={{
        backgroundColor: style.theme.header.background,
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

const Tab: React.FC<{
  text: string;
  isSelected: boolean;
  onClick: ClickHandler;
}> = ({ text, isSelected, onClick }) => {
  const style = useStyle();

  return (
    <Flex
      justify="center"
      css={{
        'backgroundColor': isSelected
          ? style.theme.link.background
          : 'transparent',
        'borderRadius': 2,
        'color': isSelected ? style.theme.link.text : 'inherit',
        'cursor': 'pointer',
        'height': '1.7em',
        'fontWeight': style.constants.font.weight.medium,
        'margin': '0 2px',
        'padding': '0 2em',
        'textTransform': 'uppercase',
        'transition': 'all 200ms',
        ':hover': {
          backgroundColor: style.theme.link.background,
          color: style.theme.link.text,
        },
      }}
      onClick={onClick}>
      {text}
    </Flex>
  );
};
