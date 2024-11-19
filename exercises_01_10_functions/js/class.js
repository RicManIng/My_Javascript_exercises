/**
 *  this class contains all functions and methods for exercises 1 - 10
 * @autor Riccardo Mancinelli
 * @copyright 2022
 * @license MIT 
 * @version 1.0.0
 */

export class Calculator {
    constructor() { 
        this.checkMinArr = [];
        this.sortArr = [];
    }

    /**
     * function to load arrays from a JSON file using fetch
     * @returns {Promise<void>}
     */
    async loadArrays(){
        try {
            const response = await fetch('./database/database.json');
            if (!response.ok) {
                throw new Error(`Error opening file: ${response.statusText}`);
            }
            const jsonData = await response.json();
            this.checkMinArr = jsonData["checkMin"];
            this.sortArr = jsonData["sort"];
            console.log('Arrays success loaded:', this.checkMinArr, this.sortArr);
        } catch (err) {
            console.error('Error opening file:', err);
        }
    }

    /**
     * function to save arrays to a JSON file using XMLHttpRequest -- not functioning need to install a server (actually waiting for other exercises)
     * @returns {Promise<void>}
     */
    async saveArrays(){
        let xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (xhr.status == 200) {
                const dataToSave = {
                    checkMin: this.checkMinArr,
                    sort: this.sortArr
                };
                console.log('Arrays success saved:', dataToSave);
                JSON.stringify(dataToSave);
            }
        }

        xhr.open('POST', './database/database.json', true);
        xhr.send(null);
    }

    /**
     * function to get data from querystring
     * @param {string} name - name of the parameter to get
     * @returns {string} - value of the parameter
    */
    queryString(name) {
        let value = null;

        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.has(prop) ? searchParams.get(prop) : null
        });
        value = params[name];
        console.log(`Value of ${name}: ${value}`);
        return value;
    }

    /**
     * function to calculate the area of a rectangle
     * @param {number} base - base of the rectangle
     * @param {number} height - height of the rectangle
     * @returns {number} - area of the rectangle
    */
    rectArea(base, height) {
        return base * height;
    }

    /**
     * function to calculate the perimeter of a rectangle
     * @param {number} base - base of the rectangle
     * @param {number} height - height of the rectangle
     * @returns {number} - perimeter of the rectangle 
    */
    rectPerimeter(base, height) {
        return 2 * (Number(base) + Number(height));
    }

    /**
     * function to calculate the area or perimeter of a rectangle
     * @param {string} cond - condition to check if area or perimeter
     * @param {number} base - base of the rectangle
     * @param {number} height - height of the rectangle
     * @returns {number} - area or perimeter of the rectangle
    */  
    rectCond(cond, base, height) {
        return cond === 'Area' ? this.rectArea(base, height) : this.rectPerimeter(base, height);
    }

    /**
     * function to check if a number is even or odd
     * @param {number} num - number to check
     * @returns {string} - 'Even' if the number is even, 'Odd' otherwise
    */
    oddEven(num) {
        return num % 2 === 0 ? 'Even' : 'Odd';
    }

    /**
     * function to calculate the sum of previous n numbers
     * @param {number} n - number to calculate the sum
     * @returns {number} - sum of the previous n numbers
    */
    sumToN(number){
        let i;
        let sum = 0;
        let n = Number(number);
        if(n>0){
            for(i = 0; i<n; i++){
                sum += i;
            }
        } else {
            sum = 0;
        }
        return sum;
    }

    /**
     * function to calculate the sum of previous n even numbers
     * @param {number} n - number to calculate the sum
     * @returns {number} - sum of the previous n even numbers
    */
    sumOddToN(number){
        let i;
        let sum = 0;
        let n = Number(number);
        if(n>0){
            for(i = 0; i<n; i++){
                if(i%2 !== 0){
                    sum += i;
                }
            }
        } else {
            sum = 0;
        }
        return sum;
    }

    /**
     * function to find the minimum value in an array
     * @param {Array} arr - array of numbers
     * @returns {number} - minimum value in the array
    */
    minCheck(){
        if(this.checkMinArr.length !== 0){
            return Math.min(...this.checkMinArr);
        } else {
            return 0;
        }
    }

    minCheckAddArr(value){
        this.checkMinArr.push(value);
        this.saveArrays();    
    }

    minCheckResetArr(){
        this.checkMinArr = [];
        this.saveArrays();        
    }

    /**
     * function to sort an array of numbers
     * @param {Array} arr - array of numbers
     * @returns {Array} - sorted array
    */
    sortArray(){
        return this.sortArr.sort((a, b) => a - b);
    }

    sortArrayAddArr(value){
        this.sortArr.push(value);
        this.saveArrays();        
    }

    sortArrayResetArr(){
        this.sortArr = [];
        this.saveArrays();        
    }
}