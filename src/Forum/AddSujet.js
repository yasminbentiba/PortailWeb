import React, { Component } from 'react'

export default class AddSujet extends Component {
    render() {
        return (
            <div>
                 <div className="" >
      <div  className="" >
       <button>retour au forum</button>
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
             required
           />
         </div>
       </div>

       <div className="row">
         <div className="col-25">
           <label className="labelsujet" for="subject">Description du Sujet</label>
         </div>
         <div className="col-75">
           <textarea
           className="textareasujet"
             id="subject"
             name="subject"
             placeholder="Ecrire la descrption de votre sujet .."
             style={{ height: "200px" }}
             required
           ></textarea>
         </div>
         </div>
         {/* ajouter image */}

         <div className="row">
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
               required
             />
           </div>
         </div>
       
       <div className="row">
         <input className="inputsujet" type="submit" value="Submit" />
       </div>
     </form>
     </div>
     </div>
    
            </div>
        )
    }
}
