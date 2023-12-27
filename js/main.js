'use strict'

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');


burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}


/*---------------------------------------------*/

let kitchen = document.querySelectorAll('#kitchen');
let button = document.querySelector('#button');

button.addEventListener('click', watch);

function watch() {
	for (let elem of kitchen) {
		elem.classList.toggle('no-watch');
	}
	if (button.textContent == 'Показать еще') {
		button.textContent = 'Свернуть';
	} else {
		button.textContent = 'Показать еще';
	}
}


/*----------------------------------------------*/

$(document).ready(function(){
	$('.slider').slick({});
		
})

/*------------------------------------------*/

$(document).ready(function(){
	$('.sliderbig').slick({});
		
})

/*-----------------------------------*/
/*POPUP каталог*/

let btnPopupKatalogs = document.querySelectorAll('.button-popup-katalog')
let popupKatalog = document.querySelector('.popup-katalog')

for ( let i = 0; i < btnPopupKatalogs.length; i++) {
	btnPopupKatalogs[i].addEventListener('click', function popupKat() {
		popupKatalog.classList.toggle('open');
	})
}

let formPopupBtn = document.querySelector('.form-popup__button');

formPopupBtn.addEventListener('click', function popupClose() {
	popupKatalog.classList.toggle('open');
	
})

/*----------------------------------------*/
/*POPUP консультация*/

let btnPopupCons = document.querySelectorAll('.button-popup-cons')
let popupCons = document.querySelector('.popup-cons')

for (let i = 0; i < btnPopupCons.length; i++) {
	btnPopupCons[i].addEventListener('click', function popupCon() {
		popupCons.classList.toggle('open');
	})
}

let formPopupBtn2 = document.querySelector('.form-popup__button2');

formPopupBtn2.addEventListener('click', function popupClose2() {
	popupCons.classList.toggle('open');
	
})

/*----------------------------------------*/
/*POPUP вопрос*/

let btnPopupQuestion = document.querySelector('.button-popup-question')
let popupQuestion = document.querySelector('.popup-question')

btnPopupQuestion.addEventListener('click', function popupQuest() {
	popupQuestion.classList.toggle('open');
})


let formPopupBtn3 = document.querySelector('.form-popup__button3');

formPopupBtn3.addEventListener('click', function popupClose3() {
	popupQuestion.classList.toggle('open');
	
})

/*----------------------------------------*/
/*POPUP заявка*/

let btnPopupZakaz = document.querySelectorAll('.button-popup-zakaz')
let popupZakaz = document.querySelector('.popup-zakaz')

for ( let i = 0; i < btnPopupZakaz.length; i++) {
	btnPopupZakaz[i].addEventListener('click', function popupZak() {
		popupZakaz.classList.toggle('open');
	})
}

let formPopupBtn4 = document.querySelector('.form-popup__button4');

formPopupBtn4.addEventListener('click', function popupClose4() {
	popupZakaz.classList.toggle('open');
})

/*------------------------------------------------*/
/*POPUP рассчитать цену */

let btnPopupPrice = document.querySelectorAll('.button-popup-price')
let popupPrice = document.querySelector('.popup-price')

for ( let i = 0; i < btnPopupPrice.length; i++) {
	btnPopupPrice[i].addEventListener('click', function popupPric() {
		popupPrice.classList.toggle('open');
	})
}

let formPopupBtn5 = document.querySelector('.form-popup__button5');

formPopupBtn5.addEventListener('click', function popupClose5() {
	popupPrice.classList.toggle('open');
})