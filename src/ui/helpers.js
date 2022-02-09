const getMatchMedia = () => window.matchMedia(`(min-width: 960px)`).matches;

const dispatchWebglEvent = type => {
  console.log('Event:', type);
  const event = new CustomEvent(`webgl:${type}`);
  window.dispatchEvent(event);
};

const getWebglScript = async () => {
  const events = await import('@runroom/purejs/lib/events');

  console.log('webgl: called');
  const windowSizeIsTrue = getMatchMedia('medium');
  const webglScriptExists = document.getElementById('webgl-script');

  if (windowSizeIsTrue) {
    console.log('webgl: window is true');
    if (!webglScriptExists) {
      console.log("webgl: script doesn't exists");
      const script = document.createElement('script');
      script.id = 'webgl-script';
      script.src = '/app.js';
      script.type = 'module';
      document.body.appendChild(script);
      console.log('webgl: script created');
    }

    dispatchWebglEvent('build');
  } else if (webglScriptExists) {
    console.log('webgl: window is false');
    dispatchWebglEvent('destroy');
  }

  events.default.onResizeWidth(getWebglScript);

  return () => {
    console.log('webgl: unmounting');
    dispatchWebglEvent('destroy');
  };
};

export { getWebglScript };
