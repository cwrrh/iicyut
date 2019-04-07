
// 增加区间随机
Math.randomRange = function (...arg) {
  return Math.floor(Math.random() * (arg[1] - arg[0] + 1) + arg[0]);
}

function randomDate() {
  // api限制 2012 - now(2019)
  let nowYear = moment().year();
  let maxMonth = 12;
  let year = Math.randomRange(2012, nowYear);
  if (year === nowYear) {
    maxMonth = moment().month() - 1;
  }
  let month = Math.randomRange(1, maxMonth);
  let maxDays = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
  let day = Math.randomRange(1, maxDays);
  return `${year}-${month}-${day}`;
}

$.ajax({
  type: "get",
  url: "https://open.iciba.com/dsapi",
  data: {
    date: randomDate()
  },
  dataType: "jsonp",
  success: function (res) {
    let { content, note } = res;
    $('#word').html(content).attr('title', note);
  }
});