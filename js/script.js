function traffic() {
  const red = document.querySelector("#red");
  const redText = document.querySelector("#red h1");

  const yellow = document.querySelector("#yellow");
  const green = document.querySelector("#green");

  let count = 5;
  function Red() {
    red.style.background = "red";
    setInterval(() => {
        count > 0 ? count-- : Yellow()
        count === 0 ? redText.style.display = 'none' : count
        redText.innerText = count;
    },1000)
  }

  function Yellow() {
    yellow.style.background = "yellow";
    red.style.background = "rgb(170, 103, 103)";
    green.style.background = "rgb(96, 156, 96)";
    setInterval(Green, 3000);
  }

  function Green() {
    green.style.background = "green";
    red.style.background = "rgb(170, 103, 103)";
    yellow.style.background = "rgb(152, 152, 95)";
    setInterval(Red, 3000);
  }
  Red();
}
traffic();
