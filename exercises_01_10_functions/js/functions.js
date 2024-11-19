import { Calculator } from './class.js';

// create a new instance of the class Calculator
const calc = new Calculator();
calc.loadArrays();

// console.log the arrays
console.log(calc.checkMinArr);
console.log(calc.sortArr);

var submit_type = calc.queryString('submit');

// to be change
switch (submit_type) {
    case 'rect-area-calc':
        let area = calc.rectArea(calc.queryString('height'), calc.queryString('base'));
        let result_area = document.getElementById('rect-area-result');
        result_area.textContent = area;
        console.log('area calculated');
        break;
    case 'rect-per-calc':
        let perimeter = calc.rectPerimeter(calc.queryString('height'), calc.queryString('base'));
        let result_per = document.getElementById('rect-per-result');
        result_per.textContent = perimeter;
        console.log('perimeter calculated');
        break;
    case 'rect-cond-calc':
        let cond = calc.queryString('calc-type');
        let base = calc.queryString('base');
        let height = calc.queryString('height');
        let result_cond = document.getElementById('rect-cond-result');
        result_cond.textContent = calc.rectCond(cond, base, height);
        console.log('condition calculated');
        break;
    case 'odd-even-calc':
        let num = calc.queryString('number');
        let result_odd_even = document.getElementById('odd-even-result');
        result_odd_even.textContent = calc.oddEven(num);
        console.log('odd-even calculated');
        break;
    case 'sum-to-n-calc':
        let n = calc.queryString('number');
        let result_sum_to_n = document.getElementById('sum-to-n-result');
        result_sum_to_n.textContent = calc.sumToN(n);
        console.log('sum-to-n calculated');
        break;
    case 'sum-to-n-odd-calc':
        let n_odd = calc.queryString('number');
        let result_sum_to_n_odd = document.getElementById('sum-to-n-odd-result');
        result_sum_to_n_odd.textContent = calc.sumOddToN(n_odd);
        console.log('sum-to-n-odd calculated');
        break;
    case 'check-min-array-add':
        calc.checkMinArr.push(calc.queryString('number'));
        break;
    case 'check-min-array-reset':
        calc.minCheckResetArr();
        break;
    case 'check-min-array-calc':
        let result_check_min = document.getElementById('check-min-array-result');
        result_check_min.textContent = calc.minCheck();
        break;
    case 'array-sort-add':
        calc.sortArrayAddArr(calc.queryString('number'));
        break;
    case 'array-sort-reset':
        calc.sortArrayResetArr();
        break;
    case 'array-sort-calc':
        let result_sort = document.getElementById('array-sort-result');
        result_sort.textContent = calc.sortArray();
        break;
    default:
        console.log('Unknown submit type');
}