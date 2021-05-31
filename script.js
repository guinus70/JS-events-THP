//Fonctionnalité 1

const footer = document.getElementsByTagName('footer')[0];
let count = 0;
footer.addEventListener("click", function(){
 count += 1;
 console.log('clique n° ' + count);
});

// Fonctionnalité 2

const navbarHeader = document.getElementById('navbarHeader');
const hamburgerMenu = document.querySelector('div div button.navbar-toggler');
hamburgerMenu.addEventListener('click', function() {
  navbarHeader.classList.toggle("collapse");
});


//Fonctionnalité 3

const card1 = document.querySelectorAll('div.col-md-4')[0];
const editCard1 = document.querySelector('div.col-md-4 button.btn-outline-secondary');

editCard1.addEventListener('click', function() {
  card1.style.color = "red";
});


//Fonctionnalité 4
const card2 = document.querySelectorAll('div.col-md-4')[1];
const editCard2 = document.querySelectorAll('div.col-md-4 button.btn-outline-secondary')[1];

editCard2.addEventListener('click', function() {

  if (card2.style.color == "green"){
   card2.style.color = "black";
  }
  else {
   card2.style.color = "green";
  }
});


//Fonctionnalité 5

const navbar = document.querySelector('div.navbar');
const bootstrap = document.querySelector('head link');
const main = document.querySelector('main');

navbar.addEventListener('dblclick', function() {
  bootstrap.setAttribute('disabled', 'disabled');
});

main.addEventListener('dblclick', function() {
  bootstrap.removeAttribute("disabled");
});



//Fonctionnalité 6

let theCards = document.getElementsByClassName("card");

for (let count = 0; count < 6; count++) {
	let cardText = theCards[count].getElementsByClassName("card-text")[0];
	let cardImage = theCards[count].getElementsByClassName("card-img-top")[0];
  let cardButtonView = theCards[count].getElementsByTagName("button")[0];

	function miniCard() {
		if (cardImage.style.width === "20%") {
			cardImage.style = "";
			cardText.classList.toggle("collapse");
		}
		else {
			cardImage.style.width = "20%";
			cardText.classList.toggle("collapse");
		}
	}
	cardButtonView.addEventListener("mouseover", miniCard);
}


//Fonctionnalité 7
const buttonNext = document.querySelector('main section p a.btn-secondary');
const cards = document.querySelectorAll('div.col-md-4');
const divcards = document.querySelector('div.album div.container div.row');
let card_1 = divcards.children[0];
let card_6 = divcards.children[5];

buttonNext.addEventListener('click', function() {
  divcards.insertBefore(card_6, card_1);
  card_1 = divcards.children[0];
  card_6 = divcards.children[5];
});



// Fonctionnalité 8
const buttonPrevious = document.querySelector('main section p a.btn-primary');
card_1 = divcards.children[0];
card_6 = divcards.children[5];

buttonPrevious.addEventListener('click', function(event) {
  event.preventDefault();
  divcards.insertBefore(card_1, card_6.nextElementSibling);
  card_1 = divcards.children[0];
  card_6 = divcards.children[5];
});



// Fonctionnalité 9

let logoNav = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
let body = document.body

let onLogoNav = function (e) {
  if (e.key === "a") {
    body.className = ''
    body.classList.add("col-4");
    body.style.padding = "0px 0px 0px 0px";
  } else if (e.key === "y") {
    body.className = ''
    body.classList.add("col-4");
    body.classList.add("offset-md-4");
    body.style.padding = "0px 0px 0px 0px";
  } else if (e.key === "p") {
    body.className = ''
    body.classList.add("offset-md-8");
    body.style.padding = "0px 0px 0px 0px";
  } else if (e.key === "b") {
    body.className = ''
  }

}
logoNav.addEventListener('keypress', onLogoNav)
