let elementValue = "", elementClassValue = "";
let selected = false;

function pieceMovement(value){
    if(selected && movePossible(elementValue, value) )
        selectDest(value);
    else if(!selected && selectionPossible(value))
        selectPiece(value);
}

function selectPiece(value){
    console.log("selecting piece", value);
    elementValue = value;
    elementClassValue = document.getElementById(value).attributes.getNamedItem("class").value;
    const elementClass = document.createAttribute("class");
    elementClass.value = elementClassValue + " selected";
    document.getElementById(value).attributes.setNamedItem(elementClass);
    selected = true;
}

function selectDest(value){
    if(value==elementValue)
    {   
        console.log("Piece not moved");

        const elementClass = document.createAttribute("class");
        elementClass.value = elementClassValue;
        document.getElementById(elementValue).attributes.setNamedItem(elementClass);
        
        selected = false;
        return;
    }

    console.log("selecting destination", elementValue, value);

    elementHtml = document.getElementById(elementValue).innerHTML;
    document.getElementById(elementValue).innerHTML = "";
    const elementClass = document.createAttribute("class");
    elementClass.value = elementClassValue;
    document.getElementById(elementValue).attributes.setNamedItem(elementClass);
    
    document.getElementById(value).innerHTML = (' ' + elementHtml).slice(1);
    selected = false;

    endTurn(elementValue, value);
}

function endTurn(oldValue, newValue)
{
    var oldX = oldValue[0]-'0';
    var oldY = oldValue[2]-'0';
    var newX = newValue[0]-'0';
    var newY = newValue[2]-'0';
    positions[newX][newY] = (' ' + positions[oldX][oldY]).slice(1); // force a deep copy
    positions[oldX][oldY] = ".";
    
    piecePromotion(newX, newY);
    
    if(turn=="W")
        turn = "B";
    else
        turn = "W";

    console.log("ending turn", oldValue, newValue);
}

function queryPromotion(x, y){
    console.log("Querying piece promotion", x, y);
    let promotedPiece = window.prompt("A pawn can be promoted. Type your choice for the obtained piece.\nType Q for queen, B for bishop, H for knight and R for rook. Click OK to proceed.\nClick Cancel to deny promotion. Promotion will not be offered for this piece again.");
    if(promotedPiece == null)
        window.alert("You have refused promotion.");
    else if(promotedPiece != 'Q' && promotedPiece!='B' && promotedPiece!='H' && promotedPiece!='R')
        window.alert("Wrong choice. Promotion will not be offered again");
    else{
        console.log("Promoting piece at", x, y);
        const square = document.getElementById(x+","+y);
        square.innerHTML = "<p style=\"color:" + (turn=='B'?"black":"chocolate") + ";\">" + promotedPiece + "</p>";
        positions[x][y] = turn + promotedPiece;
    }
}