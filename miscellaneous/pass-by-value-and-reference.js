//pass by value

function change(num) {
    num.c = 2;
    console.log("changeInt", num);
}

function callChange() {
    let a = {c: 1};
    changeInt(a);
    console.log("callChangeInt", a);
}

callChange();

const a = [];
const b = [];