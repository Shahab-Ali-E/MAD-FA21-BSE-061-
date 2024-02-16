// //Activity:1
let bio = {
    name:"Shahab",
    regNo:"Fa21-bse-061",
    degreeProgram:{
        program:"BSSE",
        duration:"4 years"
    },
    age:21,
    address:{
        houseNo:"D/189",
        country:"Pakistan"
    }
}
console.log(bio);

// //Activity 2:
let multiSum = (z,x,y)=>{
    let sum = 0;
    for (let index = 2; index < z; index++) {
        if(x%index == 0 && y%index==0){
            sum = x+y;
        }
    }
    return sum;
}

console.log(multiSum(10,3,5));

// //Activity 3:
let max = ((...params)=> Math.max(...params));
let min = ((...params) =>Math.min(...params));

console.log(max(4,3,2,10,11));
console.log(min(1,2,33,0));

//lab task 2
//Activity 2:
function solveThis(key) {
  let result = {};
  if (key.sum) {
    let sum = 0;
    key.sum.forEach((ele) => {
      sum += ele;
    });
    result.sum = sum;
  }
  if (key.max) {
    result.max = Math.max(...key.max);
  }
  if (key.min) {
    result.min = Math.min(...key.min);
  }
  if(key.abs){
    result.abs = Math.abs(key.abs);
  }
  if(key.ceil){
    result.ceil = Math.ceil(key.ceil);
  }
  if(key.floor){
    result.floor = Math.floor(key.floor);
  }
  return result;
}

console.log(
  solveThis({ max: [3, 2, 4], sum: [2, 4, 3, 5], min: [5, 3, 4, 3], abs:-22 , ceil:22.3 , floor: 22.5})
);
