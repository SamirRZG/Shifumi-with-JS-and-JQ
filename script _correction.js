$(document).ready( function(){

	//Création de variables pour récupérer des éléments :

		//création (x2) de variables pour stocker le choix de l'utilisateur et le choix de l'ordinateur
		let userChoice;
		let computerChoice;

		//récupération des images (x3):
		let btnStone = $('img[alt="picto pierre"]');
			//console.log( btnStone );
		let btnScissors = $('img[alt="picto ciseau"]');
			//console.log( btnScissors );
		let btnPaper = $('img[alt="picto papier"]');
			//console.log( btnPaper );	

		//récupération des articles (pour afficher l'image choisi par l'utilisateur et l'ordinateur )(x2):
		let userGame = $('article:first');
			//console.log( userGame );
		let computerGame = $('article:last');
			//console.log( computerGame );

		//récupération de l'aside (pour afficher le résultat )(x1):
		let gameResult = $('aside');
			//console.log( gameResult );
		
		//récupération des liens <a> (pour afficher les boutons jouer ou rejouer )(x2):
		let btnPlay = $('a:first');
			//console.log( btnPlay );
		let btnReplay = $('a:last');
			//console.log( btnReplay );

	//------------------------
	//fonction pour afficher l'image choisi par l'utilisateur et donc son choix !
	function clickOnBtn( bouton, choix ){

		bouton.click(function(){

			//Je stock le choix de l'utilisateur
			userChoice = choix;
				console.log( userChoice );

			//j'affiche l'image correspondante dans l'article ('userGame') prévu à cet effet
			userGame.html('<img src="img/'+choix+'.svg" alt="picto '+choix+'">');

			//On affiche le bouton "Lancer la partie" ('btnPlay')
			btnPlay.fadeIn();
		} );
	}

	//appel de la fonction :
	clickOnBtn( btnStone, 'stone' );
	clickOnBtn( btnPaper, 'paper' );
	clickOnBtn( btnScissors, 'scissors' );
		
	//------------------------
	//Déclaration dune fonction 'computerBet' choix aléatoire computer :
	function computerBet(){

		//Création d'un tableau avec les 3 choix possibles :
		let computerMemory = ['stone', 'paper', 'scissors'];
			console.log( computerMemory);

		let tailleTab = computerMemory.length;
			//console.log( tailleTab ); //3 (car ici, nous avons 3 choix dans le tableau)

		//Ici, on stocke le choix alétoire de l'ordinateur :
		computerChoice = computerMemory[  Math.floor( Math.random() * tailleTab )  ];
			console.log( computerChoice );
			
		//Affichage de l'image correspondante au choix de l'ordinateur ('computerGame') :
		computerGame.html('<img src="img/'+computerChoice+'.svg" alt="picto '+computerChoice+'">');

		//Comparaison des variables userChoice et computerChoice :
			//selon le résultat, on l'affiche dans l'<aside> prévu a cet effet
		if( (userChoice == "stone" && computerChoice == "scissors") || ( userChoice == "paper" && computerChoice == "stone") || ( userChoice == "scissors" && computerChoice == "paper") ){

			gameResult.html("<span class='youWin'> YOU WIN </span>");
		}
		else if( userChoice == computerChoice ){

			gameResult.html("<span class='tie'> TIE </span>");
		}
		else{
			gameResult.html("<span class='youLose'> YOU LOSE </span>");
		}

		//masquer le bouton "Lancer la partie" puis afficher le bouton "Rejouer" :
		btnPlay.fadeOut( function(){

			btnReplay.fadeIn();
		} )
	}

	//Lancer la fonction computerBet() au click sur le bouton "Lancer la partie" (btnPlay)
	btnPlay.click( function(){

		computerBet();
	} )

	//Rendre fonctionnel le bouton "Rejouer" :
	btnReplay.click( function(){

		location.reload();
	} );
} );