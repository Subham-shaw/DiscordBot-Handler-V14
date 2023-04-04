module.exports = {
  nFormatter, format
}

function nFormatter(num, digits = 2) {
  const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
      return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

function format(millis) {
  try {
    var s = Math.floor((millis / 1000) % 60);
    var m = Math.floor((millis / (1000 * 60)) % 60);
    var h = Math.floor((millis / (1000 * 60 * 60)) % 24);
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return h + ":" + m + ":" + s + " | " + Math.floor((millis / 1000)) + " Seconds"
  } catch (e) {
    console.log(e)
  }
}




