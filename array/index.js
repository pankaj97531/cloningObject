var arr = [3,4,5,6,7,8];
var copyArr = arr.slice(0);
var copyArr2 = [].concat(arr);
var copyArr3 = [...arr];
var copyArr4 = Object.assign([],arr);
var copyArr5 = Object.create(arr);
var copyArr6 = Array.from(arr);

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

console.log("1 : -" ,copyArr);
console.log("2 : -" ,copyArr2);
console.log("3 : -" ,copyArr3);
console.log("4 : -" ,copyArr4);
console.log("5 : -" ,copyArr5[0]);
console.log("6 : -" ,copyArr6);

const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(set);
console.log(Array.from(set));

const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(map);
var mapArr = Array.from(map);
var mapFlatArr = mapArr.flat();
console.log(mapArr);
console.log(mapFlatArr);
