const cookies = document.cookie; // クッキーを全部取得
const cookiesArray = cookies.split('; '); // 'キー=値'の形で分割して配列に入れる
let messageElement = document.getElementById('counterMessage');

// 2038年1月1日に有効期限が切れるように設定
const expirationDate = new Date(2038, 0, 1).toUTCString();

for (const cookie of cookiesArray) {
    const cookieArray = cookie.split('='); // キーと値をさらに分割して配列に入れる

    // 初回アクセスなら（countというクッキーがないなら）
    if (cookieArray[0] !== 'count') {
        document.cookie = `count=1; path=/; expires=${expirationDate}`;
        messageElement.textContent = '1回目の訪問';
    }

    // 2回目以降のアクセスなら
    if (cookieArray[0] === 'count') {
        let accessCount = parseInt(cookieArray[1]); // countの値を整数値へ変換
        accessCount++;
        document.cookie = `count=${accessCount}; path=/; expires=${expirationDate}`;
        messageElement.textContent = `${accessCount}回目の訪問`;
    }
}

// クラスを追加する例
messageElement.classList.add('counter-message');