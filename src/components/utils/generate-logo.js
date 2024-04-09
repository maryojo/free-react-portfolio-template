
function extractLetters(fullName) {
  const letters = fullName.trim().toUpperCase().split('');
  if (letters.length >= 2) {
      console.log(letters);
      return [letters[0], letters[1]];
  } else if (letters.length === 1) {
      return [letters[0], letters[0]];
  } else {
      return ['A', 'B'];
  }
}


export function generateLogo(siteName){
  const [letter1, letter2] = extractLetters(siteName);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const fontSize = 35;
  
  
  ctx.font = `${fontSize}px DM Sans`;
  const width1 = ctx.measureText(letter1).width;
  const width2 = ctx.measureText(letter2).width;
  const maxWidth = width1 + width2 * 0.8; 
  canvas.width = maxWidth;
  canvas.height = fontSize + 5;
  
  ctx.font = `${fontSize}px DM Sans`;
  ctx.fillStyle = 'white';
  ctx.fillText(letter1, 0, fontSize);
  ctx.fillText(letter2, width1 * 0.8, fontSize); 
  
  return canvas.toDataURL();
}