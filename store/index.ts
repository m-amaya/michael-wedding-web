import React from 'react';
import { PhotoStore } from './photo.store';
import { RouterStore } from './router.store';
import { ViewStore } from './view.store';

export class Store {
  constructor() {
    this.photo = new PhotoStore();
    this.view = new ViewStore(new RouterStore());
  }

  photo: PhotoStore;
  view: ViewStore;
}

export const StoreContext = React.createContext({} as Store);
