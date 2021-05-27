import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { getFromStorage, setInStorage } from "../utils/storage";
import RESTAPIUrl from "../config/config";
import browserHistory from "../Router/browserHistory";
import Avatar from 'react-avatar';
import "./profile.scss";

class Profile extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: getFromStorage("the_login_n_signup").user.firstName + getFromStorage("the_login_n_signup").user.lastName,
      firstName: getFromStorage("the_login_n_signup").user.firstName,
      lastName: getFromStorage("the_login_n_signup").user.lastName,
      atelierType: getFromStorage("the_login_n_signup").user.atelierType,
      atelierName: getFromStorage("the_login_n_signup").user.atelierName,

      /* -----------------------Rôle------------------------------------- */
      role: getFromStorage("the_login_n_signup").user.role,
      isUserShowed: getFromStorage("the_login_n_signup").user.role == "user",
      isPrestataireShowed:
        getFromStorage("the_login_n_signup").user.role == "prestataire",
      isAdminShowed: getFromStorage("the_login_n_signup").user.role == "admin",

      url: getFromStorage("the_login_n_signup").user.url,
      email: getFromStorage("the_login_n_signup").user.email,

      password: getFromStorage("the_login_n_signup").user.password,

      token: getFromStorage("the_login_n_signup").user.token,
    };
  }
  render() {
    const obj = getFromStorage("the_login_n_signup");
    const showForUser = true;

    return (
      <form>
        {obj && obj.token ? (
          <div className="container">
            <div id="content"  className="content p-0">
              <div  className="profile-header">
                <div className="profile-header-cover"></div>

                <div className="profile-header-content">
                  <div  className="profile-header-img">
                  <Avatar name={this.state.name}/>
                  </div>

                  <div  className="profile-header-info">
                    <h4 className="m-t-sm">

                      {this.state.firstName} {this.state.lastName}
                    </h4>
                    <p className="m-b-sm" value="user.role">
                      {this.state.role}
                    </p>
                  </div>
                </div>

                <ul className="profile-header-tab nav nav-tabs">
                  <li className="nav-item">
                    <a
                      href="#profile-about"
                      className="nav-link active show"
                      data-toggle="tab"
                    >
                      A propos
                    </a>
                  </li>
                </ul>
              </div>

              <div className="profile-container">
                <div className="row row-space-20">
                  <div
                    className="col-md-8"
                    style={{ width: "100%", borderRadius: "5px" }}
                  >
                    <div className="tab-content p-0">
                      <div className="tab-pane active show" id="profile-about">
                        
                        <table className="table table-profile">
                          <thead>
                            <tr>
                              <th colspan="2">Informations Personnels</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="field">Nom</td>
                              <td className="value">
                                {this.state.firstName}
                                <a href="#" className="m-l-10">
                                  Edit
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td className="field">Prénom</td>
                              <td className="value">
                                {this.state.lastName}
                                <a href="#" className="m-l-10">
                                  Edit
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td className="field">Mot de passe</td>
                              <td className="value" type="password">
                                <lable className="hidetext">
                                  {this.state.password}{" "}
                                </lable>
                                <a href="#" className=" m-l-10">
                                  Edit
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td className="field">Email</td>
                              <td className="value">
                                {this.state.email}
                                <a href="#" className="m-l-10">
                                  Edit
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {this.state.isPrestataireShowed && (
                          <table className="table table-profile">
                            <thead>
                              <tr>
                                <th colspan="2">Informations Personnels</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="field">Type d'atelier</td>
                                <td className="value">
                                  {this.state.atelierType}
                                  <a href="#" className="m-l-10">
                                    Edit
                                  </a>
                                </td>
                              </tr>


                              <tr>
                                <td className="field">Nom  de l'atelier</td>
                                <td className="value">
                                  {this.state.atelierName}
                                  <a href="#" className="m-l-10">
                                    Edit
                                  </a>
                                </td>
                              </tr>

                              <tr>
                                <td className="field">Site web</td>
                                <td className="value">
                                  {this.state.url}
                                  <a href="#" className="m-l-10">
                                    Edit
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        )}

                        {this.state.isAdminShowed && (
                          <table className="table table-profile">
                            <thead>
                              <tr>
                                <th colspan="2">Admin INFORMATION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="field"></td>
                                <td className="value">
                                  {this.state.atelierType}
                                </td>
                              </tr>

                              <tr>
                                <td className="field"></td>
                                <td className="value">
                                  {this.state.url}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        )}




                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          browserHistory.push("/login")
        )}{" "}
      </form>
    );
  }
}

export default Profile;
