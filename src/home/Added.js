import React, { Component } from 'react';
/* import './home.scss'; */
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css";
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

    handleDesactivate = () => {
        this.props.desactivateClicked();
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

                <Button
                    block
                    onClick={this.handleDesactivate}
                >
                    desactivate  <i className="material-icons small">desactivate</i>
                </Button>
            </div>

        );
    }
}

export default Added;
