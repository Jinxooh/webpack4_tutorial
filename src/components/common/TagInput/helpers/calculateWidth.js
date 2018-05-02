const calculateWidth = (value) => {
  let width = 0;
  const array = value.split('');

  array.forEach((val) => {
    if (/[iIl.*!^{}()|[\]\\]/.test(val)) { // 얇은 글자 처리
      width += 4;
    } else if (/[a-hkm-z0-9_+$?]/.test(val)) { // 중간 길이 글자 처리
      width += 8;
    } else {
      width += 12;
    }
  });

  return width;
};

export default calculateWidth;
