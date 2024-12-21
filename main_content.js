const clock = () => {
  // 結果配列初期化
  let dateTime = [];

  // 現在の日時・時刻の情報を取得
  const d = new Date();

  // 年を取得
  let year = d.getFullYear();
  // 月を取得
  let month = d.getMonth() + 1;
  // 日を取得
  let date = d.getDate();
  // 曜日を取得
  let dayNum = d.getDay();
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = weekday[dayNum];
  // 時を取得
  let hour = d.getHours();
  // 分を取得
  let min = d.getMinutes();
  // 秒を取得
  let sec = d.getSeconds();

  // 1桁の場合は0を足して2桁に
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // 日付・時刻の文字列を作成
  dateTime[0] = [`${year}.${month}.${date} ${day}`];
  dateTime[1] = [`${hour}:${min}:${sec}`];

  return dateTime;
};

const showTime = () => {
  setInterval(() => {
    veiwMsg = clock();
    //console.log(veiwMsg[0]);
    document.querySelector(".clock-date").innerText = veiwMsg[0];
    document.querySelector(".clock-time").innerText = veiwMsg[1];
  }, 1000);  
}

window.addEventListener('DOMContentLoaded', function(){

  // 1秒ごとに実行
  setTimeout(function () {
    showTime();
    // 実行タイミングをミリ秒単位で合わせる
  }, 1000 - new Date().getUTCMilliseconds() 
  );

});
