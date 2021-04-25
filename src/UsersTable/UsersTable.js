import React, { Component } from 'react';
import { Badge, Button, ButtonGroup, Image, Label } from 'react-bootstrap';
import { TableHeaderColumn } from 'react-bootstrap-table';
import Tab from './Tab';

import './UsersTable.js.scss';

class UsersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }
  render() {
    const { items } = this.props;
    return (
      <Tab
        items={items}
      >
        <TableHeaderColumn dataField="id" isKey hidden>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="userName" dataAlign="center">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="userEmail" dataAlign="center">email</TableHeaderColumn>
        <TableHeaderColumn dataField="signUpDate" dataAlign="center">signUp Date</TableHeaderColumn>
        <TableHeaderColumn dataFormat={this.actionsFormatter} dataAlign="center" width="240">Actions</TableHeaderColumn>
      </Tab>
    );
  }

  actionsFormatter = (cell, { _id }) => {
    const { onDelete, onEdit } = this.props;
    return (
      <div>
        <ButtonGroup>
          <Button className="action-btn" bsStyle="primary" bsSize="small"
            onClick={() => onEdit(_id)}
          > <i style={{ fontSize: '14px' }} className="material-icons icon-style">edit</i>
          </Button>
          <Button className="action-btn" bsStyle="danger" bsSize="small"
            onClick={() => onDelete(_id)}
          >  <i style={{ fontSize: '14px' }} className="material-icons icon-style">delete
          </i>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default UsersTable;
