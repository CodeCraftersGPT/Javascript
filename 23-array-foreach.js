//array foreach method.

const numbers = [1, 2, 3, 4];

/// numbers => is an array.

// array has a method called forEach.

// forEach method takes a function as a parameter.

// i am overriding the foreach function that is defined in an array .


Array.prototype.forEach = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i],i,this);
    }
}

loopNumbers = function(number,index,array){
    console.log(number);
    console.log(index);
    console.log(array);
}



numbers.forEach(loopNumbers); // anonymous function.



