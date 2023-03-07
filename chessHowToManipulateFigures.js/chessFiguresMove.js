// we have to assign the variable in this case,   var squares = document.querySelectorAll(".square");
// then we can proceed with the symbol deployment,   squares[3].textContent = "X"
// otherwise we can use the more complicated way which is   squares[5].textContent = players[1].symbol

var squares = document.querySelectorAll(".square");

squares[3].textContent = "X"

squares[5].textContent = players[1].symbol
