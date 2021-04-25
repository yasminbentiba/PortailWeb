import React, { Component } from 'react';
import { BootstrapTable } from 'react-bootstrap-table';

import './Tab.scss';

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
      <div className="table">
        <BootstrapTable
          data={props.items}
          remote={true}
          bordered={false}
          tableStyle={{ backgroundColor: '#fff' }}
          striped
          trStyle={props.trStyle}
    >{props.children}</BootstrapTable>
      </div>
    );
  }
}

export default Tab;
