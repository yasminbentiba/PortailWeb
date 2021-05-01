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

import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import TimeToLeaveOutlinedIcon from "@material-ui/icons/TimeToLeaveOutlined";
import { BorderColor } from "@material-ui/icons";
class Annuaire extends Component {
  state = {
    modalElectrique: false,
    modalMecanique: false,
    modalTolerie: false,
    ModalConcessionnaire: false,
    modalPieceCarroserie: false,
    modalPieceDetachee: false,
    modalServiceRapide: false,
    modalTeinture: false,
  };

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

  render() {
    return (
      <form>
        <div className="">
          <div>
            <div className="container">
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
            </div>
            <div className="App">
              {/* ----------------1------------- */}
              <div style={{ backgroundColor: "#ffff" }} className="part first">
                <h4 onClick={this.selectModalElectrique} className="part-title">
                  Atelier Electrique
                </h4>

                <div style={{ paddingRight: "20%" }}>
                  <Image
                    style={{
                      position: "inherit",
                      width: "180px",
                      height: "120px",
                      marginRight: "5%",
                    }}
                    src={" https://t4.ftcdn.net/jpg/03/14/51/95/360_F_314519510_SWg8GKkxYxSDPe1NqDfmLcGApIYEnQp5.jpg"}
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
                <h4 onClick={this.selectModalMecanique} className="part-title">
                  Atelier Mécanique
                </h4>
                <div style={{ paddingRight: "20%" }}>
                  <Image
                    style={{
                      position: "inherit",
                      width: "180px",
                      height: "120px",
                      marginRight: "5%",
                    }}
                    src={" https://media.istockphoto.com/photos/auto-service-picture-id1207276665?k=6&m=1207276665&s=612x612&w=0&h=mdSY0DsqD_eaje2YJ6gZnCSyG79uGSXVWVs_f4RPEAc="}
                  />
                </div>
                <br />
                <hr className="line" />
                <p className="part-desc">Descpription Atelier Mécanique</p>
              </div>
              <ModalElectrique
                closeTimeoutMS={2000}
                displayModal={this.state.modalMecanique}
                closeModal={this.selectModalMecanique}
              />
              {/* ----------------3------------- */}
              <div style={{ backgroundColor: "#ffff" }} className="part ">
                <h4 onClick={this.selectModalTolerie} className="part-title">
                  Atelier Tolerie
                </h4>
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
                onClick={this.selectModalConcessionnaire}
                className="part-title"
              >
                Concessionnaire
              </h4>

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
              <p className="part-desc">Descpription Concessionnaire</p>
            </div>

            <ModalConcessionnaire
              closeTimeoutMS={2000}
              displayModal={this.state.ModalConcessionnaire}
              closeModal={this.selectModalConcessionnaire}
            />

            {/* ----------------5------------- */}
            <div style={{ backgroundColor: "#ffff" }} className="part ">
              <h4
                onClick={this.selectModalPieceCarroserie}
                className="part-title"
              >
                Piece Carroserie
              </h4>

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
                onClick={this.selectModalPieceDetachee}
                className="part-title"
              >
                Atelier Pièces Detachées
              </h4>
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
                onClick={this.selectModalServiceRapide}
                className="part-title"
              >
                Atelier Service Rapide
              </h4>

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
              <h4 onClick={this.selectModalTeinture} className="part-title">
                Atelier teinture
              </h4>
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