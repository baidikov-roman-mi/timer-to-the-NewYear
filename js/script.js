let timeEnd = new Date("Sat Dec 31 2022 23:59:59 GMT+0200");

function counts() {
  let now = new Date();
  gap = timeEnd - now;
  let d = Math.floor(gap / 1000 / 60 / 60 / 24);
  let h = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minut = Math.floor(gap / 1000 / 60) % 60;
  let s = Math.floor(gap / 1000) % 60;

  document.querySelector("#days").innerHTML = d;
  document.querySelector("#hours").innerHTML = h;
  document.querySelector("#minutes").innerHTML = minut;
  document.querySelector("#seconds").innerHTML = s;
  if (gap < 0) {
    document.body.innerHTML = "а акция уже всё!";
  }
}
counts();
setInterval(counts, 1000);
