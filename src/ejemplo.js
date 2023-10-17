function sumNumbers(...rest) {
  let sum;
  let way;

  for (let i = 0; i < rest.length; i++) {
    if(typeof(rest[i])==="number"){
        sum += rest[i];
    }
    
  }
  return sum
}

console.log(sumNumbers(`hola`, 2, 3, [10, 20, 30], {value:300}))