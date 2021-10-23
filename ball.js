function ask(){
    var inputFields=document.getElementById("inputField");
    inputFields.value=document.getElementById("inputField").value;
    inputFields.innerHTML='some text';
    var myPix = new Array("image/ball1.jpeg","image/ball2.jpeg","image/ball3.jpeg","image/ball4.jpeg","image/ball5.jpeg","image/ball6.jpeg","image/ball7.png","image/ball8.png");
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];

}

