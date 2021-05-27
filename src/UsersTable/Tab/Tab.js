import React, { Component } from 'react';
import { BootstrapTable } from 'react-bootstrap-table';
import { Table } from "react-bootstrap";
import './Tab.scss';

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
      <Table
      className=""
      size="sm"
      variant="dark"
      stripted

      hover
      >
        <tbody className="TableForum">
        <BootstrapTable
          data={props.items}
          remote={true}
          bordered={false}
          tableStyle={{ backgroundColor: '#0000' }}
          striped
          trStyle={props.trStyle}
    >{props.children}</BootstrapTable>
      </tbody>
      </Table>
    );
  }
}

export default Tab;
