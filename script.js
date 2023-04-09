// 1
function reorderNums(arr, str) {
    let arrResultMin = [];
    let arrResultMax = [];
    if (str === 'asc') {
        for (i = 0; i < arr.length; i++) {
            arr[i] = String(arr[i]);
            arrResultMin.push(arr[i].split(''));
        }
        for (i = 0; i < arrResultMin.length; i++) {
            arrResultMin[i].sort();
        }
        return arrResultMin;
    } else {
        for (i = 0; i < arr.length; i++) {
            arr[i] = String(arr[i]);
            arrResultMax.push(arr[i].split(''));
        }
        for (i = 0; i < arrResultMax.length; i++) {
            arrResultMax[i].sort();
            arrResultMax[i].reverse();
        }
        return arrResultMax;
    }
}
console.log(reorderNums([515, 341, 98, 44, 211], "asc"));
console.log(reorderNums([515, 341, 98, 44, 211], "desc"));
console.log(reorderNums([63251, 78221], "asc"));
console.log(reorderNums([63251, 78221], "desc"));
console.log(reorderNums([1, 2, 3, 4], "asc"));
console.log(reorderNums([1, 2, 3, 4], "desc"));

// 2

function parseCode(str) {
    str = str.replace(/[0]/g, ' ');
    str = str.split(' ');
    for (i = 0; i < str.length; i++) {
        if (str[i] === '') {
            delete (str[i]);
        }
    }
    str = str.filter(Boolean);
    let obj = {
        firstName: str[0],
        lastName: str[1],
        id: str[2]
    }
    return obj;
}
console.log(parseCode("John000Doe000123"));
console.log(parseCode("michael0smith004331"));
console.log(parseCode("Thomas00LEE0000043"));

// 3 
function isAvgWhole(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum % arr.length == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));
console.log(isAvgWhole([1, 5, 6]));
console.log(isAvgWhole([1, 1, 1]));
console.log(isAvgWhole([9, 2, 2, 5]));

// 4 
function getOnlyEvens(arr) {
    let arrResult = [];
    for (i = 0; i < arr.length; i = i + 2) {
        if (arr[i] % 2 == 0) {
            arrResult.push(arr[i]);
        }
    }
    return arrResult;
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));

