import { Colors, FilterValues } from '../types';

export const filterValues: FilterValues = {
  all: 'Бүгд',
  done: 'Хийсэн',
  undone: 'Хийгээгүй'
};

export const colors: Colors = {
  red: {
    dark: 'rgb(180,0,0)',
    light: 'rgb(110,0,0)'
  },
  green: {
    dark: 'rgb(0,180,0)', // rgb -> red, green, blue - 255
    light: 'rgb(0,110,0)'
  },
  blue: {
    dark: 'rgb(0,0,200)',
    light: 'rgb(0,0,120)'
  },
  yellow: {
    dark: 'rgb(220,220,0)',
    light: 'rgb(200, 180, 0)'
  }
};
