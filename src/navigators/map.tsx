import * as React from 'react';
import Home from '@containers/Home';
import NoAuth from '@layouts/NoAuth';

export const HOME = 'HOME';

const CompileLayout = (Layout: any, Child: any) => (props: any) =>
  (
    <Layout>
      <Child {...props} />
    </Layout>
  );

export const router = [
  {
    name: HOME,
    title: HOME,
    CompileLayout: CompileLayout(NoAuth, Home),
  },
];
