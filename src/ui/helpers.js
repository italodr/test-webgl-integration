const dispatchWebglEvent = type => {
  console.log('Event:', type);
  const event = new CustomEvent(`webgl:${type}`);
  window.dispatchEvent(event);
};

const getWebglScript = () => {
  console.log('webgl: called');

  if (window.matchMedia(`(min-width: 960px)`).matches) {
    console.log('webgl: window size matches');
    dispatchWebglEvent('build');
  }

  window.onresize = getWebglScript;

  return () => {
    console.log('webgl: unmounting');
    dispatchWebglEvent('destroy');
  };
};

export { getWebglScript };
