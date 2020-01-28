function showMessage() {
    console.log("Hello everybody");
}

showMessage();

function showMessageParam(from, text = "текст не добавлен") {
    console.log(from + " : "+text);
}

showMessageParam("danik","hi");

showMessageParam("Аня");

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log( result ); // 3