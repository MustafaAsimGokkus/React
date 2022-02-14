//1. generating a random number from 1-6
let randomNumber1=Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);
//2. generate random image source
//                  images/dice         3       .png
let randomImageSrc="images/dice"+randomNumber1+".png"
//3. Get the first image
let image1 = document.querySelector(".img1");
//4. Assign randomImageSrc as a value of src attribute of the image1
// setAttribute(ATTRIBURE NAME, ATTRIBUTE VALUE)
image1.setAttribute("src",randomImageSrc);
//5. Apply the same logic for the second dice
let randomNumber2=Math.floor(Math.random()*6)+1;
let randomImageSrc2="images/dice"+randomNumber2+".png"
let image2 = document.querySelector(".img2");
image2.setAttribute("src",randomImageSrc2);
//6. Print the winner on the screen
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" 🎉🎉🎉 Player 1 Wins!!! 🎉🎉🎉 "
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=" 🙌🙌🙌 Player 2 Wins!!! 🙌🙌🙌 "
}else{
    document.querySelector("h1").innerHTML=" 😒😒😒 DRAW!!! 😒😒😒 "