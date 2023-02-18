let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');
let container = document.getElementById('container');

const a = document.addEventListener(`keydown`,(e) => {
    
    display1.innerText = `You pressed = ` + e.key.toLocaleUpperCase();
    display2.innerText = `Loading...`;
    setTimeout(() => {
        display2.innerText = e.key.toLocaleUpperCase() + `'s Ascii Code is ` + e.keyCode;
    }, 750)
});

