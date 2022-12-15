import {FunctionComponent} from 'react';
import NotifiAlert from './containers/alert';

export type NameType = 'NOTIFIALERT' | null;

interface RouterType {
  name: NameType;
  Component: FunctionComponent;
}

export const router: RouterType[] = [
  {
    name: 'NOTIFIALERT',
    Component: NotifiAlert,
  },
];
