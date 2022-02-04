import * as React from 'react';
import { Link } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
};

const section = {
  width: '70ch'
};

const SamplePage = () => {
  return (
    <main style={pageStyles}>
      <title>Sample Page</title>
      <Link to={'/'}>Home page</Link>
      <section style={section}>
        <h1>Sample page</h1>
        <p>
          This page should not load WebGL components. Gatsby uses a Link component which renders
          without reloading the page
        </p>
        <p>If you refresh the page, WebGL will be deleted.</p>
      </section>
    </main>
  );
};

export default SamplePage;
