declare module 'react-flatten-children';

type Maybe<T> = T | undefined;

type ClickHandler<T = Element, E = Event> = (
  e: React.SyntheticEvent<T, E>,
) => void;

type View =
  | 'our-story'
  | 'wedding-party'
  | 'itinerary'
  | 'calendar'
  | 'registry'
  | 'rsvp';
