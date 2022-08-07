'use strict'
const arr1 = [2, 5, 6, 0, 6, 3, 7];

// --------------------------indexOf-------------------------------
const indexOf = (arr = [], searchElement, fromIndex = 0) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement){
            return i;
        }
    } return -1;
}

// --------------------------lastIndexOf-------------------------------

const lastIndexOf = (arr = [], searchElement, fromIndex = arr.length - 1) => {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === searchElement){
            return i;
        }
    } return -1;
}

// --------------------------find-------------------------------

const find = (arr = [], searchElement) => {
    for (let i = 0; i < arr.length; i++) {
        if (searchElement(arr[i], i, arr)){
            return arr[i];
        }
    }
}
find(arr1, (item, index, arr) => {
    return item === 4;
})

//-----------------------------findIndex--------------------------
const findIndex = (arr, callback) =>{
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    } return -1;
}
findIndex(arr1, (item, index, arr) => {
    return item === 6;
});

// ------------------------------every-----------------------------
const every = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)){
            return false;
        }
    } return true;
}
every(arr1, (item, index, arr) => {
    return item === 6;
});

//-------------------------------includes----------------------------
const includes = (arr, searchElement, fromIndex = 0) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement){
            return true;
        }
    } return false;
}
includes(arr1, 4);

//--------------------------------some--------------------------------
const some = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)){
            return true;
        }
    } return false;
}
some(arr1, (item, index, arr) => {
    return item === 6;
});