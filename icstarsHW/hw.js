function function1(){
    let theDiv = document.getElementById('div1');
    let p = document.createElement('p');
    p.innerText = 'Hi Ben, this is new!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
    theDiv.appendChild(p);
}

const function2 = () =>{
    let theDiv =  document.getElementById('div2')
    theDiv.style.backgroundColor ='green';
    theDiv.style.color='red';
    theDiv.style.textAlign='center';
}
const function3 = () =>{
    let div3 = document.getElementById('div3');
    div3.classList.add('notUsed')
}