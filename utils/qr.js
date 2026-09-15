
// Deterministic mock QR matrix (21x21). Production: use a real QR component/canvas.
module.exports = function genQR(seed) {
  var n = 21, s = seed, m = [];
  function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
  for (var y = 0; y < n; y++) {
    var row = [];
    for (var x = 0; x < n; x++) {
      var finder = (x < 7 && y < 7) || (x > n - 8 && y < 7) || (x < 7 && y > n - 8);
      var on;
      if (finder) {
        var lx = x > n - 8 ? x - (n - 7) : x;
        var ly = y > n - 8 ? y - (n - 7) : y;
        on = (lx === 0 || lx === 6 || ly === 0 || ly === 6) ||
             (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4);
      } else {
        on = rnd() > 0.55;
      }
      row.push(on ? 1 : 0);
    }
    m.push(row);
  }
  return m;
};
