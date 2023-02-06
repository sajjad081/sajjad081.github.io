const myImage = document.querySelector('img');
myImage.onclick = ()=>{
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/asset1.png'){
        myImage.setAttribute('src', 'images/asset2.png');
    }
    else{
        myImage.setAttribute('src', 'images/asset1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName(){
    myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }
    else{

    localStorage.setItem('name', myName);
    myHeading.textContent = `Chrome is Cool, ${myName}`;}

}
if(localStorage.getItem('name')){
    setUserName();
}
else{
    storedName = localStorage.getItem('name');
    myHeading.textContent = `Chrome is Cool, ${storedName}`;

}

myButton.onclick = ()=>{
    setUserName();
}

