const buttons = document.querySelectorAll('.button');
const mainvisual = document.querySelector('.mainvisual');

// サムネイル画像と同じ画像をメインビジュアルに表示する
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const src = button.getAttribute('src');
    mainvisual.style.backgroundImage = 'url(' + src + ')';
  });
});

// ランダム部分
var images = [ 'url(img/living.jpg)', 'url(img/sea.jpg)', 'url(img/forest.jpg)', 'url(img/green.jpg)', 'url(img/flower1.jpg)', 'url(img/flower2.jpg)', 'url(img/waterdrop.jpg)' ];  // ランダム表示させたい画像のパス

$(function(){
  var backgroundRandom = function(){
    $('.right-navi li:last-child')
      var number = Math.floor(Math.random() * images.length); // 画像分の数値を算出 
      var selectedImg = images[number]; // 算出された数値を元に、1行目の配列から取り出す
      $('.mainvisual').css('background-image',selectedImg); // cssにランダムに選ばれた画像を背景設定する
  };
  setInterval(backgroundRandom, 1000);  // 1000msごとにランダム切り替えを繰り返す
});