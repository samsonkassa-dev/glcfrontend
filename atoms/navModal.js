import { atom } from 'recoil';

export const navModalState = atom({
  key: 'navModalState',
  default: false,
});

export const dataState = atom({
  key: 'dataState',
  default: {},
});
