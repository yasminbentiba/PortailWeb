import React, { Component } from "react";
import Avatar from 'react-avatar';

import "./post.scss";
import {
  FormGroup,
  FormControl,
  HelpBlock,
  Button,
  Alert,
  Col,
} from "react-bootstrap";

import "whatwg-fetch";
import RESTAPIUrl from "../config/config";
import browserHistory from "../Router/browserHistory";

import { PostProvider, ProductConsumer } from "./PostContext";
import { Table } from "react-bootstrap";

import {
  getFromStorage,
  setInStorage,
} from '../utils/storage';


class Forum extends Component {
  constructor() {
    super();
    const queryParams = new URLSearchParams(window.location.search);
    this.state = {
      sujetId: queryParams.get('sujetId'),
      currentRoom: {
        created_at: "2021-05-14T17:27:43.646Z",
        messages: [],
        name: "ss",
        ownerId: "609744cfed1d5c0d44b95db2",
        topic: "ss",
        updated_at: "2021-05-12T22:47:38.143Z",
        users: [],
        _id: "609c5b0a0af302687cc08b9d",
      },
      allmessages: [],
      message_body: "",
      test: [],
      owner: { name: "", email: "" },
      nr_message : 0,
      nr_likes : 0,
      alreadyliked : false ,
      ownerlogo: "https://bootdey.com/img/Content/avatar/avatar7.png",
      userData: [
        {id:1,  name: "Mark Doe",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:2,  name: "Clark Man",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "Jaden Boor",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "Srick Tree",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5,  name: "Erick Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6,  name: "Francis Doe", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8,  name: "Matilde Doe", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9,  name: "John Doe",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:10, name: "Fermod Doe",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
        {id:11, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
        {id:12, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/user_8.jpg"},
        {id:13, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/user_7.jpg"},
        {id:14, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/user_6.jpg"},
        {id:15, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/user_5.jpg"},
        {id:16, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/user_4.jpg"},
        {id:17, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/user_3.jpg"},
        {id:18, name: "Danny Doe",   status:"active", image:"hhttps://bootdey.com/img/Content/user_2.jpg"},
        {id:0, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/user_1.jpg"},
      ]
    }
    this.messageOnChange = this.messageOnChange.bind(this);
    // /api/getRoom'
  }

  messageOnChange(e) {
    this.setState({ message_body: e.target.value });
  }

  likeClicked () {
    this.setState({
      alreadyliked : true,
      nr_likes:  this.state.nr_likes + 1
    })

    fetch(RESTAPIUrl + "/api/add/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ room_id: this.state.currentRoom._id,  user_id:  getFromStorage('the_login_n_signup').user._id }),
    })
      .then((res) => res.json())
      .then((json) => {

      })
  }


  addComment() {
    fetch(RESTAPIUrl + "/api/add/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ room: this.state.currentRoom._id, userId: getFromStorage('the_login_n_signup').user._id, message_body: this.state.message_body }),
    })
      .then((res) => res.json())
      .then((json) => {

        let current_datetime = new Date()
        let formatted_date =  "" +  current_datetime.getFullYear() + "-" +  current_datetime.getMonth()  +"-" +  current_datetime.getDate() 

        this.setState({
          allmessages : this.state.allmessages.concat({  name: getFromStorage('the_login_n_signup').firstName, message_id : json.message._id , message : this.state.message_body , created_at : formatted_date , userId : getFromStorage('the_login_n_signup').user._id , userlogo : getFromStorage('the_login_n_signup').user.logo_id }),
          message_body : "" ,
          nr_message : this.state.nr_message + 1
        });
      })
  }

  deleteSujet(e) {
    fetch(RESTAPIUrl + "/api/delete/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ comment_id: e , room_id : this.state.currentRoom._id}),
    })
      .then((res) => res.json())
      .then((json) => {
      })


  var newAllMessage = this.state.allmessages 
    for (var i=0 ; i < newAllMessage.length ; i++)
  {
   
    console.log("totest" + e);
      if (newAllMessage[i].message_id === (e+"")) {
        newAllMessage.splice(i, 1)
   console.log("success");
        this.setState({
          allmessages :   newAllMessage
        })
      }else{
        console.log("notsuccess");
      }
  }
}

  recursive() {
    console.log(this.state.currentRoom.messages)
    this.state.currentRoom.messages.map((element, index) => {

      fetch(RESTAPIUrl + "/api/getmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ messageId: element }),
      })
        .then((res) => res.json())
        .then((json) => {
          var currentMessage = json.message
          fetch(RESTAPIUrl + "/api/getUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: json.message.user }),
          })
            .then((res) => res.json())
            .then((json) => {
           
              this.setState({
                allmessages : this.state.allmessages.concat({ name: json.user.name, message_id : currentMessage._id ,  message : currentMessage.message_body ,created_at : currentMessage.created_at , userId :  currentMessage.user , userlogo : json.user.logo_id })
              });
            })
        })
      })

      // owner 
      fetch(RESTAPIUrl + "/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ userId: this.state.currentRoom.ownerId }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("json", json.user);
console.log("looooogo" + this.state.userData[json.user.logo_id].image );
          this.setState({
            owner: { name: json.user.name, email: json.user.email },
            ownerlogo :   (json.user.logo_id !== undefined ? this.state.userData[json.user.logo_id].image : this.state.ownerlogo )
          });
      
        })
    }

  componentDidMount() {
      fetch(RESTAPIUrl + "/api/getRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ roomId: this.state.sujetId }),
    })
      .then((res) => res.json())
      .then((json) => {
console.log(getFromStorage('the_login_n_signup').user._id + json.room.likes );
if (json.room.likes.indexOf(getFromStorage('the_login_n_signup').user._id ) == -1) {
  this.setState({
    alreadyliked : false
  })

}else {
  this.setState({
    alreadyliked : true
  })
}
        this.setState({
          currentRoom: json.room,
          nr_message :  json.room.messages.length,
          nr_likes :  json.room.likes.length
        });

        this.recursive()

      })
  }
  // room

  render() {
    return (
      <div className="">
        <div className="">
          <div class="container bootstrap snippets bootdey" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div class="col-sm-8">
              <div class="panel panel-white post panel-shadow">
                <div class="post-heading">
                  {/* <div class="pull-left image" style={{width:30,
    height:30, alignItems: 'center',
    justifyContent: 'center'}}>
                    <img style={{width:30,
    height:30, alignItems: 'center',
    justifyContent: 'center'}} src="https://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image" />
                  </div> */}
                  {/* <div class="pull-left meta"> */}
                    {/* <div class="title h5"> */}
                    <br />
                    <img style={{width:30,
    height:30}} src= { this.state.ownerlogo} class="img-circle avatar" alt="user profile image" /> <a href="#"><b>{this.state.owner.name}</b></a>  
                    <br />
                     <a href="#">{this.state.owner.email}</a>  
                    <br />
                    {/* made a post. */}
                    {/* </div> */}
                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(this.state.currentRoom.updated_At)}   
                  {/* </div> */}
                </div>
                    <h3> {this.state.currentRoom.name}</h3>
                <div class="post-description">
                  <p>{this.state.currentRoom.topic}</p>
                  <div class="stats" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {this.state.nr_message} 💬 / {this.state.nr_likes}  👍
                    {/* <a href="#" class="btn btn-default stat-item">
                      <i class="fa fa-thumbs-up icon"></i>2
                    </a> */}
                    {/* <a href="#" class="btn btn-default stat-item">
                      <i class="fa fa-share icon"></i>12  */}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg> */}
                    {/* </a> */}

                   { !this.state.alreadyliked  ?  <button  onClick={() => {
                        console.log("heeeere");
                        this.likeClicked()

                   }}
                        style = {{backgroundColor : 'white'}} >👍</button> : ""  }
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ProductConsumer>
            {(value) => {
              return ( */}
          <form>
            <Table
              className="TableForum"
              size="sm"
              variant="dark"
              stripted
              bordered
              hover
            >
              <tbody className="TableForum">
                <tr className="TrForum">
                  {/* <th> </th> */}
                  <th>Commentaire </th>
                  <th>{""} </th>
                </tr>

                <tr className="TrForum">
                  {/* <td> { } </td> */}
                  <td>
                    <textarea
                      style={{
                        left: '50%', top: '50%', width: '100%',
                      }}
                      type="text"
                      value={this.state.message_body}
                      onChange={this.messageOnChange}
                    ></textarea>
                  </td >
                  <td >
                    {" "}
                    <Button
  
                      onClick={() => {
                        console.log("heeeere");
                        this.addComment()
// this.recursive()
                        // window.location.reload(false);
                        // value.onSave(value.id);
                      }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                      {" "}
                      {/* {value.id ? "save" : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>} */}
                    </Button>
                  </td>
                </tr>
                {this.state.allmessages.map((message , index) => {
                  return (
                    <tr>
                      {/* <td> <div className="profile-header-img"> <Avatar name="he" /> </div></td> */}

                      {/* <td>  */}

                      {/* </td>  */}
                      <td> {message.message}

                        <div class="post-heading">
                          <div class="pull-left image">
                            <img src={this.state.userData[message.userlogo].image} class="img-circle avatar" alt="user profile image" style={{ width: 20, height: 20 }} />
                          </div>
                          <div class="pull-left meta">
                            {/* <div class="title h5"> */}
                            <br />
                            <a href="#">{"   Posted by :"}  <b>{message.name}</b> {"    created at :"} <b> {message.created_at === undefined ? ""  : message.created_at.substring(0, 10) } </b></a>
                            {/* made a post. */}
                            {/* </div> */}
                            {/* <h6 class="text-muted time">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(this.state.currentRoom.updated_At)}</h6> */}
                          </div>
                        </div>

                      </td>
                      <td >
                        {/* <Button
                          size="sm"
                          variant="primary"
                        onClick={() => value.onEdit(product.id)}
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </Button>{" "}
                              |{" "} */}

                           {!(message.userId == getFromStorage('the_login_n_signup').user._id ) ?  " " :  
                           <Button
                          size="sm"
                          variant="danger"
                          // onClick={() => value.onDelete(product.id)}
                          onClick={() => { this.deleteSujet(message.message_id)  }}
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </Button> 
                         }    
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </form>

        </div>
      </div>
    );
  }
}

export default Forum;
