import { observable, computed, action } from 'mobx';
import { RouterStore } from './router.store';

export class ViewStore {
  constructor(private router: RouterStore) {
    const initialPath = router.path;

    switch (initialPath) {
      case '/our-story':
        this.showOurStoryView();
        break;
      case '/wedding-party':
        this.showWeddingPartyView();
        break;
      case '/itinerary':
        this.showItineraryView();
        break;
      case '/calendar':
        this.showCalendarView();
        break;
      case '/registry':
        this.showRegistryView();
        break;
      case '/rsvp':
        this.showRsvpView();
        break;
      default:
        this.showRsvpView();
        break;
    }

    router.history.listen((location) => {
      const fromPath = this.currentPath;
      const toPath = location.pathname;

      if (fromPath !== toPath) {
        switch (toPath) {
          case '/our-story':
            this.showOurStoryView();
            break;
          case '/wedding-party':
            this.showWeddingPartyView();
            break;
          case '/itinerary':
            this.showItineraryView();
            break;
          case '/calendar':
            this.showCalendarView();
            break;
          case '/registry':
            this.showRegistryView();
            break;
          case '/rsvp':
            this.showRsvpView();
            break;
          default:
            this.showRsvpView();
            break;
        }
      }
    });
  }

  @observable current: Maybe<View>;

  @computed get currentPath() {
    return `/${this.current}`;
  }

  @action setView = (view: View) => {
    this.current = view;
    this.router.goto(this.currentPath);
  };

  @action showOurStoryView = () => {
    this.setView('our-story');
  };

  @action showWeddingPartyView = () => {
    this.setView('wedding-party');
  };

  @action showItineraryView = () => {
    this.setView('itinerary');
  };

  @action showCalendarView = () => {
    this.setView('calendar');
  };

  @action showRegistryView = () => {
    this.setView('registry');
  };

  @action showRsvpView = () => {
    this.setView('rsvp');
  };
}
