// use arrays to store whether fruit is in list or basket as checking the DOM every time is a computationally expensive operation
var fruitsInFruitsList = ['Apple', 'Orange', 'Peach', 'Plum', 'Pear', 'Passionfruit', 'Grapefruit', 'Strawberry'];
var fruitsInBasket = [];

var fruitsListContainer, basketContainer;

window.onload = function() {
    fruitsListContainer = document.getElementById('fruits');
    basketContainer = document.getElementById('basket');
    drawDom(); // init lists
    
    
    document.getElementById('newfruit').addEventListener('keyup', function(e) {
        if (e.keyCode == 13) { // enter key
            var thisVal = e.target.value.trim();
            var valIndex = fruitsInFruitsList.indexOf(thisVal);
            if (valIndex > -1) {
                e.preventDefault();
                
                fruitsInFruitsList.splice(valIndex, 1);
                fruitsInBasket.push(thisVal);
                
                drawDom();
                e.target.value = "";
            }
        }
    });
};


function drawDom() { // we can declare fn after cause the engine hoists function declarations in this form
    fruitsListContainer.innerHTML = "";
    fruitsInFruitsList.forEach(function(fruit) {
        var liEl = document.createElement('LI');
        liEl.innerHTML = fruit;
        fruitsListContainer.appendChild(liEl);
    });
    basketContainer.innerHTML = "";
    fruitsInBasket.forEach(function(fruit) {
        var liEl = document.createElement('LI');
        liEl.innerHTML = fruit;
        basketContainer.appendChild(liEl);
    });
};