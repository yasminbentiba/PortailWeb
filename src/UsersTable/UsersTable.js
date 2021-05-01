import React, { Component } from 'react';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
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
   <form>




      <Tab
        items={items}
      >
        <TableHeaderColumn dataField="id" isKey hidden>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="userFirstName" dataAlign="center">First Name</TableHeaderColumn>
        <TableHeaderColumn dataField="userLastName" dataAlign="center">Last Name</TableHeaderColumn>
        <TableHeaderColumn dataField="userEmail" dataAlign="center">email</TableHeaderColumn>
        <TableHeaderColumn dataField="userRole" dataAlign="center">Role</TableHeaderColumn>
        <TableHeaderColumn dataField="userAtelierType" dataAlign="center">Type d'atelier</TableHeaderColumn>
        <TableHeaderColumn dataField="userAtelierName" dataAlign="center">Nom de l'atelier</TableHeaderColumn>
        <TableHeaderColumn dataField="userUrl" dataAlign="center">Site Web</TableHeaderColumn>
        <TableHeaderColumn dataField="signUpDate" dataAlign="center">signUp Date</TableHeaderColumn>
        <TableHeaderColumn dataField="userIsActivated" dataAlign="center">activé</TableHeaderColumn>
        <TableHeaderColumn dataFormat={this.actionsFormatter} dataAlign="center" width="240">Actions</TableHeaderColumn>
      </Tab>

      </form>
    );
  }
  

  actionsFormatter = (cell, { _id }) => {
    const { onDelete, onEdit,onDesactivate } = this.props;
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



          <Button className="action-btn"  bsSize="small"
            onClick={() => onDesactivate(_id)}
          >  <i style={{ height: '5px' , marginTop: '-4px' }} className="material-icons icon-style"><BlockOutlinedIcon/> activated
          </i>
          </Button>

        
          
        </ButtonGroup>
      </div>
    );
  }
}

export default UsersTable;
