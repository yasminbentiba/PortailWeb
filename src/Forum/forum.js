import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "./forum.scss";
import { Button } from "react-bootstrap";
import Avatar from 'react-avatar';
import "whatwg-fetch";
import RESTAPIUrl from "../config/config";
import browserHistory from "../Router/browserHistory";

import { ProductProvider, ProductConsumer } from "./Context";
import { Table } from "react-bootstrap";
import { POST } from "../Router/routes";
var sujets  = {post:"" , user :"", comment:"" , lastmessage :""}

import {
  getFromStorage,
  setInStorage,
} from '../utils/storage';


class Forum extends Component {

  recursive ()  {

    this.state.sujets.map((element , index) => {
      console.log("element" + element.messages[index]);
      fetch(RESTAPIUrl + "/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      
        body: JSON.stringify({userId : element.ownerId}),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("jsone", json.user.firstName);
          var newsujets = this.state.sujets
          newsujets[index]["owner"] = json.user.firstName
         
          // -----------

          fetch(RESTAPIUrl + "/api/getmessage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
      
            body: JSON.stringify({ messageId: element.messages[element.messages.length - 1] }),
          })
            .then((res) => res.json())
            .then((json) => {
              
            if (json.success == true ){
              var newsujetsForMESSAGE = newsujets
            newsujetsForMESSAGE[index].last_message = json.message.message_body
            }
            
            this.setState({
              sujets: newsujets,
              filteredSujets : newsujets
            });
          })



          // ---------
          
          // this.setState({
          //   sujets: newsujets,
          // });
      // this.setState({
      //   sujets: [{post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a" , user :"user1", comment:"comment1" , messages : ["lastmessagge1" ]},{post:"post2" , user :"user2", comment:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem " , messages : ["lastmessage"] }]
      // });
          
        })
 
       
      


    });

   

   

    
  
  
  }

  constructor() {
    super();
  
    this.state = {
      modal: false ,
      sujets : [], 
      filteredSujets : [],
      data: [
        {id:1, title: "Option 1", image:"https://img.icons8.com/color/70/000000/cottage.png"},
        {id:2, title: "Option 2", image:"https://img.icons8.com/color/70/000000/administrator-male.png"},
        {id:3, title: "Option 4", image:"https://img.icons8.com/color/70/000000/facebook-like.png"} ,
        {id:4, title: "Option 5", image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
        {id:5, title: "Option 6", image:"https://img.icons8.com/color/70/000000/traffic-jam.png"} ,
        {id:6, title: "Option 7", image:"https://img.icons8.com/dusk/70/000000/visual-game-boy.png"} ,
        {id:8, title: "Option 8", image:"https://img.icons8.com/flat_round/70/000000/cow.png"} ,
        {id:9, title: "Option 9", image:"https://img.icons8.com/color/70/000000/coworking.png"} ,
        {id:10,  title: "Option 10" ,  image:"https://img.icons8.com/clouds/100/000000/groups.png" },
        {id:11,  title: "Option 11",   image:"https://img.icons8.com/color/100/000000/real-estate.png"},
          {id:12,  title: "Option 12",      image:"https://img.icons8.com/color/100/000000/find-matching-job.png"},
          {id:13, title: "Option 13",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png"},
          {id:14, title: "Option 14",   image:"https://img.icons8.com/color/100/000000/land-sales.png" },
          {id:15, title: "Option 15",   image:"https://img.icons8.com/color/70/000000/traffic-jam.png" },
          {id:16, title: "Option 16",   image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
          {id:17, title: "Option 17",   image:"https://img.icons8.com/color/70/000000/cottage.png" },
          {id:0, title: "Option 18",   image:"https://img.icons8.com/color/70/000000/administrator-male.png" } ,   
      ]
    }

    

    
 
  }
  

    componentDidMount(){
      fetch(RESTAPIUrl + "/api/sujets/getAllSujet")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success) {
         
        
            this.setState({
      sujets: json.sujets,
      filteredSujets : json.sujets
    });
    this.recursive()

        } else {
          console.log("error");
        }
      });

      


    }

   searchSujet(e) { 
 
    const newFilteredSujets = this.state.sujets.filter(sujet => {


     var a =  JSON.stringify(sujet).toLowerCase() + "" ; 
    return a.includes(e.target.value.toLowerCase()) 
    
    });
console.log({newFilteredSujets});

    this.setState({ 
      
      
      filteredSujets : newFilteredSujets
    })
    
    
   }
   
    deleteSujet(e) {


      fetch(RESTAPIUrl + "/api/delete/sujet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify({ room_id: e}),
      })
        .then((res) => res.json())
        .then((json) => {
          
        })
    var newSujets = this.state.sujets
      for (var i=0 ; i < newSujets.length ; i++)
    {
      console.log("totest" + e);
        if (newSujets[i]._id === (e+"")) {
          newSujets.splice(i, 1)
     console.log("success");
          this.setState({
            sujets :   newSujets ,
            filteredSujets : newSujets
          })
        }else{
          console.log("notsuccess");
        }
        
    }

   
    
    }


  selectModal = (info) => {
    this.setState({ modal: !this.state.modal }) // true/false toggle
  }
  render() {
  

  
    return (
      <div className="forum">

         

        <div className="forumcontainer">
          <h3>Forum</h3>
<br />
<br /><br /><br />

          <p>Discussion générale sur la voiture
          
          Posez des questions liées à la voiture, partagez vos connaissances, discutez des dernières nouvelles ici. </p>

<hr style={{   backgroundColor: "black" }} />
          <br />
          <a href="/addsujet">
            <button
              style={{  position: 'relative', left: '50%', top: '50%', width: '30%',
              transform: 'translate(-50%, -50%)' }}
              className="btn btn-primary has-icon btn-block"
              type="button"
              data-toggle="modal"
              data-target="#threadModal"
            > 
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-plus mr-2"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg> */}
              {" Ajouter un sujet ➕"}
              </button>

             
          </a>
         Search   :  <input style = {{width: '60%'}} onChange ={(e) => {
                        console.log("heeeere");
                        this.searchSujet(e)
                   }} />
         <button  onClick={() => {
                        // console.log("heeeere");
                        // this.searchSujet()

                   }}
                        style = {{backgroundColor : 'white'}} >🔍</button>
          <br />
          <br />
          <br />
        
              
                <Table
                  className=""
                  size="sm"
                  variant="dark"
                  stripted

                  hover
                >
                  <tbody className="TableForum">
                    <tr className="TrForum">
                      <th> {""}</th>
                      <th>Sujet </th>
                      <th>Auteur</th>
                      <th>Commentaire|Like </th>
                      <th>Dernier Message</th>
                      <th>
                     
                             
                            {""}
                            
                        
                        
                         </th>
                    </tr>

                    {/*  <tr className="TrForum">
                      <td>
                        <input
                          type="text"
                          value={value.image}
                          onChange={(e) => {
                            value.updateValue(e, "image");
                          }}
                        ></input>
                      </td>
                      
                      <td>
                        <input
                          type="text"
                          value={value.post}
                          onChange={(e) => {
                            value.updateValue(e, "post");
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={value.user}
                          onChange={(e) => {
                            value.updateValue(e, "user");
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={value.comment}
                          onChange={(e) => {
                            value.updateValue(e, "comment");
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={value.lastmsg}
                          onChange={(e) => {
                            value.updateValue(e, "lastmsg");
                          }}
                        ></input>
                      </td>
                      <td>
                        {" "}
                        <Button
                          size="sm"
                          onClick={() => {
                            value.onSave(value.id);
                          }}
                        >
                          {" "}
                          {value.id ? (
                            "save"
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-plus-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                          )}
                        </Button>
                      </td>
                    </tr> */}
                    {this.state.filteredSujets.map( (sujet) => {
                      return (
                        <tr onClick= {() => {

                           //   this.props.history.push({
                              //     pathname: "/post",
                              //     state: { message: "Hello" },
                              //   })
                        }} >
                        
                          <td>
                            <div className="profile-header-img" style={{width:30,
    height:30, alignItems: 'center',
    justifyContent: 'center'}}>
                            {/* <img src="https://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image" /> */}
                            {/*   */}
                             { sujet.logo_id !== undefined ?  <img   src= {this.state.data[sujet.logo_id].image }  class="img-circle avatar" alt="user profile image" />   : ""  }
                              {/* <a href="/post"></a> */}
                          
                            </div>


                            {/* <a href="/post">{product.image}</a> */}
                          </td>
                          <td>

                            <a onClick= {() => {

  this.props.history.push({
       pathname: "/post",
       search: '?sujetId=' + sujet._id,
       state: { room: sujet },
     })
}} > {sujet.name} </a>{" "}
                          </td>
                          <td> {sujet.owner}</td>
                          <td> {sujet.messages.length} 💬  /  {sujet.likes.length} 👍 </td>
                          <td> {sujet.last_message} </td>
                          
                          <td>
                            {/*  <Button
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
                             
                            {(sujet.ownerId ==  getFromStorage('the_login_n_signup').user._id ? 
                             <Button  
                             size="sm"
                             variant="danger"
                             onClick={() => this.deleteSujet(sujet._id)}
                             // onClick={() => {
                             //   this.props.history.push({
                             //     pathname: "/post",
                             //     state: { message: "Hello" },
                             //   })
                             // }}
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

                            : "")}
                           


                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              
        
        </div>
      </div>
    );
  }
}

export default  withRouter (Forum);
