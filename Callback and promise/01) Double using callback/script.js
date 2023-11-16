let myarr = [1,2,3,4,5]

function myarray(myarr,callback){
     return callback(myarr)
}

function callback(myarr){
      let value = myarr.map(x=>x*2)
      return value
}

console.log(myarray(myarr,callback));
