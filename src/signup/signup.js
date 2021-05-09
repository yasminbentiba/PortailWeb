import React, { Component } from "react";
import "./signup.scss";
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
class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleChangeUrl = this.handleChangeUrl.bind(this);

    this.handleChangeAtelierName = this.handleChangeAtelierName.bind(this);

    this.handleChangeConfirm = this.handleChangeConfirm.bind(this);

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);

    this.handleChangeLastName = this.handleChangeLastName.bind(this);

    this.handleChangeRadio = this.handleChangeRadio.bind(this);

    this.handleChangeSelect = this.handleChangeSelect.bind(this);

    this.handleDismiss = this.handleDismiss.bind(this);

    this.handleShow = this.handleShow.bind(this);

    this.signUpClicked = this.signUpClicked.bind(this);

    this.displayAlert = this.displayAlert.bind(this);

    this.state = {
      password: "",
      email: "",
      confPass: "",
      firstName: "",
      lastName: "",
      role:"",
      url:"",
      user: true,
      prestataire: false,
      atelierType: "",
      atelierName: "",
      isActivated: Boolean,
      signInLoading: false,
      show: false,
      signupStatus: "success",
      signUpMessage: "You have signed up successfully. Proceed to login.",
    };
  }  

  validateEmail() {
    if (this.state.email.length === 0) return null;
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(this.state.email).toLowerCase())
      ? "success"
      : "error";
  }

  validateUrl() {
    if (this.state.url.length === 0) return null;
    var re = /(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/g;
    return re.test(String(this.state.url).toLowerCase()) ? "success" : "error";
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 8) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  getValidationStateConf() {
    const length = this.state.confPass.length;
    if (length === 0) return null;
    else if (this.state.password === this.state.confPass) return "success";
    else return "error";
  }

  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  handleChangeAtelierName(e) {
    this.setState({ atelierName: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangeUrl(e) {
    this.setState({ url: e.target.value });
  }

  handleChangeConfirm(e) {
    this.setState({ confPass: e.target.value });
  }

  handleChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  handleChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  handleChangeRadio() {
    console.log("handleChangeRadio", this.state.prestataire, this.state.user);
    this.setState({
      user: !this.state.user,
      prestataire: !this.state.prestataire,
    });
  }
  handleChangeSelect(e){
  
    this.setState({ atelierType: e.target.value });
  }
  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  displayAlert() {
    return (
      <Alert
        bsStyle={this.state.signupStatus}
        onDismiss={this.handleDismiss}
        id="alertBox"
      >
        <p>{this.state.signUpMessage}</p>
      </Alert>
    );
  }

  signUpClicked(e) {
    // this.setState({ signInLoading: true });
    var newUser = {
      password: this.state.password,
      firstName: this.state.firstName,
      name: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      role: this.state.user ? "user" : "prestataire",
    };

   
     /*  fetch(RESTAPIUrl + "/api/account/isActivated", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({_}),
      }) */




   if ( newUser.role == "prestataire" ){
    newUser.atelierType =  this.state.atelierType  
    newUser.url = this.state.url 
    newUser.atelierName = this.state.atelierName 

   }

    fetch(RESTAPIUrl + "/api/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        if (json.message === "Signed Up") {
          this.setState({
            signInLoading: false,
            show: true,
            signupStatus: "success",
            signUpMessage: "You have signed up successfully. Proceed to login.",
            firstName: "",
            lastName: "",
            password: "",
            confPass: "",
            email: "",
            url: "",
            user: this.state.user,
            prestataire: this.state.prestataire,
            atelierType: "",
            atelierName: "",

          });
          browserHistory.push("/login");
        } else if (json.message === "Error: Server Error") {
          this.setState({
            signInLoading: false,
            show: true,
            signupStatus: "danger",
            signUpMessage: "Unexpected error. Please try again later.",
            firstName: "",
            lastName: "",
            password: "",
            confPass: "",
            email: "",
            url: "",
            user: true,
            prestataire: false,
            atelierType: "",
            atelierName: "",
          });
        }
      });
  }
  render() {
    return (
      <div>
        <Col xs={12} md={4}>
          <form>
            <FormGroup controlId="signUpFirstName">
              <FormControl
                type="text"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.handleChangeFirstName}
              />
            </FormGroup>

            <FormGroup controlId="signUpLastName">
              <FormControl
                type="text"
                value={this.state.lastName}
                placeholder="Last Name"
                onChange={this.handleChangeLastName}
              />
            </FormGroup>

            <FormGroup
              controlId="signUpEmail"
              validationState={this.validateEmail()}
            >
              <FormControl
                type="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChangeEmail}
              />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup
              controlId="formBasicTextSignupPass"
              validationState={this.getValidationState()}
            >
              <FormControl
                type="password"
                value={this.state.password}
                placeholder="Mot De Passe"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <HelpBlock id="passwordHelp">
               Le mot de passse doit contenir au minimum 8 caractère de longeur
              </HelpBlock>
            </FormGroup>

            <FormGroup
              controlId="formBasicTextSignupConfPass"
              validationState={this.getValidationStateConf()}
            >
              <FormControl
                type="password"
                value={this.state.confPass}
                placeholder="Confirmer Mot De Passe"
                onChange={this.handleChangeConfirm}
              />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="RadioGroupe">
              <div className="user">
                <label style={{ marginLeft: "0px" }}>
                  <input
                    type="radio"
                    checked={this.state.user}
                    onChange={this.handleChangeRadio}
                    style={{ marginRight: "10px" }}
                  />
                  Internaute
                </label>

                <label style={{ marginLeft: "40px" }}>
                  <input
                    type="radio"
                    checked={this.state.prestataire}
                    onChange={this.handleChangeRadio}
                    style={{ marginRight: "10px" }}
                  />
                  Prestataire
                </label>
              </div>

              <FormControl.Feedback />
            </FormGroup>

            {this.state.prestataire && (
              <FormGroup
                
              >
                <label>
                  Type d'atelier:
                  <select
                    value={this.state.value}
                    onChange={this.handleChangeSelect}
                    className="transparence"
                  >
                    <option value="atelierMecanique">Atelier mécanique</option>
                    <option value="atelierElectrique">
                      Atelier atelier électrique
                    </option>
                    <option value="atelierTolerie">Atelier tolerie</option>
                    <option value="concessionnaire">Concessionnaire </option>
                    <option value="atelierTeinture">
                      Atelier peinture auto
                    </option>
                    <option value="atelierServiceRapide">
                      Atelier service rapide
                    </option>
                    <option value="pieceCarroserie"> Pièce carrosorie</option>
                    <option value="pieceDetachee">Pièces détachées</option>
                  </select>
                </label>
                <br /> <br />
                {/* <label for="myfile">Selectionnez votre logo ici :</label>
                <input type="file" id="myfile" name="myfile" /> */}
               
               <form action="/upload/photo" enctype="multipart/form-data" method="POST"> 
  <input type="file" name="myImage" accept="image/*" />
  <input type="submit" value="Upload Photo"/>
</form>
                <br />


                <FormGroup
              controlId="atelierName"
              validationState={this.getValidationState()}
            >
              <FormControl
                type="text"
                value={this.state.atelierName}
                placeholder="Nom De Votre atelier ..."
                onChange={this.handleChangeAtelierName}
                required
              />
              <FormControl.Feedback />
            </FormGroup>

                <FormGroup
              controlId="url"
              validationState={this.validateUrl()}
            >
              <FormControl
                type=""
                value={this.state.url}
                placeholder="Website Url"
                onChange={this.handleChangeUrl}
              />
              <FormControl.Feedback />
            </FormGroup>

              </FormGroup>

              
              
            )}

            <Button
              block
              bsStyle="warning"
              disabled={this.state.signInLoading}
              onClick={this.state.signInLoading ? null : this.signUpClicked}
            >
              {this.state.signInLoading ? "Processing..." : "Sign Up"}
            </Button>
          </form>

          {this.state.show ? this.displayAlert() : null}
          <a href="/login">already joined ?</a>
        </Col>
      </div>
    );
  }
}

export default SignUp;
