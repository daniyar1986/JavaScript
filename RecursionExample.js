function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result*=x;
    }

    return result;
}

console.log(pow(2,3));

function powRecursion(x,n) {
    return (x==1) ? x : (x*pow(x,n-1));
}

console.log(powRecursion(2,4));
