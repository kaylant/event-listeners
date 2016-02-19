// GO!

// Numero Uno
var navBar = document.querySelector(".nav-menu")
var showNavButton = document.querySelector("#show-nav")

// var alertFunction = function() {
//   alert("woot")  
// }

// showNavButton.addEventListener('click',alertFunction)

var navState = {
	showing: true
}

var toggleNav = function() {
  if (navState.showing) {
    navBar.style.opacity = 0
    navState.showing = false
  }
  else {
    navBar.style.opacity = 1
    navState.showing = true
  }
}

showNavButton.addEventListener('click',toggleNav)

// Numero Dos

var inputEl = document.querySelector('#add-guest input')
var guestListUl = document.querySelector("#add-guest ul")


var addItem = function(keyEvent) {
  var inputEl = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {
      var userInput = inputEl.value
      var newLi = document.createElement('li')
      newLi.className += "guest"
      newLi.textContent = userInput
      guestListUl.appendChild(newLi)
      inputEl.value = ''
  }  
}

inputEl.addEventListener('keydown',addItem)

// Numero Tres

var inputElBonus = document.querySelector('#add-guest-bonus input')
var guestListUlBonus = document.querySelector("#add-guest-bonus ul")

var addItemBonus = function(keyEvent) {
  var inputElBonus = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {
      var userInputBonus = inputElBonus.value
      var newLiBonus = document.createElement('li')
      var removeButton = document.createElement("button")
      newLiBonus.className += "guest"
      newLiBonus.textContent = userInputBonus
      guestListUlBonus.appendChild(newLiBonus)
      newLiBonus.appendChild(removeButton)
      removeButton.innerHTML = "X"
      inputElBonus.value = ''
      var removeGuest = function() {
		guestListUlBonus.removeChild(newLiBonus)
		}
      removeButton.addEventListener('click',removeGuest) 
	}
}

inputElBonus.addEventListener('keydown',addItemBonus)
