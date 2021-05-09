import React, { Component } from "react";
import { rowData } from "./appData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Alldata: rowData,
    id: "",
    image: "",
    post: "",
    user: "",
    comment: "",
    lastmsg: "",
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
      post: selectedRecordt["post"],
      user: selectedRecordt["user"],
      comment: selectedRecordt["comment"],
      lastmsg: selectedRecordt["lastmsg"],
     
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
    if (test === "post") {
      this.state.post = e.target.value;
    }

    if (test === "user") {
      this.state.user = e.target.value;
    }

    if (test === "comment") {
      this.state.comment = e.target.value;
    }

    if (test === "lastmsg") {
      this.state.lastmsg = e.target.value;
    }


    const tempArr = [
      this.state.image,
      this.state.post,
      this.state.user,
      this.state.comment,
      this.state.lastmsg
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
      Record['post']=this.state.updateEdit[1],
      Record['user']=this.state.updateEdit[2],
      Record['comment']=this.state.updateEdit[3],
      Record['lastmsg']=this.state.updateEdit[4],

      this.setState({
          Alldata:[...this.state.Alldata],
          id:"", image:"",post:"", user:"",comment:"", lastmsg:""
      })
    } else {
        const MaxId=Math.max(...this.state.Alldata.map(item=>item.id));
        const id=MaxId+1;
        const newArr =[];
        newArr['image']=this.state.updateEdit[0];
        newArr['post']=this.state.updateEdit[1],
        newArr['user']=this.state.updateEdit[2],
        newArr['comment']=this.state.updateEdit[3],
        newArr['lastmsg']=this.state.updateEdit[4],
        this.setState({
            Alldata:[...this.state.Alldata,newArr],
            id:"", image:"",post:"", user:"",comment:"", lastmsg:""
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

export { ProductProvider, ProductConsumer };
