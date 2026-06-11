const promise = new Promise((resolve,result)=>{ // remember of capital P
setTimeout(()=>{
    resolve("Pizza delivered");
},2000);
});
promise.then((result)=>{
    console.log(result);
}); 
console.log("Order placed");

// now the case when there is a possibility of order rejection

const orderSuccess = false;
const promisee = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        if(orderSuccess){
            resolve("Pizza Delivered");
        }
        
        else{
            reject("pizza not delivered");
        }
    },2000);
});

promisee // syntax ka dhyan rakhna plsss-------------------
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
console.log("Order placed");
