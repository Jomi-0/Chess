//create an array
let chessarray = [  [Rook, Pawn,"" ,"" ,"" ,""  ,Pawn,Rook],
                    [Knight,Pawn,"" ,"" ,"" ,"" ,Pawn,Knight],
                    [Bishop,Pawn, "","" ,"" ,"" ,Pawn,Bishop],
                    [Queen,Pawn, "" ,"" ,"" ,"" ,Pawn,King],
                    [King,Pawn,""   ,"" ,"" ,"" ,Pawn,Queen],
                    [Bishop,Pawn,"" ,"" ,"" ,"" ,Pawn,Bishop],
                    [Knight,Pawn,"" ,"" , "", "",Pawn,Knight],
                    [Rook, Pawn,""  ,"" ,"" ,"" ,Pawn,Rook]];
                    

//create classes
class Piece {
  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }
}
class Rook extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (movex <= 7 && movex >= 0 && movey <= 7 && movey >= 0) {
      //checking if the move is on the board using x and y
      return true;
    if (chessarray = "")
    }
    return false;
  }
}

class Knight extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (movex <= 7 && movex >= 0 && movey <= 7 && movey >= 0) {
      //checking if the move is on the board using x and y
      return true;
    }
    return false;
  }
}

class Bishop extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (movex <= 7 && movex >= 0 && movey <= 7 && movey >= 0) {
      //checking if the move is on the board using x and y
      return true;
    }
    return false;
  }
}

class Queen extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (movex <= 7 && movex >= 0 && movey <= 7 && movey >= 0) {
      //checking if the move is on the board using x and y
      return true;
    }
    return false;
  }
}

class King extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (movex <= 7 && movex >= 0 && movey <= 7 && movey >= 0) {
      //checking if the move is on the board using x and y
      return true;
    }
    return false;
  }
}

class Pawn extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (movex <= 7 && movex >= 0 && movey <= 7 && movey >= 0) {
      //checking if the move is on the board using x and y
      return true;
    }
    return false;
  }
}
