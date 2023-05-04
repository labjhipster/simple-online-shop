import dayjs from 'dayjs/esm';

import { CategoryStatus } from 'app/entities/enumerations/category-status.model';

import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 2529,
  description: 'Namibia Salchichas',
};

export const sampleWithPartialData: ICategory = {
  id: 74096,
  description: 'Reducido Director',
  sortOrder: 35731,
  dateModified: dayjs('2023-05-03'),
  status: CategoryStatus['DISABLED'],
};

export const sampleWithFullData: ICategory = {
  id: 32594,
  description: 'Silla navigating Dominica',
  sortOrder: 87357,
  dateAdded: dayjs('2023-05-04'),
  dateModified: dayjs('2023-05-03'),
  status: CategoryStatus['DISABLED'],
};

export const sampleWithNewData: NewCategory = {
  description: 'Madera Acero transform',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
