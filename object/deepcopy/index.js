var cloningFunc = function(obj){
	var cloneObj;
	if(obj===null || typeof obj !=='object'){
		return obj;
	}
	if(obj instanceof Array){
		for(var i=0;i<obj.length;i++){
			cloneObj[i] = cloningFunc(obj[i])
		}
		return cloneObj;
	}
	if(obj instanceof Date){
		cloneObj = new Date();
		cloneObj.setDate(obj.getDate());
		return cloneObj;
	}
	if(obj instanceof Object){
		cloneObj={};
		for(var attr in obj){
			if(obj.hasOwnProperty(attr)){
				cloneObj[attr] = cloningFunc(obj[attr])
			}
		}
		return cloneObj;
	}
	throw new Error("Object not found");
}

var obj = {
	a : 1,
	b :{
		c : 2,
		d : {
			e: 4,
			f : {
				g : 5,
				h : 6
			}
		}
	}
}

console.log(obj);
var copyObj = cloningFunc(obj);
copyObj.b.d.f.g = 50;
console.log(copyObj);