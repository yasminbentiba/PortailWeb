import React, { Component } from "react";
import "./modal.scss";
import ModalElectrique from "./ModalElectrique";
import ModalMecanique from "./ModalMecanique";
import ModalTolerie from "./ModalTolerie";
import modalServiceRapide from "./ModalServiceRapide";
import modalTeinture from "./ModalTeinture";
import modalPieceDetachee from "./ModalPieceDetachee";
import ModalConcessionnaire from "./ModalConcessionnaire";
import modalPieceCarroserie from "./ModalPieceCarroserie";
import { Image } from "react-bootstrap";
import { Button } from "@material-ui/core";

import RESTAPIUrl from "../config/config";
import CustomModal from "./customModal";

import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import TimeToLeaveOutlinedIcon from "@material-ui/icons/TimeToLeaveOutlined";
import { BorderColor } from "@material-ui/icons";


/* geolocation */
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
/* geolocation */
class Annuaire extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      modalElectrique: false,
      modalMecanique: false,
      modalTolerie: false,
      ModalConcessionnaire: false,
      modalPieceCarroserie: false,
      modalPieceDetachee: false,
      modalServiceRapide: false,
      modalTeinture: false,
      showM: false,
      atelierTypeForModal: "",
    };

    /* -------------------------------------- */
    this.showCustomModal = this.showCustomModal.bind(this);
    this.hideCustomModal = this.hideCustomModal.bind(this);
    /* ---------------------------------- */
  }

  selectModalElectrique = (info) => {
    this.setState({ modalElectrique: !this.state.modalElectrique }); // true/false toggle
  };
  selectModalMecanique = (info) => {
    this.setState({ modalMecanique: !this.state.modalMecanique }); // true/false toggle
  };
  selectModalTolerie = (info) => {
    this.setState({ modalTolerie: !this.state.modalTolerie }); // true/false toggle
  };
  selectModalConcessionnaire = (info) => {
    this.setState({ ModalConcessionnaire: !this.state.ModalConcessionnaire }); // true/false toggle
  };
  selectModalPieceCarroserie = (info) => {
    this.setState({ modalPieceCarroserie: !this.state.modalPieceCarroserie }); // true/false toggle
  };
  selectModalPieceDetachee = (info) => {
    this.setState({ modalPieceDetachee: !this.state.modalPieceDetachee }); // true/false toggle
  };
  selectModalServiceRapide = (info) => {
    this.setState({ modalServiceRapide: !this.state.modalServiceRapide }); // true/false toggle
  };
  selectModalTeinture = (info) => {
    this.setState({ modalTeinture: !this.state.modalTeinture }); // true/false toggle
  };

  showCustomModal = (e) => {
    fetch(RESTAPIUrl + "/api/ateliertype", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ atelierType: this.state.atelierTypeForModal }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.state.users = json["users"];
        this.setState({ showM: true });
        console.log("json", json);
      });
  };

  hideCustomModal = () => {
    this.setState({ showM: false });
  };

  /* geolocation */
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }
  /* geolocation */

  render() {
    return (
      <form>
        <div className="">
          <div>
           {/*  <div className="container">
              <div>
                <select
                  style={{
                    marginLeft: "10px",
                    borderRadius: "10px",
                    borderColor: "#0000",
                  }}
                >
                  <option selected="">Tout</option>
                  <option value="1">Par Auteur</option>
                </select>
                <span>
                  <input
                    style={{
                      marginLeft: "10px",
                      borderRadius: "10px",
                      borderColor: "#0000",
                    }}
                    type="text"
                    className=" "
                    placeholder="Rechercher annuaire"
                  />
                </span>
              </div>
            </div> */}
            <div className="App">
              {/*---------------------------- button test --------------------- */}
              {/* <button
                type="button"
                // onClick={() => this.setState({atelierTypeForModal:"atelierTolerie"})  }
                // onClick={this.showCustomModal }

                onClick={() => {
                  this.setState(
                    this.setState({ atelierTypeForModal: "atelierTolerie" }),
                    this.showCustomModal
                  );
                }}
              ></button> */}
              <CustomModal
                show={this.state.showM}
                handleClose={this.hideCustomModal}
                users={this.state.users}
              ></CustomModal>

              {/* ----------------1------------- */}
              <div style={{ backgroundColor: "#ffff" }} className="part first">
                <h4 /* onClick={this.selectModalElectrique} */
                  onClick={() => {
                    this.setState(
                      this.setState({
                        atelierTypeForModal: "atelierElectrique",
                      }),
                      this.showCustomModal
                    );
                  }}
                  className="part-title"
                >
                  Atelier Electrique
                </h4>
                <CustomModal
                  show={this.state.showM}
                  handleClose={this.hideCustomModal}
                  users={this.state.users}
                ></CustomModal>

                <div style={{ paddingRight: "20%" }}>
                  <Image
                    style={{
                      position: "inherit",
                      width: "180px",
                      height: "120px",
                      marginRight: "5%",
                    }}
                    src={
                      " https://t4.ftcdn.net/jpg/03/14/51/95/360_F_314519510_SWg8GKkxYxSDPe1NqDfmLcGApIYEnQp5.jpg"
                    }
                  />
                </div>
                <br />
                <hr className="line" />
                <p className="part-desc">Descpription Atelier Electrique</p>
              </div>
              <ModalElectrique
                closeTimeoutMS={2000}
                displayModal={this.state.modalElectrique}
                closeModal={this.selectModalElectrique}
              />
              {/* ----------------2------------- */}
              <div style={{ backgroundColor: "#ffff" }} className="part first">
                <h4 /* onClick={this.selectModalMecanique} */
                  onClick={() => {
                    this.setState(
                      this.setState({
                        atelierTypeForModal: "atelierMecanique",
                      }),
                      this.showCustomModal
                    );
                  }}
                  className="part-title"
                >
                  Atelier Mécanique
                </h4>
                <CustomModal
                  show={this.state.showM}
                  handleClose={this.hideCustomModal}
                  users={this.state.users}
                ></CustomModal>

                <div style={{ paddingRight: "20%" }}>
                  <Image
                    style={{
                      position: "inherit",
                      width: "180px",
                      height: "120px",
                      marginRight: "5%",
                    }}
                    src={
                      " https://media.istockphoto.com/photos/auto-service-picture-id1207276665?k=6&m=1207276665&s=612x612&w=0&h=mdSY0DsqD_eaje2YJ6gZnCSyG79uGSXVWVs_f4RPEAc="
                    }
                  />
                </div>
                <br />
                <hr className="line" />
                <p className="part-desc"> La réparation mécanique et la carrosserie auto</p>
              </div>
              <ModalElectrique
                closeTimeoutMS={2000}
                displayModal={this.state.modalMecanique}
                closeModal={this.selectModalMecanique}
              />
              {/* ----------------3------------- */}
              <div style={{ backgroundColor: "#ffff" }} className="part ">
                <h4 /* onClick={this.selectModalTolerie} */
                  onClick={() => {
                    this.setState(
                      this.setState({ atelierTypeForModal: "atelierTolerie" }),
                      this.showCustomModal
                    );
                  }}
                  className="part-title"
                >
                  Atelier Tolerie
                </h4>

                <CustomModal
                  show={this.state.showM}
                  handleClose={this.hideCustomModal}
                  users={this.state.users}
                ></CustomModal>

                <div style={{ paddingRight: "20%" }}>
                  <Image
                    style={{
                      position: "inherit",
                      width: "180px",
                      height: "120px",
                      marginRight: "5%",
                    }}
                    src={
                      "https://www.mecatolauto.tn/media/2015/05/82172155-detail-de-la-voiture-l-homme-tient-un-polisseur-dans-la-main-et-polit-la-voiture-mise-au-point-selective.jpg"
                    }
                  />
                </div>
                <br />
                <hr className="line" />
                <p className="part-desc">Atelier Tolerie</p>
              </div>
              <ModalTolerie
                closeTimeoutMS={2000}
                displayModal={this.state.modalTolerie}
                closeModal={this.selectModalTolerie}
              />
            </div>

            {/* ----------------4------------- */}

            <div style={{ backgroundColor: "#ffff" }} className="part first">
              <h4
                onClick={() => {
                  this.setState(
                    this.setState({ atelierTypeForModal: "concessionnaire" }),
                    this.showCustomModal
                  );
                }}
                /* onClick={this.selectModalConcessionnaire} */
                className="part-title"
              >
                Concession automobile
              </h4>

              <CustomModal
                show={this.state.showM}
                handleClose={this.hideCustomModal}
                users={this.state.users}
              ></CustomModal>

              <div style={{ paddingRight: "20%" }}>
                <Image
                  style={{
                    position: "inherit",
                    width: "180px",
                    height: "120px",
                  }}
                  src={
                    "https://media.istockphoto.com/photos/business-man-holding-a-key-of-the-white-car-picture-id506977031?k=6&m=506977031&s=612x612&w=0&h=U9c6tKBfrtTnEIuvYXTQmeDo_G9pGAXHApSJtqzcYcs="
                  }
                />
              </div>
              <br />
              <hr className="line" />
              <p className="part-desc">Descpription Concession automobile</p>
            </div>

            <ModalConcessionnaire
              closeTimeoutMS={2000}
              displayModal={this.state.ModalConcessionnaire}
              closeModal={this.selectModalConcessionnaire}
            />

            {/* ----------------5------------- */}
            <div style={{ backgroundColor: "#ffff" }} className="part ">
              <h4
                onClick={() => {
                  this.setState(
                    this.setState({ atelierTypeForModal: "pieceCarroserie" }),
                    this.showCustomModal
                  );
                }}
                /*                 onClick={this.selectModalPieceCarroserie}
                 */ className="part-title"
              >
                Atelier Pièces Carroseries
              </h4>

              <CustomModal
                show={this.state.showM}
                handleClose={this.hideCustomModal}
                users={this.state.users}
              ></CustomModal>

              <div style={{ paddingRight: "20%" }}>
                <Image
                  style={{
                    position: "inherit",
                    width: "180px",
                    height: "120px",
                  }}
                  src={
                    "https://www.pieceauto-discount.com/image/catalog/categories/md-carrosserie.png"
                  }
                />
              </div>
              <br />
              <hr className="line" />
              <p className="part-desc">Description Atelier carroserie </p>
            </div>
            <ModalElectrique
              closeTimeoutMS={2000}
              displayModal={this.state.modalPieceCarroserie}
              closeModal={this.selectModalPieceCarroserie}
            />
            {/* ----------------6------------- */}
            <div style={{ backgroundColor: "#ffff" }} className="part ">
              <h4
                onClick={() => {
                  this.setState(
                    this.setState({ atelierTypeForModal: "pieceDetachee" }),
                    this.showCustomModal
                  );
                }}
                /*                 onClick={this.selectModalPieceDetachee}
                 */ className="part-title"
              >
                Atelier Pièces Detachées
              </h4>

              <CustomModal
                show={this.state.showM}
                handleClose={this.hideCustomModal}
                users={this.state.users}
              ></CustomModal>

              <div>
                <Image
                  style={{
                    position: "inherit",
                    width: "180px",
                    height: "120px",
                  }}
                  src={
                    "https://www.ecoleauto.com/wp-content/uploads/2017/08/image001-7.jpg"
                  }
                />
              </div>

              <hr className="line" />
              <p className="part-desc">Description Atelier Pièce Detachee</p>
            </div>
            <ModalElectrique
              closeTimeoutMS={2000}
              displayModal={this.state.modalPieceDetachee}
              closeModal={this.selectModalPieceDetachee}
            />
            {/* ----------------7------------- */}
            <div style={{ backgroundColor: "#ffff" }} className="part ">
              <h4
                onClick={() => {
                  this.setState(
                    this.setState({
                      atelierTypeForModal: "atelierServiceRapide",
                    }),
                    this.showCustomModal
                  );
                }}
                /* onClick={this.selectModalServiceRapide} */
                className="part-title"
              >
                Atelier Service Rapide
              </h4>

              <CustomModal
                show={this.state.showM}
                handleClose={this.hideCustomModal}
                users={this.state.users}
              ></CustomModal>

              <div>
                <Image
                  style={{
                    position: "inherit",
                    width: "180px",
                    height: "120px",
                  }}
                  src={
                    "https://image.freepik.com/free-vector/car-service-center-accessories-composition_98292-7431.jpg"
                  }
                />
              </div>
              <hr className="line" />
              <p className="part-desc">Description Atelier Service Rapide</p>
            </div>
            <ModalElectrique
              closeTimeoutMS={2000}
              displayModal={this.state.modalServiceRapide}
              closeModal={this.selectModalServiceRapide}
            />
            {/* ----------------8------------- */}
            <div style={{ backgroundColor: "#ffff" }} className="part ">
              <h4 /* onClick={this.selectModalTeinture} */
                onClick={() => {
                  this.setState(
                    this.setState({ atelierTypeForModal: "atelierTeinture" }),
                    this.showCustomModal
                  );
                }}
                className="part-title"
              >
                Atelier teinture
              </h4>

              <CustomModal
                show={this.state.showM}
                handleClose={this.hideCustomModal}
                users={this.state.users}
              ></CustomModal>

              <div>
                <Image
                  style={{
                    position: "inherit",
                    width: "170px",
                    height: "120px",
                  }}
                  src={
                    "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.6435-9/36385964_225894724689238_8079800920864456704_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=2WktF51xLcQAX-jUCh6&_nc_ht=scontent.ftun2-1.fna&oh=4182439f5cd9b870224595858c312c30&oe=60B0B5CC"
                  }
                />
              </div>
              <br />
              <hr className="line" />
              <p className="part-desc">Description Atelier teinture</p>
            </div>
            <ModalElectrique
              closeTimeoutMS={2000}
              displayModal={this.state.modalTeinture}
              closeModal={this.selectModalTeinture}
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Annuaire;
