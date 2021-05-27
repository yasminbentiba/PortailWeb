import React, { Component } from "react";
import RESTAPIUrl from "../config/config";
import UsersTable from "../UsersTable/UsersTable";
import { LineChart, PieChart , ColumnChart } from 'react-chartkick'
import 'chartkick/chart.js'

class UsersTableCompnent extends Component {
  constructor(props, context) {
    super(props, context);
    this.editClicked = this.editClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
    
    this.desactivateClicked = this.desactivateClicked.bind(this);
    this.state = {
      usersTable: [{}],
      userPres : [[]], 
      data : [[]]
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

       var   sampleUser = 0 
       var  prestataire = 0 
json.users.map((user , index) => {
  
if (user.atelierType === "") {
  sampleUser =  sampleUser + 1
}else {
  prestataire =  prestataire + 1
}

var data = []
var dataTypes = []

json.users.map((user , index) => { 
  if (user.atelierType !== "") {
 if  (dataTypes.indexOf(user.atelierType) == -1  ){
dataTypes.push(user.atelierType)
data.push([user.atelierType, 1])
console.log();
  }else {
    for (var i=0 ; i < data.length ; i++) {
if (data[i][0]  ===  user.atelierType) {
  data[i][1]  =  data[i][1]  + 1
}
    }
  
    
  }
}

})



this.setState({
   userPres :  [["User", sampleUser], ["Prestataire", prestataire]],
   data : data
})

})




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
      userAtelierName: user.atelierName,
      userUrl: user.url,
      userIsActivated:user.isActivated,
      signUpDate: user.signUpDate ,
    }));
  };

  render() {
    return (
      <div>
        <h3>User/Prestataire</h3>
         <PieChart data={this.state.userPres} />
         <h3>Histogramme des types des ateliers des Prestataires </h3>
          <ColumnChart data={this.state.data} />
        <h3>Table des utilisateurs</h3>
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
