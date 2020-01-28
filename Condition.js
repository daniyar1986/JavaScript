'use strict';
let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');
if (year < 2015) {
    alert( 'Это слишком рано...' );
} else if (year > 2015) {
    alert( 'Это поздновато' );
} else {
    alert( 'Верно!' );
}

let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);