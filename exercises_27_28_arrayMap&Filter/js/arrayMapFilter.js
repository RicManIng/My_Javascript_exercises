function expression(n){
    return n^3 +1;
}

function higherThan18(n){
    return n > 18;
}

const arr = [1, 2, 3, 4, 5, 34, 23, 81, 23 , 12];
const arrMap = arr.map(expression);
console.log(arrMap); // [2, 9, 28, 65, 1265, 1189, 1851, 5315, 1189, 218]

const arrFilter = arr.filter(higherThan18);
console.log(arrFilter); // [34, 23, 81, 23]