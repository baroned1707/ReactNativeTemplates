import {FunctionComponent} from 'react';
import ModalLogin from './containers/login';

export type NameType = 'MODALLOGIN' | null;

interface RouterType {
  name: NameType;
  Component: FunctionComponent;
}

export const router: RouterType[] = [
  {
    name: 'MODALLOGIN',
    Component: ModalLogin,
  },
];
