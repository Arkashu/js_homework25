'use strict'
const arr1 = [2, 5, 6, 0, 6, 3, 7];

const indexOf = (arr = [], searchElement, fromIndex = 0) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement){
            return i;
        }
    } return -1;
}

const lastIndexOf = (arr = [], searchElement, fromIndex = arr.length - 1) => {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === searchElement){
            return i;
        }
    } return -1;
}

const find = (arr = [], searchElement) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement){
            return arr[i];
        }
    } return undefined;
}

