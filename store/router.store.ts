import { createBrowserHistory, History } from 'history';
import { observable, action, computed } from 'mobx';
import qs from 'query-string';

export class RouterStore {
  constructor() {
    this.history = createBrowserHistory();
  }

  @observable history: History;

  @computed get path() {
    return this.history.location.pathname;
  }

  @computed get query() {
    return qs.parse(this.history.location.search);
  }

  @computed get state() {
    return this.history.location.state;
  }

  @action goto = (path: string, state?: object) =>
    this.history.push(path, state);

  @action setQuery = (query: object, replace: boolean = false) => {
    const search = qs.stringify({
      ...(replace ? {} : this.query),
      ...query,
    });
    this.history.replace({ ...this.history.location, search });
  };
}
