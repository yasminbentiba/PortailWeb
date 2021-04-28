import React from "react";
const Modal = (props) => {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div  className="modal-contentforum" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          <span className="x">&times;</span>
        </span>
        
        <form  className ="sujetform" /* onSubmit={this.handleSubmit} */>
       

       <div  className="row">
         <div className="col-25">
           <label className="labeltittresujet" for="titresujet">Titre Sujet</label>
         </div>
         <div  className="col-75">
           <input className="inputsujet"
             type="text"
             id="titresujet"
             name="titresujet"
             /* value={this.state.titre}
             onChange={this.handleChangeTitre} */
             placeholder="Titre de votre sujet.."
             required
           />
         </div>
       </div>

       <div  className="row">
         <div  className="col-25">
           <label  className="labelforum" for="subject">Description du Sujet</label>
         </div>
         <div  className="col-75">
           <textarea
           className="textareamodalsujet"
             id="subject"
             name="subject"/* 
             value={this.state.description}
             onChange={this.handleChangeDescription} */
             placeholder="Ecrire la descrption de votre sujet .."
             style={{ height: "200px" }}
             required
           ></textarea>
         </div>
         </div>
         {/* ajouter image */}

         <div className="row">
           <div className="col-25">
             <label  className="labelforum" for="myfile">Votre logo</label>
           </div>
           <div  className="col-75 ">
             <input 
             className="addfilesujetinput"
               type="file"
              /* 
               value={this.state.image}
               onChange={this.handleChangeImage} */
               required
               
             />
           </div>
         </div>
       
       <div className="row">
         <input className="btnsubmitsujet" type="submit" value="Submit" />
       </div>
     </form>
     </div>
     </div>
    
  );
};
export default Modal;
