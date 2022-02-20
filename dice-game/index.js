//1. generate a random number
let num1 = Math.ceil(Math.random()*6);
//2. generate random image source
let randomImgSrc = "images/dice"+num1+".png"
//3.Assign this source to 1st image tag
let image1 = document.querySelectorAll('.img1')[0]
//4. assign randomImgSrc as a value to the  src attribute of the image 1
//for this use    setAttribute()
image1.setAttribute("src",randomImgSrc)


//5. repeat 4 steps for dice 2
let num2 = Math.ceil(Math.random()*6);
let randomImgSrc2 = "images/dice"+num2+".png"
let image2 = document.querySelectorAll('.img2')[0]
image2.setAttribute("src",randomImgSrc2)

//6. print the winner on the screen

num1>num2?    document.querySelector('h1').innerHTML="😀😀😀Player 1 wins!😀😀😀":
              num2>num1?document.querySelector('h1').innerHTML="🙌🙌🙌Player 2 wins!🙌🙌🙌":
              document.querySelector('h1').innerHTML="😒😒😒Berabere😒😒😒";
