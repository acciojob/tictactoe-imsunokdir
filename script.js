//your JS code here. If required.
// board = boxes
// square = box


const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const boxes = document.getElementById("boxes");
const box = document.getElementsByClassName("box");
const mainBox = document.querySelector(".main-box")
const players = ['X','O'];
let twoPlayers = []
let currentPlayer = players[0];
let restart = document.getElementById("restart");
function enterGame(event){
  event.preventDefault();
	startGame()
  // let form = document.getElementById("forms");
  // let newHeading = document.createElement("h2");
  // newHeading.textContent="Game started";
  // form.appendChild(newHeading);
 //  let player1 = document.getElementById("player1").value;
 //  let player2 = document.getElementById("player2").value;
 //  form.style.display="none";
	// mainBox.style.display = "block"
 //  startGame(player1, player2);
}


let startGame =()=>{
	  let form = document.getElementById("forms"); 
	  let player1 = document.getElementById("player-1").value;
  let player2 = document.getElementById("player-2").value;
	restart.style.display="block"
  form.style.display="none";
	mainBox.style.display = "flex"
  // startGame(player1, player2);
  console.log("**************************************")
  twoPlayers = [player1, player2];
  const endMessage = document.getElementById("message");
  endMessage.textContent=`${twoPlayers[0]}, you're up`;
  for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',()=>{
      if(box[i].textContent !== ""){
        return
      }
      box[i].textContent = currentPlayer;
      
      console.log("checkWinner:", checkWinner(currentPlayer))
      
      if(checkWinner(currentPlayer)){
        
        let winner = "";
        if(currentPlayer == "X"){
          winner = twoPlayers[0]
        }else{
          winner = twoPlayers[1]
        }
        endMessage.textContent=`${winner}, congratulations you won!`;
        return
      }
      
      console.log("checkTie",checkTie())
      if(checkTie()){
        endMessage.textContent="Game is tied!"
        return
      }
      
      currentPlayer = (currentPlayer ===  players[0]) ? players[1]:players[0];
      console.log("curr:", currentPlayer)
      if(currentPlayer == players[0]){
        endMessage.textContent=`${twoPlayers[0]}, you're up`
      }else{ 
        endMessage.textContent = `${twoPlayers[1]}, you're up`
      }
    })
  }
}


let checkWinner=(currentPlayer)=>{
  
  for(let i=0;i<winning_combinations.length;i++){
    const [a,b,c] = winning_combinations[i];
    // console.log("test: ",box[a].textContent, box[b].textContent, box[c].textContent);
    if(box[a].textContent === currentPlayer && box[b].textContent === currentPlayer && box[c].textContent === currentPlayer){
      box[a].style.backgroundColor = "#800080";
      box[b].style.backgroundColor = "#800080";
      box[c].style.backgroundColor = "#800080"; 
      box[a].style.color = "white";  
      box[b].style.color = "white";
      box[c].style.color = "white";
      return true
    }
    
  }
  return false
}

let checkTie=()=>{
  for(let i=0;i<box.length;i++){
    if(box[i].textContent === ""){
      return false
    }
  }
  return true;
}



restart.addEventListener('click',()=>{
	for(let i=0;i<box.length;i++){
		box[i].textContent = "";
		box[i].style.backgroundColor = "#ffc0cb";
		box[i].style.color = "";
	}
	
	startGame()
})





