// use arrays to store whether fruit is in list or basket as checking the DOM every time is a computationally expensive operation
var fruitsInFruitsList = ['Apple', 'Orange', 'Peach', 'Plum', 'Pear', 'Passionfruit', 'Grapefruit', 'Strawberry'];
var fruitsInBasket = [];

$(document).ready(function() {
    var $fruitListContainer = $('#fruits');
    var $basketContainer = $('#basket');
    
    $('#newfruit').keyup(function(e) {
        if (e.keyCode == 13) {
            var val = $(this).val();
            var valIndex = fruitsInFruitsList.indexOf(val);
            if (valIndex > -1) {
                e.preventDefault();
                fruitsInFruitsList.splice(valIndex, 1);
                fruitsInBasket.push(val);
                
                draw();
                $(this).val('');
            }
        }
    });
    
    draw(); // init
    
    function draw() {
        $fruitListContainer.html(fruitsInFruitsList.reduce(function(accum, fruit) {
            return accum + '<li>' + fruit + '</li>';
        }, ''));
        $basketContainer.html(fruitsInBasket.reduce(function(accum, fruit) {
            return accum + '<li>' + fruit + '</li>';
        }, ''));
    }
    
    
});