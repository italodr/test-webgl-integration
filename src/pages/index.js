import * as React from 'react';
import { useEffect } from 'react';
import { Link, navigate } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
};

const section = {
  height: '100vh',
  position: 'relative'
};

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
      <section>
        <Link to={'/sample'}>Link to page using Gatsby Link component</Link>
        <br />
        <div onClick={() => navigate('/sample')}>Link to page using Gatsby navigate method</div>
        <br />
        <a href={'/sample'}>Link to page using HTML a tag</a>
        <br />
        <br />
      </section>
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
        style={section}></section>
      {/* <section
        data-webgl-dev='false'
        data-webgl='true'
        data-webgl-particles='true'
        data-webgl-nurbs-mirror='true'
        data-webgl-color-1='#e2647d'
        data-webgl-color-2='#f9ad65'
        data-webgl-color-3='#74e1ac'
        data-webgl-position='left'
        data-webgl-image='https://www-backend-pre.kidsandus.com/sites/default/files/styles/original/public/2021-06/5-banner_1.png?itok=4NMZBYeQ'
        style={section}></section> */}
      <section style={section}></section>
      {/* <section
        data-webgl-dev='false'
        data-webgl='true'
        data-webgl-particles='false'
        data-webgl-color-1='#5923d9'
        data-webgl-color-2='#b223d9'
        data-webgl-color-3='#d92366'
        style={section}></section> */}
    </main>
  );
};

export default IndexPage;
