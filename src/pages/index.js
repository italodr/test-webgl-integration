import * as React from 'react';
import { useEffect } from 'react';
import Helmet from 'react-helmet';

import { getWebglScript } from '../ui/helpers';

const Section = {
  height: '100vh',
  position: 'relative'
};

const Hero = {
  height: 'calc(100vh - 3rem)',
  position: 'relative'
};

const Neutral = {
  background: '#2b2b2b',
  color: '#fff',
  height: '80vh',
  position: 'relative',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '3rem',
  fontWeight: '700'
};

const Header = {
  background: '#f1f1f1',
  alignItems: 'center',
  display: 'flex',
  height: '3rem',
  gap: '1rem',
  padding: '0 1rem'
}

const IndexPage = () => {
  useEffect(() => {
    window.addEventListener('webgl:build', () =>
      console.log('Event: Listening to webgl:build Event')
    );
    window.addEventListener('webgl:destroy', () =>
      console.log('Event: Listening to webgl:destroy Event')
    );
  }, []);

  useEffect(() => {
    document.getElementById('webgl-script').addEventListener('load', () => {
      getWebglScript();
    });
  }, []);

  return (
    <main>
      <Helmet>
        <title>Home Page</title>
        <script src='/app.js' type='module' id='webgl-script'></script>
        <style>
          {`
          html, body {
            font-family: -apple-system, Roboto, sans-serif, serif;
            margin: 0;
          }
        `}
        </style>
      </Helmet>
      <header style={Header}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </header>
      <section
        data-webgl-particles='true'
        data-webgl-position='left'
        data-webgl-nurbs-mirror='true'
        data-webgl-dev='true'
        data-webgl='true'
        data-webgl-color-1='#e2647d'
        data-webgl-color-2='#f9ad65'
        data-webgl-color-3='#74e1ac'
        data-webgl-image='https://www-pre-drupal.kidsandus.com/sites/default/files/styles/original_webp/public/2022-01/Billboard.png.webp?itok=y3GxuAb2'
        style={Hero}></section>
      <section style={Neutral}>
        <span>Space section</span>
      </section>
      <section
        data-webgl-dev='false'
        data-webgl='true'
        data-webgl-particles='true'
        data-webgl-nurbs-mirror='true'
        data-webgl-color-1='#83ddcb'
        data-webgl-color-2='#f38181'
        data-webgl-color-3='#f8ae8e'
        data-webgl-position='right'
        data-webgl-image='https://www-backend-pre.kidsandus.com/sites/default/files/styles/original/public/2021-06/5-banner_1.png?itok=4NMZBYeQ'
        style={Section}></section>
      <section
        data-webgl-dev='false'
        data-webgl='true'
        data-webgl-particles='true'
        data-webgl-nurbs-mirror='true'
        data-webgl-color-1='#5923d9'
        data-webgl-color-2='#b223d9'
        data-webgl-color-3='#d92366'
        data-webgl-position='left'
        data-webgl-image='https://www-backend-pre.kidsandus.com/sites/default/files/styles/original/public/2021-06/5-banner_1.png?itok=4NMZBYeQ'
        style={Section}></section>
      <section style={Neutral}>
        <span>Space section</span>
      </section>
    </main>
  );
};

export default IndexPage;
