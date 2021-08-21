import React from "react";
import Cell from "../cell";
import { WHITE_COLOR, BLACK_COLOR } from "../colors";
import "./style.css";

class Row extends React.Component {


  generateCell(pos, cellImg) {
    const EVEN_COLOR = this.props.pos%2===0 ? WHITE_COLOR : BLACK_COLOR
    const ODD_COLOR = this.props.pos%2===0 ? BLACK_COLOR : WHITE_COLOR
    const cellColor = pos % 2 === 0 ? EVEN_COLOR : ODD_COLOR;
    return <Cell key={pos} id={`${this.props.pos}-${pos}`} bgColor={cellColor} img={cellImg}></Cell>;
  }

  generateCells() {
    return this.props.cellsData
      .map((v, i) => this.generateCell(i,v));
  }
  render() {
    return <div className="row">{this.generateCells()}</div>;
  }
}

export default Row;
