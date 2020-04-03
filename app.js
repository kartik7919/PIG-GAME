
var scores,roundScore,activePlayer,playingGame,diceCheck,finalScore;

initialise();
 
 document.querySelector('.btn-roll').addEventListener('click',function(){

 		var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
 		
 	if(playingGame){
 		diceDom.setAttribute('src','dice-' + dice + '.png')  //we can also use this method .src = 'dice-' + dice + '.png'
 		diceDom.style.display='block'

 		if(dice !== 1){

 			if(diceCheck===6 && dice===6){
 				document.querySelector('#score-' + activePlayer).textContent=0
 				document.querySelector('#current-' + activePlayer).textContent=0
 				nextPlayer();


 			}else{

 			roundScore += dice
 			document.querySelector('#current-' + activePlayer).textContent=roundScore
 			}
 			
 		}else{
 			nextPlayer();
 		}
 	}

 })

 document.querySelector('.btn-hold').addEventListener('click',function(){

 	if(playingGame){
 		 scores[activePlayer] += roundScore
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    if(scores[activePlayer]>=finalScore){
    	document.querySelector('#name-' + activePlayer).textContent='WINNER!!'
    	document.querySelector('.dice').style.display='none'
    	playingGame=false

    }else{

    nextPlayer();
    }
 	}

 })

 			
document.querySelector('.btn-new').addEventListener('click',initialise)

     function nextPlayer(){
     	var diceDom = document.querySelector('.dice');
     	 roundScore=0;
 			document.querySelector('#current-' + activePlayer).textContent=0;
 			activePlayer===0 ? activePlayer=1 : activePlayer=0

 			document.querySelector('.player-0-panel').classList.toggle('active')
 			document.querySelector('.player-1-panel').classList.toggle('active')

 			diceDom.style.display='none'
     }

     function initialise(){

     	scores=[0,0];
		activePlayer=0;
		roundScore=0;
		playingGame=true
		diceCheck=0
		finalScore=Number(prompt('WELCOME!! Plz enter the final score uptill you want to play,Otherwise by default it will get set to 100'))
		if(finalScore===0){
			finalScore=100
		}

document.querySelector('.dice').style.display='none'
document.querySelector('#score-0').textContent=0
document.querySelector('#score-1').textContent=0
document.querySelector('#current-0').textContent=0
document.querySelector('#current-1').textContent=0
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')
document.querySelector('.player-1-panel').classList.remove('active')
document.querySelector('#name-0').textContent='Player 1'
document.querySelector('#name-1').textContent='Player 2'

     }

 			 
 			 
 			 
 			 
 			 

 		


        

        


