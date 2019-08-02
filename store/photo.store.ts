import { observable, action } from 'mobx';
import { getRandomNumber } from 'utils';

const TOTAL_COLUMNS = 5;
const TOTAL_PHOTOS_IN_COLUMN = 4;

const getRandomColumn = () => getRandomNumber(TOTAL_COLUMNS);
const getRandomIndex = () => getRandomNumber(TOTAL_PHOTOS_IN_COLUMN);

export class PhotoStore {
  constructor() {
    setInterval(() => {
      this.selectPhoto(getRandomColumn(), getRandomIndex());
      this.selectPhoto(getRandomColumn(), getRandomIndex());
    }, 2000);
  }

  @observable selectedPhotos = [
    getRandomIndex(),
    getRandomIndex(),
    getRandomIndex(),
    getRandomIndex(),
    getRandomIndex(),
  ];

  @action selectPhoto = (column: number, index: number) =>
    (this.selectedPhotos[column] = index);
}
