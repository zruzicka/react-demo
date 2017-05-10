import React, { Component } from 'react';
import Table from './table/Table';
import logo from './logo.svg';
import './App.css';

/*
 * Root component.
 */
class App extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		// Mocked table data.
  		tableData : {
  			rowsContent : [["1","user1"], ["2","user2"], ["3","oldUser","disabled"], ["4","testUser","disabled"]]
  		}
  	}
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Demo-Users</h2>
        </div>
        <p className="App-intro">
          Demo focused on ReactJS usage and demo users data presentation.
        </p>
        <h3 className="TableHeading">Users Demo table</h3>
        {this.renderTable(this.state.tableData)}
      </div>
    );
  }

  renderTable(tableData) {
    return <Table rowsContent={tableData.rowsContent} />;
  }
}

export default App;
