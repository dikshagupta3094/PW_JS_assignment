function ageInDays(firstName,lastName,age){
  let fullName = firstName.concat(" ",lastName)
 
  let ageIndays = age*365

  return logResult(fullName,ageIndays)
}

function logResult(fullName,ageIndays){
  console.log(`The person full name is ${fullName}, and their age in days is ${ageIndays}`);
}
ageInDays("Diksha","Gupta",19)