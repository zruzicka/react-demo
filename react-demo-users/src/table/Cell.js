import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cellContent : props.cellContent
		}
	}

	render() {
		return (<td className="Cell">{this.renderCellContent(this.state.cellContent)}</td>);
	}

	renderCellContent(cellContent) {
		return (
			<div>
			{cellContent}
			</div>
			);
	}

}

export default Cell;
