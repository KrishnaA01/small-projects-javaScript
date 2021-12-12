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