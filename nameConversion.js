let btn = document.querySelector('#convert-btn');
btn.addEventListener('click', ()=>{
    let val = document.querySelector('#text').value;
    console.log(val);
    val = val.split(' ');
    console.log(val);
    for(let i = 0; i < val.length; i++){
        val[i] = val[i].replace(/[^a-zA-Z0-9]+/g, "");
        if(val[i].length < 1){
            continue;
        }
        console.log(val[i]);
        if(i === 0){
            document.querySelector('#camel-case').innerText = val[i].toLowerCase();
            document.querySelector('#pascal-case').innerText = val[i][0].toUpperCase() + val[i].substring(1).toLowerCase();
            document.querySelector('#snake-case').innerText = val[i][0].toUpperCase() + val[i].substring(1).toLowerCase();
            document.querySelector('#screaming-snake-case').innerText = val[i].toUpperCase();
            document.querySelector('#kebab-case').innerText = val[i].toLowerCase();
            document.querySelector('#screaming-kebab-case').innerText = val[i].toUpperCase();
        }else{
            document.querySelector('#camel-case').innerText += val[i][0].toUpperCase()+ val[i].substring(1).toLowerCase();
            document.querySelector('#pascal-case').innerText += val[i][0].toUpperCase()+ val[i].substring(1).toLowerCase();
            document.querySelector('#snake-case').innerText += "_" + val[i][0].toUpperCase()+ val[i].substring(1).toLowerCase();
            document.querySelector('#screaming-snake-case').innerText += "_" + val[i].toUpperCase();
            document.querySelector('#kebab-case').innerText += "-" + val[i].toLowerCase();
            document.querySelector('#screaming-kebab-case').innerText += "-" + val[i].toUpperCase();
        }
    }
});

let h = document.querySelectorAll('.case_div');
h.forEach((ele)=>{
    ele.style.wordWrap = "break-word";
})

document.querySelector('#text').style.wordWrap = "break-word";
document.querySelector('#text').style.overflowX = "wrap";