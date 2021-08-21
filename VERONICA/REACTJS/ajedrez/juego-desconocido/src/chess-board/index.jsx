import React from 'react';
import Row from '../row';
import B_PAWN from '../assets/pieces/b_pawn_svg_withShadow.svg';
import W_PAWN from '../assets/pieces/w_pawn_svg_withShadow.svg';
import B_ROOK from '../assets/pieces/b_rook_svg_withShadow.svg';
import W_ROOK from '../assets/pieces/w_rook_svg_withShadow.svg';
import B_QUEEN  from '../assets/pieces/b_queen_svg_withShadow.svg';
import W_QUEEN  from '../assets/pieces/w_queen_svg_withShadow.svg';


class ChessBoard extends React.Component {

    constructor(){
        super();

        this.board = [
            Array(8).fill(null),
            Array(8).fill(null),
            Array(8).fill(null),
            Array(8).fill(null),
            Array(8).fill(null),
            Array(8).fill(null),
            Array(8).fill(null),
            Array(8).fill(null)
        ]; // array bi-dimensional 8x8
        this.fillFirstGame();
    }

    fillFirstGame(){
        // fill the black pawns
        this.board[1] = this.board[1].map(() => B_PAWN);
        this.board[6] = this.board[6].map(() => W_PAWN);
        
        // fill rooks
        this.board[0][0]=B_ROOK;
        this.board[0][7]=B_ROOK;
        this.board[7][0]=W_ROOK;
        this.board[7][7]=W_ROOK;

        // QUEEN
        this.board[0][3]= B_QUEEN;
        this.board[7][3]= W_QUEEN;
        
    }

    render(){
        return this.board.map((e,i)=> <Row key={i} pos={i} cellsData={e}></Row>);
    }
}

export default ChessBoard;