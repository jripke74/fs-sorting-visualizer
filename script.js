function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  const elementArray = [];
  for (let i = 0; i > 4; i++) {
    elementArray.push(generateElement());
  }
  return elementArray;
}
