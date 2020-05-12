import React from 'react';

import PageTitle from './PageTitle';

export default function Page({ pageTitle, children }) {
  return (
    <section style={{
      padding: '2.5em 0 1.5em'
    }}>
      {pageTitle &&
        <PageTitle pageTitle={pageTitle} />
      }
      {children}
    </section>
  );
}