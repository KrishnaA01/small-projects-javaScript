/**

let input = document.querySelector('input');
let button = document.querySelector('button');



function GeneratePass(length=7){
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let password = '';
    
    for (let i = 0; i < length; i++){
        let at = Math.floor(Math.random()*(charset.length +1));
        console.log(at);
        password += charset.charAt(at)
    };
    return password;
}

button.addEventListener('click', ()=>{
    input.value = GeneratePass(7);
})
 */

//? lexical scopes and closures

function sum (){
    let a = 5;
    let b = 6;
    function doubleSum (){
        console.log(a+b);
    }
    doubleSum ()
}

sum();




function subt (){
    let b = 15;
    if (true){
       let c = 200;
        console.log(b);
    }
    console.log(c); //? c is not defined
}

subt();




