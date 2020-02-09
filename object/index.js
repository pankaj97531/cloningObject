var obj1 = {
	a : 10,
	b:20
}

var obj2 = {
	b: 2,
	c: 4,
	d : 6
}

var obj3 = {
	a : 1,
	b : 2,
	c : {
		d : 3,
		e : 4,
		f : {
			g : 5,
			h : 6
		}	
	}
}

var copyObj1 = Object.create(obj2,{});
var copyObj2 = Object.assign(obj1,obj2);
var copyObj3 = JSON.parse(JSON.stringify(obj3));
var copyObj4 = {...obj1,...obj2};
var copyObj5 = {...obj2};

console.log("1 : -" ,copyObj1);
console.log("2 : -" ,copyObj2);
console.log("3 : -" ,copyObj3);
console.log("4 : -" ,copyObj4);
console.log("5 : -" ,copyObj5);

const deepCopyFunction = inObject => {
  let outObject, value, key

  if(typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = (typeof value === "object" && value !== null) ? deepCopyFunction(value) : value
  }
  
  return outObject
}
var copyObj6 = deepCopyFunction(obj3);
copyObj6.c.d =30;
console.log("Main : -" ,obj3);
console.log("6 : -" ,copyObj6);