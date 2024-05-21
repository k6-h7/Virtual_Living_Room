const buttons = document.querySelectorAll('.button');
const mainvisual = document.querySelector('.mainvisual');
let intervalId; // 追加：setIntervalのIDを格納する変数

// サムネイル画像と同じ画像をメインビジュアルに表示する
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const src = button.getAttribute('src');
    mainvisual.style.backgroundImage = 'url(' + src + ')';

    // 追加：ランダム切り替えを停止する
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
});

// ランダム部分
var images = [ 'url(img/living.jpg)', 'url(img/sea.jpg)', 'url(img/forest.jpg)', 'url(img/green.jpg)', 'url(img/flower1.jpg)', 'url(img/flower2.jpg)', 'url(img/waterdrop.jpg)' ];  // ランダム表示させたい画像のパス

document.addEventListener("DOMContentLoaded", function() {
    var backgroundRandom = function() {
        var number = Math.floor(Math.random() * images.length); // 画像分の数値を算出 
        var selectedImg = images[number]; // 算出された数値を元に、1行目の配列から取り出す
        document.querySelector('.mainvisual').style.backgroundImage = selectedImg; // cssにランダムに選ばれた画像を背景設定する
    };

    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function() {
        // 追加：ランダム切り替えが既に動作している場合、まず停止する
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(backgroundRandom, 20000);  // 20000ms（20秒）ごとにランダム切り替えを繰り返す
    });
});

