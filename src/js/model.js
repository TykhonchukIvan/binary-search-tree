export class Model {
    constructor() {

        this._counterBtn = document.getElementById('counterBtn');
        this._counterDisplay = document.getElementById('counterDisplay');

        this._factorialDis = document.getElementById('factorialDis');
        this._factorialBtn = document.getElementById('factorialBtn');
        this._factorialValue = document.getElementById('factorialValue');

        this._fibonacciDis = document.getElementById('fibonacciDis');
        this._fibonacciBtn = document.getElementById('fibonacciBtn');
        this._fibonacciValue = document.getElementById('fibonacciValue');

        this._array = [];
        this._binarySearchBtn = document.getElementById('binarySearchBtn');
        this._binarySearchDisplay = document.getElementById('binarySearchDisplay');
        this._binarySearchInputHow = document.getElementById('binarySearchInputHow');
        this._binarySearchInputWhich = document.getElementById('binarySearchInputWhich');

        this._binaryTreeBtn = document.getElementById('binaryTreeBtn');
        this._binaryTreeDisplay = document.getElementById('binaryTreeDisplay');
        this._binaryTreeInputPush = document.getElementById('binaryTreeInputPush');
        this._binaryTreeInputFind = document.getElementById('binaryTreeInputFind');

        this._linkedListBtn = document.getElementById('linkedListBtn');
        this._linkedListDisplay = document.getElementById('linkedListDisplay');
        this._linkedListInputPush = document.getElementById('linkedListInputPush');
        this._linkedListInputFind = document.getElementById('linkedListInputFind');

        this._binaryTreeCompareDisplay = document.getElementById('binaryTreeCompareDisplay');
        this._linkedListCompareDisplay = document.getElementById('linkedListCompareDisplay');

        this._resetBtn = document.getElementById('reset');
    }

    randomNums = (quantity) => {
        let n = [];
        for(let i =0; i< quantity; i++){
            n.push(Math.floor(Math.random()* 10000))
        }
        return n;
    }
}