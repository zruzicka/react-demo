import React, { Component } from 'react';
import Row from './Row';
import './Table.css';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rowsContent : props.rowsContent
    }
  }

  render() {
    return (
      <table className="Table">
        <thead>
        {
          // TODO Render header via suitable Component...
        }
        <tr><th>ID</th><th>Username</th><th>Status</th></tr>
        </thead>
        <tbody>
        {this.renderRows(this.state.rowsContent)}
        </tbody>
      </table>
    );
  }

  renderRows(tableData) {
    return tableData.map(function(cellsContent, i) {
      return (<Row cells={cellsContent} key={i}/>);
    });
  }

}

export default Table;
