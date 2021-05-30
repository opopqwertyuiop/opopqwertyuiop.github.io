btn.addEventListener('click', () => {
  let text = textarea.value;
  text = text
    .replace(/I/g, 'i')
    .replace(/E/g, 'e')
    .replace(/\[Theta\]/g, 'theta')
    .replace(/\^\(/g, '^{');
  let f = false,
    count = 0;
  for (let i = 0; i < text.length - 1; i++) {
    if (text[i] === '^' && text[i + 1] === '{') {
      f = true;
      continue;
    }
    if (f) {
      if (text[i] === '(') count++;
      if (text[i] === ')' && count !== 0) {
        count--;
        continue;
      }
      if (text[i] === ')' && count === 0) {
        f = false;
        //   console.log(text.split('').splice(i, 1, '}'));
        text = text.split('');
        text.splice(i, 1, '}');
        text = text.join('');

        //   text[i] = '}';
      }
    }
  }

  //   log
  answer.textContent = text;
  answer1.textContent = text;
  console.log(text);
});

console.log('e');
