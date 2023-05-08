let x = 1234;

res = sumDigits(1234);
console.log(`res = ${res}`); // res = 10

res = luckyNumber(1235123); 
console.log(res ? 'Lucky' : 'Unlucky')

res = luckyNumber(123123); 
console.log(res ? 'Lucky' : 'Unlucky')

res = luckyNumber(x); 
console.log(res ? 'Lucky' : 'Unlucky')


function sumDigits(x){
    let string = x + '';
    let res = 0;
    let number;
    for(let i = 0; i < string.length; ++i){
        number = +(string.charAt(i));
        res = res + number;
    }
    return res;
}

function luckyNumber(x){
    // TODO
    // если нечётное, то середину делим добавляем в обе половины
    let string = x + '';
    let mid = Math.round(string.length / 2);
    let isEven = string.length % 2 == 0 ? true : false;
    let left = isEven ? string.substring(0, mid) : string.substring(0, mid); 
    let right = isEven ? string.substring(mid) : string.substring(mid-1);
    let leftSum = sumDigits(left);
    let rightSum = sumDigits(right);
    return leftSum == rightSum;
}

// TODO HW**
function banana(){
    let a = 'a';
    let b = 'b';
    let nan = +a;
    let string = 'b' + 'a' + nan + 'a';
    return string.toLowerCase();
}
console.log(banana());

function no(){
    let o = 'o'
    let no = ('' + (+o)).charAt(0) + o;
    return no;
}

console.log(no());