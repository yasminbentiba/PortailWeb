import React, { Component } from 'react';
import './home.scss';
import {
    Button
} from 'react-bootstrap';
class Added extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleEdit = () => {
        this.props.editClicked();
    }


    render() {
        return (
            <div style={{ padding: '10px' }}>
                <Button
                    block
                    onClick={this.handleEdit}
                >
                    edit  <i className="material-icons small">edit</i>
                </Button>
            </div>

        );
    }
}

export default Added;
