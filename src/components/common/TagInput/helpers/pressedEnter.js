const pressedEnter = (fn) => (e) => {
  if (e.key === 'Enter') {
    fn();
  }
  return null;
};

export default pressedEnter;
