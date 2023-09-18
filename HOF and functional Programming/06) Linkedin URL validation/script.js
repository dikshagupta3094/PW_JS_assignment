// let Linkedingurl = /^(https:\/\/\www\.)[a-zA-Z0-9\-_+$]+\.[a-zA-Z]{2,5}$\[a-zA-z0-9-_+$]/g

let validLinkedinUrl =  /^(https:\/\/\www\.linkedin\.com\/in\/[a-zA-Z0-9-_]{5,30}[a-zA-Z0-9]$)/gm

function ChkUrl(url){
    if(validLinkedinUrl.test(url)){
        console.log("Valid URL"); 
    }
    else{
       console.log("Invalid URL");
    }
}

//  url = "https://www.linkedin.com/in/diksha-gupta3094"
 let url1 = "https://www.linkedin.com/in/kashi@saha-81ba1a6678"
 ChkUrl(url1)
 let url2 = "https://www.linkedin.com/in/diksha-gupta1245"
 ChkUrl(url2)
