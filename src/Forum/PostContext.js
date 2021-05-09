import React, { Component } from "react";
import { rowData } from "./postData";

const ProductContext = React.createContext();

class PostProvider extends Component {
  state = {
    Alldata: rowData,
    id: "",
    image: "",
    commentaire: "",

    updateEdit: [],
  };

  getRecord = (id) => {
    const product = this.state.Alldata.find((item) => item.id === id);
    return product;
  };

  onEdit = (id) => {
    const tempProduct = this.state.Alldata;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectedRecordt = tempProduct[index];
    this.setState({
      id: selectedRecordt["id"],
      image: selectedRecordt["image"],
      commentaire: selectedRecordt["commentaire"],
     
    });
  };
  onDelete=(id)=>{
    const tempProduct=this.state.Alldata.filter(item=> item.id != id);
    this.setState({
      Alldata: tempProduct 
    })
      }
  updateValue = (e, test) => {
    if (test === "image") {
      this.state.image = e.target.value;
    }

    if (test === "commentaire") {
      this.state.commentaire = e.target.value;
    }


    const tempArr = [
      this.state.image,
      this.state.commentaire,
    ];
    this.setState({
      updateEdit: tempArr,
    });
  };

  onSave = (id) => {
    if (id !== '') {
      const SavedRecord = this.state.Alldata;
      const index = SavedRecord.indexOf(this.getRecord(id));
      const Record = SavedRecord[index];
      Record['image']=this.state.updateEdit[0],
      Record['commentaire']=this.state.updateEdit[1],

      this.setState({
          Alldata:[...this.state.Alldata],
          id:"", image:"",commentaire:""
      })
    } else {
        const MaxId=Math.max(...this.state.Alldata.map(item=>item.id));
        const id=MaxId+1;
        const newArr =[];
        newArr['image']=this.state.updateEdit[0];
        newArr['commentaire']=this.state.updateEdit[1];
        this.setState({
            Alldata:[...this.state.Alldata,newArr],
            id:"", image:"",commentaire:""
        })

    }
  };

  render() {
    //console.log(this.state.Alldata);
    return (
      <div>
        <ProductContext.Provider
         value={{ ...this.state,
          onEdit: this.onEdit,
          updateValue:this.updateValue,
          onSave: this.onSave,
          onDelete:this.onDelete}}>
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { PostProvider, ProductConsumer };
