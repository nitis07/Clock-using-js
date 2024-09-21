const time = document.querySelector(".time")
const date = document.querySelector(".Date")

setInterval((e) => {
    let clock = new Date();
    time.innerHTML = clock.toLocaleTimeString();
    date.innerHTML = clock.toLocaleDateString();

},1000);
