import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


import "whatwg-fetch";
import RESTAPIUrl from "../config/config";
import browserHistory from "../Router/browserHistory";
import {
  getFromStorage,
  setInStorage,
} from '../utils/storage';


export default class AddSujet extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sujet: "",
      description: "",
      logo_id : 4
      // data: [
      //   {id:1, title: "Option 1", image:"https://img.icons8.com/color/70/000000/cottage.png"},
      //   {id:2, title: "Option 2", image:"https://img.icons8.com/color/70/000000/administrator-male.png"},
      //   {id:3, title: "Option 4", image:"https://img.icons8.com/color/70/000000/facebook-like.png"} ,
      //   {id:4, title: "Option 5", image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
      //   {id:5, title: "Option 6", image:"https://img.icons8.com/color/70/000000/traffic-jam.png"} ,
      //   {id:6, title: "Option 7", image:"https://img.icons8.com/dusk/70/000000/visual-game-boy.png"} ,
      //   {id:8, title: "Option 8", image:"https://img.icons8.com/flat_round/70/000000/cow.png"} ,
      //   {id:9, title: "Option 9", image:"https://img.icons8.com/color/70/000000/coworking.png"} ,
      //   {id:10,  title: "Option 10" ,  image:"https://img.icons8.com/clouds/100/000000/groups.png" },
      //   {id:11,  title: "Option 11",   image:"https://img.icons8.com/color/100/000000/real-estate.png"},
      //     {id:12,  title: "Option 12",      image:"https://img.icons8.com/color/100/000000/find-matching-job.png"},
      //     {id:13, title: "Option 13",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png"},
      //     {id:14, title: "Option 14",   image:"https://img.icons8.com/color/100/000000/land-sales.png" },
      //     {id:15, title: "Option 15",   image:"https://img.icons8.com/color/70/000000/traffic-jam.png" },
      //     {id:16, title: "Option 16",   image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
      //     {id:17, title: "Option 17",   image:"https://img.icons8.com/color/70/000000/cottage.png" },
      //     {id:18, title: "Option 18",   image:"https://img.icons8.com/color/70/000000/administrator-male.png" } ,   
      // ]
    
    }
    this.submitModal = this.submitModal.bind(this);
    this.sujetoNChange = this.sujetoNChange.bind(this);
    
    this.descriptionoNChange = this.descriptionoNChange.bind(this);
    this.ownerId = ""

    
    
  }

  sujetoNChange(e) {
    this.setState({ sujet: e.target.value });
  }
  descriptionoNChange(e) {
    this.setState({ description: e.target.value });
  }




   submitModal(e) {
     this.state.logo_id = Math.floor( Math.random() * 17)
    this.state.ownerId = getFromStorage('the_login_n_signup').user._id ;
    fetch(RESTAPIUrl + "/api/add/sujet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);

        this.props.history.push({
          pathname: "/forum",
          state: { message: "Hello" },
        })

      })
  
    
  };

    render() {
       
        return (
            <div>
                 <div className="" >
      <div  className="" >
       {/* <button>retour au forum</button> */}
        <form  className ="sujetform" >
       
       <div className="row">
         <div className="col-25">
           <label className="labelsujet" for="titresujet">Titre Sujet</label>
         </div>
         <div className="col-75">
           <input className="inputsujet"
             type="text"
             id="titresujet"
             name="titresujet"
             placeholder="Titre de votre sujet.."
             onChange = {this.sujetoNChange}
           />
         </div>
       </div>

       <div className="row">
         <div className="col-25">
           <label className="labelsujet" for="subject">Description du Sujet</label>
         </div>
         <div className="col-75">
           <textarea onChange = {this.descriptionoNChange}
           className="textareasujet"
             id="subject"
             name="subject"
             placeholder="Ecrire la descrption de votre sujet .."
             style={{ height: "200px" }}
             
           ></textarea>
         </div>
         </div>
         {/* ajouter image */}

         {/* <div className="row">
           <div className="col-25">
             <label className="labelsujet" for="myfile">Votre logo</label>
           </div>
           <div className="col-75">
             <input 
             className="addfileinput inputsujet"
             style={{marginRight:"0px",display: "inline"
            }}  
             type="file"
               id="myfile"
               name="myfile"
               
             />
           </div>
         </div> */}
       <Button onClick = {this.submitModal} >Submit</Button>
       {/* <div className="row">
         <input className="inputsujet" type="submit" value="Submit" />
       </div> */}
     </form>
     </div>
     </div>
    
            </div>
        )
    }
}
