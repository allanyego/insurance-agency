import React from 'react';

import PageTitle from './PageTitle';

import './Page.css';

export default function Page({ pageTitle, children }) {
  return (
    <section className="Page">
      {pageTitle &&
        <PageTitle pageTitle={pageTitle} />
      }
      {children}
    </section>
  );
}