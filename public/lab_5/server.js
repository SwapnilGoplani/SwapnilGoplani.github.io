const buttons = document.querySelectorAll('button');

// eslint-disable-next-line no-plusplus
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}