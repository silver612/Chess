let board = document.getElementById("board");

board.innerHTML += "<button id = \"0,0\" class = \"light-square\" value = \"0,0\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">R</p></button>";
board.innerHTML += "<button id = \"0,1\" class = \"dark-square\" value = \"0,1\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">H</p></button>";
board.innerHTML += "<button id = \"0,2\" class = \"light-square\" value = \"0,2\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">B</p></button>";
board.innerHTML += "<button id = \"0,3\" class = \"dark-square\" value = \"0,3\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">Q</p></button>";
board.innerHTML += "<button id = \"0,4\" class = \"light-square\" value = \"0,4\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">K</p></button>";
board.innerHTML += "<button id = \"0,5\" class = \"dark-square\" value = \"0,5\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">B</p></button>";
board.innerHTML += "<button id = \"0,6\" class = \"light-square\" value = \"0,6\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">H</p></button>";
board.innerHTML += "<button id = \"0,7\" class = \"dark-square\" value = \"0,7\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\"></p>R</button>";

for(let i = 0; i < 8; i++)
    if(i%2)
        board.innerHTML += "<button id = \"" + 1 + "," + i + "\" class = \"light-square\"" + " value = \"" + 1 + "," + i + "\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">P</p></button>";
    else
        board.innerHTML += "<button id = \"" + 1 + "," + i + "\" class = \"dark-square\"" + " value = \"" + 1 + "," + i + "\" onclick=\"pieceMovement(this.value)\"><p style=\"color: black;\">P</p></button>";


for(let i = 2; i < 6; i++)
{
    for(let j = 0; j < 8; j++)
    {
        if((i+j)%2)
            board.innerHTML += "<button id = \"" + i + "," + j + "\" class = \"dark-square\"" + " value = \"" + i + "," + j + "\" onclick=\"pieceMovement(this.value)\"></button>";
        else
            board.innerHTML += "<button id = \"" + i + "," + j + "\" class = \"light-square\"" + " value = \"" + i + "," + j + "\" onclick=\"pieceMovement(this.value)\"></button>";
    }
}

for(let i = 0; i < 8; i++)
    if(i%2)
        board.innerHTML += "<button id = \"" + 6 + "," + i + "\" class = \"dark-square\"" + " value = \"" + 6 + "," + i + "\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">P</p></button>";
    else
        board.innerHTML += "<button id = \"" + 6 + "," + i + "\" class = \"light-square\"" + " value = \"" + 6 + "," + i + "\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">P</p></button>";

board.innerHTML += "<button id = \"" + 7 + "," + 0 + "\" class = \"dark-square\"" + " value = \"7,0\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">R</p></button>";
board.innerHTML += "<button id = \"" + 7 + "," + 1 + "\" class = \"light-square\"" + " value = \"7,1\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">H</p></button>";
board.innerHTML += "<button id = \"" + 7 + "," + 2 + "\" class = \"dark-square\"" + " value = \"7,2\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">B</p></button>";
board.innerHTML += "<button id = \"" + 7 + "," + 3 + "\" class = \"light-square\"" + " value = \"7,3\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">Q</p></button>";
board.innerHTML += "<button id = \"" + 7 + "," + 4 + "\" class = \"dark-square\"" + " value = \"7,4\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">K</p></button>";
board.innerHTML += "<button id = \"" + 7 + "," + 5 + "\" class = \"light-square\"" + " value = \"7,5\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">B</p></button>";
board.innerHTML += "<button id = \"" + 7 + "," + 6 + "\" class = \"dark-square\"" + " value = \"7,6\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">H</p></button>";
board.innerHTML += "<button id = \"" + 7 + "," + 7 + "\" class = \"light-square\"" + " value = \"7,7\" onclick=\"pieceMovement(this.value)\"><p style=\"color: chocolate;\">R</p></button>";
