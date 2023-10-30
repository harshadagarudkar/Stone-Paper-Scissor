function start(){
   document.getElementById("start").style.visibility="hidden";
   document.getElementById("rock").style.visibility="visible";
   document.getElementById("paper").style.visibility="visible";
   document.getElementById("scissor").style.visibility="visible";
   document.getElementById("result").style.display = "none";
 
}

       function restart() {
         window.location.reload();
       }

let clickedHand=["<img src='rock.png' id='img1'>","<img src='paper.png' id='img1'>",
"<img src='scissors.png' id='img1'>"];

let clickedRightHand=["<img src='rock.png' id='img2'>","<img src='paper.png' id='img2'>",
"<img src='scissors.png' id='img2'>"];

function game(position){
 
   document.getElementById("img1").style.animation="shakeLeft 1s 5 ease-in-out";
   document.getElementById("img2").style.animation="shakeRight 1s 5 ease-in-out";
resetHands();

let random=Math.floor(Math.random()*3);
document.getElementById("img2").src = ["rock.png", "paper.png", "scissors.png"][random];
document.getElementById("img1").src = ["rock.png", "paper.png", "scissors.png"][position];


setTimeout(()=>{
let resultText;
   if(random===position){
     resultText = "It's a DRAW!";
   }
  else if(random===2 && position===0){
   resultText = "YOU WIN, GOOD JOB!";
    }
    else if(random===1 && position===2){
     resultText = "YOU WIN, GOOD JOB!";
    }
    else if(random===0 && position===1){
     resultText = "YOU WIN, GOOD JOB!"; 
    }
    else{
     resultText = "COMPUTER WINS, BETTER LUCK NEXT TIME!";
    }


    const resultElement = document.getElementById("result");
       resultElement.textContent = resultText;
       resultElement.style.display = "block"; // Show the result
       displayRestartButton(); // Show the restart button

   
       setTimeout(()=>{
         resultElement.style.display = "none";
         start();
       }, 6000);

     },3000);  
}

function resetHands() {
           setTimeout(() => {
               document.getElementById("img1").style.animation = "none";
               document.getElementById("img2").style.animation = "none";
               
           }, 2000);
          
       }

       function displayRestartButton() {
           document.getElementById("restart").style.display = "block";
       }

