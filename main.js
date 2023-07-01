var arr = [1,1,2,3,4,5,1,3,4,5,3,2,5,4];

var count = {};

for(var i=0; i<arr.length;i++){
  if(arr[i] in count){
    count[arr[i]] = count[arr[i]] +1;
  }
  else{
    count [arr[i]] = 1;
  }


}

console.log(count);