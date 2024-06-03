function one (callback, number){
setTimeout (()=>{
    console.log("this is function one");
    let oneNumber = ++number;
    callback (oneNumber);
}, 5000)
};
function two (callback, number){ 
    setTimeout (()=>{
        console.log("this is function two");
        let twoNumber = ++number;
        callback (twoNumber);
    }, 3000)
};
function three (callback, number){
    setTimeout (()=>{
        console.log("this is function three");
        let threeNumber = ++number;
        callback (threeNumber);
    }, 2000)
};
function four (callback, number){
    setTimeout (()=>{
        console.log("this is function four");
        let fourNumber = ++number;
        callback (fourNumber);
    }, 2000)
};
function five (callback, number){
    setTimeout (()=>{
        console.log("this is function five");
        let fiveNumber = ++number;
        callback (fiveNumber);
    }, 2000)
};
one ((oneNumber)=>{
    two((twoNumber)=>{
        three((threeNumber)=>{
           four((fourNumber)=>{
            five((fiveNumber)=>{

            }, fourNumber)
           }, threeNumber) 
        }, twoNumber)
    }, oneNumber)
}, 40);

