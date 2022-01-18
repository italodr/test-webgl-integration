const React = require('react');

exports.onRenderBody = ({ pathname, setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([<script key='app.webgl' type='module' src='/app.js' defer></script>]);
};
