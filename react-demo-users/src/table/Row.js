import React, { Component } from 'react';
import Cell from './Cell';
import './Row.css';

class Row extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cells : props.cells
		}
	}

	render() {
		return (
			<tr className="Row">
			{this.renderCells(this.state.cells)}
			</tr>
			)
	}

	renderCells(cells) {
		return cells.map(function(cell, i) {
			return (<Cell key={i} cellContent={cell} />);
		});

	}
}


	export default Row;
