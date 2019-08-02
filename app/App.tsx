import { Flex } from 'app/components/Flex';
import { Header } from 'app/components/Header';
import { Content } from 'app/components/Content';
import { Calendar } from 'app/pages/Calendar';
import { Itinerary } from 'app/pages/Itinerary';
import { OurStory } from 'app/pages/OurStory';
import { Registry } from 'app/pages/Registry';
import { RSVP } from 'app/pages/RSVP';
import { WeddingParty } from 'app/pages/WeddingParty';
import { observer } from 'mobx-react-lite';
import { isNil } from 'ramda';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { StoreContext } from 'store';

export const App: React.FC = hot(
  observer(() => {
    const {
      view: { current },
    } = React.useContext(StoreContext);

    const currentView = isNil(current) ? 'rsvp' : current;

    return (
      <Flex>
        <Header />
        <Content>{renderView(currentView)}</Content>
      </Flex>
    );
  }),
);

const renderView = (currentView: View) => {
  switch (currentView) {
    case 'calendar':
      return <Calendar />;
    case 'itinerary':
      return <Itinerary />;
    case 'our-story':
      return <OurStory />;
    case 'registry':
      return <Registry />;
    case 'rsvp':
      return <RSVP />;
    case 'wedding-party':
      return <WeddingParty />;
    default:
      throw new Error('Not a valid view');
  }
};
