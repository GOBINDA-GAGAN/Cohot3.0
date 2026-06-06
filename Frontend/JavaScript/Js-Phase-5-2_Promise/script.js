
//Promise hota a a bada it give me a json

async function dataLao () {

    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data= await response.json()
    console.log(data);
}


// dataLao();

// create a Promise

let p1= new Promise(function(resolve,reject){
    let val=true;
    if(val){
        console.log("success");
        
    }
    else{
        console.log('Failure');
        
    }
})

let p2= new Promise(function(resolve,reject){
     console.log('promise pending ha...');
     let result=true
     setTimeout(function(){
       if(result){
        console.log("fullfilled");
        resolve()
       }
       else{
        console.log("rejected");
        reject()
        
       }
        
     },2000)
     
})