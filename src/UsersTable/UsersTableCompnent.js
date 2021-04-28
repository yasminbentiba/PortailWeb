import React, { Component } from "react";
import RESTAPIUrl from "../config/config";
import UsersTable from "../UsersTable/UsersTable";

class UsersTableCompnent extends Component {
  constructor(props, context) {
    super(props, context);
    this.editClicked = this.editClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
    
    this.desactivateClicked = this.desactivateClicked.bind(this);
    this.state = {
      usersTable: [{}],
    };
  }

  editClicked(_id) {
    fetch(RESTAPIUrl + "/api/account/edit?_id=" + _id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          this.setState({
            usersTable: json.users,
          });
        } else {
          console.log("error");
        }
      });
  }
  deleteClicked(_id) {
    fetch(RESTAPIUrl + "/api/account/delete?_id=" + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          this.setState({
            usersTable: json.users,
          });
        } else {
          console.log("error");
        }
      });
  }



  desactivateClicked(_id) {
    fetch(RESTAPIUrl + "/api/account/desactivate?_id=" + _id  , {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          this.setState({
            usersTable: json.users,
          });
        } else {
          console.log("error");
        }
      });
  }

  componentDidMount() {
    fetch(RESTAPIUrl + "/api/account/getAllUsers")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          this.setState({
            usersTable: json.users,
          });
        } else {
          console.log("error");
        }
      });
  }
  parseUsers = (users) => {
    return users.map((user) => ({
      key: user._id,
      _id: user._id,
      userEmail: user.email,
      userName: user.name,
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userRole: user.role,
      userAtelierType: user.atelierType,
      userUrl: user.url,
      userIsActivated:user.isActivated,
      signUpDate: user.signUpDate ,
    }));
  };

  render() {
    return (
      <div>
        <h1>Users table</h1>
        <UsersTable
          items={this.parseUsers(this.state.usersTable)}
          onEdit={this.editClicked}
          onDelete={this.deleteClicked}
          onDesactivate={this.desactivateClicked}
        />
      </div>
    );
  }
}

export default UsersTableCompnent;
