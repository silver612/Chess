let turn = "W";

let positions = new Array(8);
for(var i = 0; i < 8; i++)
    positions[i] = new Array(8);

positions[0][0] = "BR";
positions[0][1] = "BH";
positions[0][2] = "BB";
positions[0][3] = "BQ";
positions[0][4] = "BK";
positions[0][5] = "BB";
positions[0][6] = "BH";
positions[0][7] = "BR";
for(var i = 0; i < 8; i++)
    positions[1][i] = "BP";

for(var i = 2; i < 6; i++)
    for(var j = 0; j < 8; j++)
        positions[i][j] = ".";

positions[7][0] = "WR";
positions[7][1] = "WH";
positions[7][2] = "WB";
positions[7][3] = "WQ";
positions[7][4] = "WK";
positions[7][5] = "WB";
positions[7][6] = "WH";
positions[7][7] = "WR";
for(var i = 0; i < 8; i++)
    positions[6][i] = 'WP';

function selectionPossible(value)
{
    console.log("selection possible?", value);
    var x = value[0]-'0';
    var y = value[2]-'0';
    if(turn==positions[x][y][0])
        return true;
    else
        return false;
}

function movePossible(oldValue, newValue)
{
    console.log("move possible?", oldValue, newValue);
    if(oldValue==newValue)
        return true;
    var oldX = oldValue[0]-'0';
    var oldY = oldValue[2]-'0';
    var newX = newValue[0]-'0';
    var newY = newValue[2]-'0';
    if(positions[oldX][oldY][1]=='R')
        return rookMovePossible(oldX, oldY, newX, newY);
    if(positions[oldX][oldY][1]=='H')
        return horseMovePossible(oldX, oldY, newX, newY);
    if(positions[oldX][oldY][1]=='B')
        return bishopMovePossible(oldX, oldY, newX, newY);
    if(positions[oldX][oldY][1]=='K')
        return kingMovePossible(oldX, oldY, newX, newY);
    if(positions[oldX][oldY][1]=='Q')
        return queenMovePossible(oldX, oldY, newX, newY);
    if(positions[oldX][oldY][1]=='P')
        return pawnMovePossible(oldX, oldY, newX, newY);
}

function rookMovePossible(oldX, oldY, newX, newY)
{
    console.log("checking rook move", oldX, oldY, newX, newY);
    if(oldX==newX)
    {
        if(oldY<newY)
        {
            for(var i = oldY+1; i<newY; i++)
                if(positions[oldX][i]!='.')
                    return false;
        }
        else 
        {
            for(var i = oldY-1; i>newY; i--)
                if(positions[oldX][i]!='.')
                    return false;
        }
    }
    else if(oldY==newY)
    {
        if(oldX<newX)
        {
            for(var i = oldX + 1; i<newX; i++)
                if(positions[i][oldY]!='.')
                    return false;
        }
        else 
        {
            for(var i = oldX-1; i>newX; i--)
                if(positions[i][oldY]!='.')
                    return false;
        }
    }
    else
        return false;

    return positions[newX][newY][0]!=turn;
}

function horseMovePossible(oldX, oldY, newX, newY)
{
    console.log("checking knight move", oldX, oldY, newX, newY);
    return (Math.abs((oldX-newX)*(oldY-newY))==2 && positions[newX][newY][0]!=turn);
}

function bishopMovePossible(oldX, oldY, newX, newY)
{
    console.log("checking bishop move", oldX, oldY, newX, newY);
    if(oldX+oldY==newX+newY)
    {
        if(oldY<newY)
        {
            for(var i = oldY+1; i<newY; i++)
                if(positions[newX+newY-i][i]!='.')
                    return false;
        }
        else 
        {
            for(var i = oldY-1; i>newY; i--)
                if(positions[newX+newY-i][i]!='.')
                    return false;
        }
    }
    else if(oldX-oldY==newX-newY)
    {
        if(oldY<newY)
        {    for(var i = oldY+1; i<newY; i++)
                if(positions[newX-newY+i][i]!='.')
                    return false;
        }
        else 
        {
            for(var i = oldY-1; i>newY; i--)
                if(positions[newX-newY+i][i]!='.')
                    return false;
        }
    }
    else
        return false;
    return positions[newX][newY][0]!=turn;
}

function kingMovePossible(oldX, oldY, newX, newY)
{
    console.log("checking king move", oldX, oldY, newX, newY);
    return Math.abs(oldX-newX)<=1 && Math.abs(oldY-newY)<=1 && positions[newX][newY]=='.';
}

function queenMovePossible(oldX, oldY, newX, newY)
{
    console.log("Checking queen move");
    return (rookMovePossible(oldX, oldY, newX, newY) || bishopMovePossible(oldX, oldY, newX, newY));
}

function pawnMovePossible(oldX, oldY, newX, newY)
{
    console.log("checking pawn move", oldX, oldY, newX, newY);
    if(turn=='W')
    {
        if(oldX==6 && newX==4 && oldY==newY)
            return true;
        if(oldY==newY && newX-oldX==-1 && positions[newX][newY]=='.')
            return true;
        if(Math.abs(oldY-newY)==1 && newX-oldX==-1 && positions[newX][newY][0]=='B')
            return true;
        return false;
    }
    else
    {
        if(oldX==1 && newX==3 && oldY==newY)
            return true;
        if(oldY==newY && newX-oldX==1 && positions[newX][newY]=='.')
            return true;
        if(Math.abs(oldY-newY)==1 && newX-oldX==1 && positions[newX][newY][0]=='W')
            return true;
        return false;
    }
}

function piecePromotion(x, y){
    if(x==0 && positions[x][y]=='WP')
        queryPromotion(x, y);
    if(x==7 && positions[x][y]=='BP')
        queryPromotion(x, y);
}