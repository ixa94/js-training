//Practice 0: sayHello func.

function sayHello(name) {
    let love = 'Hi, ';
    let Hello = 'Hello, '
if (name === "Mark"){
    return love + name + "!";
}
else{
    return Hello + name + "!";
}
};


//Practice 1: min(a,b) func.

function min(a,b) {
if ( a > b){
    return a;
}
else if (a >=b){
    return a;
}
else {
    return b;
}
};


//Practice 2: pow(a,b) func.
function pow(x,n) {
let count = 1;
for (let i = 0;i < n;i++){
    count = count * x;
}
return count;
};


//Practice 3: isEven(a,b) func.
function isEven(n) {
if (n % 2 === 0){
    return true;
}
else {
    return false;
}
};

//Practice 4: deleteChars func.

function deleteChars(str) {

let res;
if (str.length >= 3){
    res  = str.slice(1,-1);
    return res;
}
else if (str.length >= 2){
    res  = str.slice(1,-1);
    return res;
}
else {
    res  = str.slice(1);
    return res;
}
};


//Practice 5: convertFloor(floor) func.
function convertFloor(floor) {
if (floor >=0 && floor <= 12){
    return floor+1;
}
else if (floor >= -12 && floor < 0){
    return floor;
}
return floor;
};



//Practice 6: convertType() func.


function covertType1(value, toType) {
switch (toType) {
    case 'boolean':
        return Boolean(value);
        break;
    case 'string':
        return String(value);
        break;
    case 'Number':
        return Number(value);
        break;
    default:
        break;
}
};

let covertType2 = function (value, toType) {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'Number':
            return Number(value);
            break;
        default:
            break;
    }
};


let covertType3 = (value, toType) => {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'Number':
            return Number(value);
            break;
        default:
            break;
    }
};


