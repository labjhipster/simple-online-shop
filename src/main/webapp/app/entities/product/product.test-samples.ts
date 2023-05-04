import dayjs from 'dayjs/esm';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
  title: 'plataforma',
};

export const sampleWithPartialData: IProduct = {
  id: 88494,
  title: 'deposit',
  keywords: 'función Mesa',
  description: 'Rua',
  dateAdded: dayjs('2023-05-03'),
};

export const sampleWithFullData: IProduct = {
  id: 85387,
  title: 'bluetooth Regional driver',
  keywords: 'plataforma Rioja',
  description: 'mission-critical',
  rating: 32091,
  dateAdded: dayjs('2023-05-04'),
  dateModified: dayjs('2023-05-03'),
};

export const sampleWithNewData: NewProduct = {
  title: 'Verde synergistic Bricolaje',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
