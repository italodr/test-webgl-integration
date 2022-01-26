import * as React from 'react';
import { useEffect } from 'react';

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
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/app.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <section style={section}>
        <img
          src='https://www-backend-pre.kidsandus.com/sites/default/files/styles/original/public/2021-06/5-banner_1.png?itok=4NMZBYeQ'
          alt=''
          width='400'
        />
      </section>
      <section
        webgl-dev='false'
        webgl='true'
        webgl-particles='false'
        webgl-color-1='#5923d9'
        webgl-color-2='#b223d9'
        webgl-color-3='#d92366'
        style={section}></section>
      <section style={section}></section>
      <section
        webgl-dev='false'
        webgl='true'
        webgl-particles='true'
        webgl-color-1='#e2647d'
        webgl-color-2='#f9ad65'
        webgl-color-3='#74e1ac'
        webgl-position='left'
        webgl-image='https://www-backend-pre.kidsandus.com/sites/default/files/styles/original/public/2021-06/5-banner_1.png?itok=4NMZBYeQ'
        style={section}></section>
    </main>
  );
};

export default IndexPage;
