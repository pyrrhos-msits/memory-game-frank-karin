/*Das gegebene Array data.js\cards wird mittels function shuffle
in ein neues randomArray shuffledCards ausgegeben. Mit diesem soll dann
weiter gearbeitet werden
*/


let shuffledCards = [];
let luckyPoints = 0;
let allTries = 0;

function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;
  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  shuffledCards = arra1;
  return shuffledCards;
}



function createCardBoard(array) {
  let cardsList = "";
  for (i = 0; i < array.length; i++) {
    cardsList += `<div> <button class="imgButton" onclick= play(event)>
         <img class = "imgFront " src="./images/bg.png" alt="Boy"> 
         <img class= "imgBack hiddenCard" src="./images/${array[i].img}" alt="${array[i].name}">
          </button> </div>`;
  }
  document.getElementById("Spielfeld").innerHTML = cardsList;
}

function toggleHiddenCard(event) {
  console.log(event);
  let imgVar = event.currentTarget.getElementsByTagName("img");
  Array.from(imgVar).forEach(img => img.classList.toggle("hiddenCard"));
}



let clickedImgArray = [];

function play(event){
      let clickedCard = event.currentTarget;
      clickedImgArray.push(clickedCard);
      //console.log("clickedImgArray :" +clickedImgArray);
      toggleHiddenCard(event); 
      
      //console.log("Click1 :" + clickedImgArray);
      if(clickedImgArray.length===2){
          checkImgMatch(clickedImgArray);      
  }
  
}

function checkImgMatch(array){
  const card1 = array[0].querySelector(".imgBack").getAttribute("alt");
  const card2 = array[1].querySelector(".imgBack").getAttribute("alt");
  if(card1 === card2){
    //console.log("Card1" + card1);
    //console.log("Card2" + card2);
    luckyPoints +=1; 
    allTries +=1;
    console.log("lucky :" + luckyPoints);
    document.getElementById("tr").innerText=`${allTries}`;
    
    if (luckyPoints === 2){
      alert("You Won");}


  }else{
    allTries +=1;
    //console.log("Card1" + card1);
    //console.log("Card2" + card2);
    toggleAutomated(array);
    document.getElementById("tr").innerText= `${allTries}`;
  }
 
  clickedImgArray = [];
  //console.log("array: " + array);
  //console.log("clickedArray: " + clickedImgArray);
 console.log("tries" + allTries);
} 


function toggleAutomated(array) {
  setTimeout(function() {
    Array.from(array[0].getElementsByTagName("img")).forEach(img => img.classList.toggle("hiddenCard"));
    Array.from(array[1].getElementsByTagName("img")).forEach(img => img.classList.toggle("hiddenCard"));
  },1000);  
 
  }



shuffle(cards);
createCardBoard(shuffledCards);
