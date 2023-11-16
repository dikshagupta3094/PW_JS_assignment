function greet(user){
  return new Promise((resolve)=>{
       const greetings = `Hello,${user}`
       resolve(greetings)
    })
}

greet("Mithun").then(function(message){
    console.log(message);
})

