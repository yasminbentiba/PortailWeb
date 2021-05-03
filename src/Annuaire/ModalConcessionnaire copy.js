import React ,{Component} from "react";
import { Image } from "react-bootstrap";
import RESTAPIUrl from "../config/config";

/* 
fetch(RESTAPIUrl + "/api/ateliertype", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({"atelierType":"atelierServiceRapide"}),
})
  .then((res) => res.json())
  .then((json) => {
    console.log("json", json);
  }) */
 

const divStyle = {
display: props.displayModal ? "block" : "none",
};
function closeModal(e) {
e.stopPropagation();
props.closeModal();
}

export default class ModalConcessionnaire extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="closeatelier" onClick={closeModal}>
          <span className="x">&times;</span>
        </span>

        <div style={{ display: "flex" ,
    alignSelf: "center",
    }}>



        <a  className="typeatelierlink" href="/atelier">
            <Image
              src={
                "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
              }
              alt="Logo"
              style={{ height: "100px", margin: "10px auto", width: "145px" ,marginLeft: "20px" }}
            />
            <h6 style={{ fontSize: "14px", textAlign: "right"}}> Nom Atelier electrique</h6>
          </a>

        
        </div>
      </div>
    </div>
    );
  }
}