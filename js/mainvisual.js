const buttons = document.querySelectorAll('.button');
const mainvisual = document.querySelector('.mainvisual');

// サムネイル画像と同じ画像をメインビジュアルに表示する
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const src = button.getAttribute('src');
    mainvisual.style.backgroundImage = 'url(' + src + ')';
  });
});