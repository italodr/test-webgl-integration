import * as React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
};

const section = {
  height: '100vh',
  position: 'relative'
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <section style={section}></section>
      <section webgl='true' webgl-color-1='#ff4563' style={section}></section>
      <section style={section}></section>
      <section
        webgl='true'
        webgl-color-1='#92fe8d'
        webgl-color-2='#38cca3'
        webgl-color-3='#87ff80'
        style={section}></section>
    </main>
  );
};

export default IndexPage;
