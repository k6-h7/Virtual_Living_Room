const buttons = document.querySelectorAll('.button');
const mainvisual = document.querySelector('.mainvisual');
let intervalId; // setIntervalのIDを格納する変数

// 時間帯に基づいて画像を変更する関数
const getImagesBasedOnTime = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 18 || currentHour < 6) {
    return [
      'url(img/living-1.jpg)',
      'url(img/sea-1.jpg)',
      'url(img/forest-1.jpg)',
      'url(img/green-1.jpg)',
      'url(img/flower1-1.jpg)',
      'url(img/flower2-1.jpg)',
      'url(img/waterdrop-1.jpg)'
    ];
  } else {
    return [
      'url(img/living.jpg)',
      'url(img/sea.jpg)',
      'url(img/forest.jpg)',
      'url(img/green.jpg)',
      'url(img/flower1.jpg)',
      'url(img/flower2.jpg)',
      'url(img/waterdrop.jpg)'
    ];
  }
};

// 初期画像リストを設定
let images = getImagesBasedOnTime();

// サムネイル画像と同じ画像をメインビジュアルに表示する
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const src = button.getAttribute('src');
    mainvisual.style.backgroundImage = 'url(' + src + ')';

    // ランダム切り替えを停止する
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const currentHour = new Date().getHours();
  if (currentHour >= 18 || currentHour < 6) {
    mainvisual.style.backgroundImage = 'url(img/living-1.jpg)';
  } else {
    mainvisual.style.backgroundImage = 'url(img/living.jpg)';
  }

  var backgroundRandom = function() {
    var number = Math.floor(Math.random() * images.length); // 画像分の数値を算出 
    var selectedImg = images[number]; // 算出された数値を元に、1行目の配列から取り出す
    document.querySelector('.mainvisual').style.backgroundImage = selectedImg; // cssにランダムに選ばれた画像を背景設定する
  };

  var startButton = document.getElementById("startButton");
  startButton.addEventListener("click", function() {
    // ランダム切り替えが既に動作している場合、まず停止する
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(backgroundRandom, 20000); // 20000ms（20秒）ごとにランダム切り替えを繰り返す
    // 初回のランダム表示
    backgroundRandom();
  });
});



