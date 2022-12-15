import {FunctionComponent} from 'react';
import CircleLoading from './containers/circle';

export type NameType = 'CIRCLELOADING' | null;

interface RouterType {
  name: NameType;
  Component: FunctionComponent;
}

export const router: RouterType[] = [
  {
    name: 'CIRCLELOADING',
    Component: CircleLoading,
  },
];
