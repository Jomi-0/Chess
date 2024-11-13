//create an array
//HOMEWORK DO BISHOP DONT FORGET!!!!!!!!!
//- if desiredPosition is not the same as currentPosition

let chessArray = [
  [Rook, Pawn, "", "", "", "", Pawn, Rook],
  [Knight, Pawn, "", "", "", "", Pawn, Knight],
  [Bishop, Pawn, "", "", "", "", Pawn, Bishop],
  [Queen, Pawn, "", "", "", "", Pawn, King],
  [King, Pawn, "", "", "", "", Pawn, Queen],
  [Bishop, Pawn, "", "", "", "", Pawn, Bishop],
  [Knight, Pawn, "", "", "", "", Pawn, Knight],
  [Rook, Pawn, "", "", "", "", Pawn, Rook],
];

//create classes
class Piece {
  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }
  wantedpcheck(movex, movey) {
    let chessPosition = chessArray[movex][movey];

    //checking if the move is on the board using x and y and If the destination is empty\
    //if desired piece is an ally, no moving there
    if (movex <= 7 && movex >= 0 && movey <= 7 && movey >= 0) {
      if (chessPosition == "") {
        return true;
      } else if (chessPosition.colour != this.colour) {
        return true;
      }
    }
    return false;
  }
}
class Rook extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }

  checkmoves(movex, movey) {
    //checking if the move is on the board using x and y333
    //check if space is empty and if it isn't return false
    if (wantedpcheck(movex, movey) == false) {
      return false;
    }
    if (this.x == movex) {
      let change;
      if (movey - this.y > 0) {
        change = 1;
      } else {
        change = -1;
      }
      for (let tempY = this.y + change; tempY != movey; tempY += change) {
        let chessPosition = chessArray[movex][tempY];
        if (chessPosition != "") {
          return false;
        }
      }
    } else if (this.y == movey) {
      // Add logic for moving along the x-axis if needed
      let change;
      if (movex - this.x > 0) {
        change = 1;
      } else {
        change = -1;
      }
      for (let tempX = this.x + change; tempX != movex; tempX += change) {
        let chessPosition = chessArray[tempX][movey];
        if (chessPosition != "") {
          return false;
        }
      }
    }
  }
}

class Knight extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (wantedpcheck(movex, movey) == false) {
      return false;
    }
    let changeX = Math.abs(movex - this.x);
    let changeY = Math.abs(movey - this.y);
    if ((changeX == 1 && changeY == 2) || (changeX == 2 && changeY == 1)) {
      return true;
    }
  }
}

class Bishop extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (wantedpcheck(movex, movey) == false) {
      return false;
    }
    // Check if the move is a valid diagonal move
    if (movex - this.x == movey - this.y) {
      let changeX = movex > this.x ? 1 : -1;
      let changeY = movey > this.y ? 1 : -1;

      // check for obstacles
      let tempX = this.x + changeX;
      let tempY = this.y + changeY;
      while (tempX !== movex && tempY !== movey) {
        let chessPosition = chessArray[tempX][tempY];
        if (chessPosition !== "") {
          return false; // Obstacle found, invalid move
        }
        tempX += changeX;
        tempY += changeY;
      }
    }
  }
}

class Queen extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (wantedpcheck(movex, movey) == false) {
      return false;
    }
    // Check if the move is a valid diagonal move
    if (movex - this.x == movey - this.y) {
      let changeX = movex > this.x ? 1 : -1;
      let changeY = movey > this.y ? 1 : -1;

      // check for obstacles
      let tempX = this.x + changeX;
      let tempY = this.y + changeY;
      while (tempX !== movex && tempY !== movey) {
        let chessPosition = chessArray[tempX][tempY];
        if (chessPosition !== "") {
          return false; // Obstacle found, invalid move
        }
        tempX += changeX;
        tempY += changeY;
      }
    } else if (this.x == movex) {
      let change;
      if (movey - this.y > 0) {
        change = 1;
      } else {
        change = -1;
      }
      for (let tempY = this.y + change; tempY != movey; tempY += change) {
        let chessPosition = chessArray[movex][tempY];
        if (chessPosition != "") {
          return false;
        }
      }
    } else if (this.y == movey) {
      // Add logic for moving along the x-axis if needed
      let change;
      if (movex - this.x > 0) {
        change = 1;
      } else {
        change = -1;
      }
      for (let tempX = this.x + change; tempX != movex; tempX += change) {
        let chessPosition = chessArray[tempX][movey];
        if (chessPosition != "") {
          return false;
        }
      }
    }
    return false;
  }
}

class King extends Piece {
  constructor(x, y, colour) {
    super(x, y, colour);
  }
  checkmoves(movex, movey) {
    if (wantedpcheck(movex, movey) == false) {
      return false;
    }
    return Math.abs(movex - this.x) < 2 && Math.abs(movey - this.y) < 2;
  }
}

class Pawn extends Piece {
  constructor(x, y, colour) {
    this.firstMove = 0;
    super(x, y, colour);
    this.enPassantTarget = false;
  }
  checkmoves(movex, movey) {
    if (wantedpcheck(movex, movey) == false) {
      return false;
    }
    if (
      movey - this.y == 2 &&
      movex - this.x == 0 &&
      firstMove < 1 &&
      chessPosition != ""
    ) {
      firstMove += 1;
      this.enPassantTarget = True;

      return true;
    } else if (
      movey - this.y == 1 &&
      movex - this.x == 0 &&
      chessPosition != ""
    ) {
      firstMove++;
      this.enPassantTarget = false;
      return true;
    }
    let chessPosition = chessArray[movex][movey];
    if (
      chessPosition != "" &&
      Math.abs(movex - this.x) == 1 &&
      Math.abs(movey - this.y) == 1
    ) {
      return true;
    }
    direction = 0;
    if ((this.colour = "White")) {
      direction = 1;
    } else {
      direction = -1;
    }
    let opposingPawn = chessArray[moveX][moveY - direction];
    // En Passant Capture (optional, if `enPassantTarget` is implemented)
    if (
      opposingPawn instanceof Pawn &&
      chessPosition != "" &&
      opposingPawn.colour != this.colour &&
      opposingPawn.enPassantTarget // Assuming `enPassantTarget` is globally set when a pawn moves 2 squares
    ) {
      return True;
      //delete enpassanttarget
    }
    {
      //checking if after piece has move diagonally there is a pawn
      enPassantTarget.x === this.x;

      return true;
    }
  }

  //return Math.abs(movex - this.x) < 2 && Math.abs(movey - this.y) < 2; // just trying to see how i could tweak fo capturing
}
